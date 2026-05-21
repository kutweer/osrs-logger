import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  username: z.string().min(1).max(12),
});

export async function GET(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const limit = rateLimit(`search:${ip}`, { windowMs: 60_000, max: 30 });

  if (!limit.allowed) {
    return NextResponse.json(
      { success: false, error: "Rate limit exceeded" },
      {
        status: 429,
        headers: {
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(limit.resetAt),
        },
      }
    );
  }

  const url = new URL(req.url);
  const parsed = schema.safeParse({ username: url.searchParams.get("username") });

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid username" },
      { status: 400 }
    );
  }

  const { username } = parsed.data;

  try {
    const players = await db.player.findMany({
      where: {
        // SQLite: LIKE is case-insensitive for ASCII by default
        // PostgreSQL: add mode: "insensitive" here when switching provider
        username: { contains: username },
      },
      take: 10,
      select: {
        id: true,
        username: true,
        displayName: true,
        accountType: true,
        combatLevel: true,
        collectionLogObtained: true,
        collectionLogTotal: true,
        lastSyncedAt: true,
        lastSyncStatus: true,
      },
      orderBy: { collectionLogObtained: "desc" },
    });

    return NextResponse.json(
      { success: true, data: players },
      {
        headers: {
          "X-RateLimit-Remaining": String(limit.remaining),
          "Cache-Control": "public, s-maxage=30",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Search failed" },
      { status: 500 }
    );
  }
}
