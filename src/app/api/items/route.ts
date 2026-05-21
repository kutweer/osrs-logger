import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

const querySchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(50),
});

export async function GET(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const limit = rateLimit(`items:${ip}`, { windowMs: 60_000, max: 60 });
  if (!limit.allowed) {
    return NextResponse.json({ success: false, error: "Rate limited" }, { status: 429 });
  }

  const url = new URL(req.url);
  const parsed = querySchema.safeParse(Object.fromEntries(url.searchParams));
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Invalid query" }, { status: 400 });
  }

  const { q, category, page, pageSize } = parsed.data;
  const skip = (page - 1) * pageSize;

  try {
    const where = {
      // SQLite LIKE is case-insensitive for ASCII; add mode:"insensitive" for PostgreSQL
      ...(q && { name: { contains: q } }),
      ...(category && { category: { slug: category } }),
    };

    const [items, total] = await Promise.all([
      db.collectionItem.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { sortOrder: "asc" },
        include: { category: { select: { name: true, slug: true } } },
      }),
      db.collectionItem.count({ where }),
    ]);

    return NextResponse.json(
      { success: true, data: items, meta: { page, pageSize, total } },
      { headers: { "Cache-Control": "public, s-maxage=300" } }
    );
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch items" }, { status: 500 });
  }
}
