import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const categories = await db.collectionCategory.findMany({
      orderBy: [{ parentSlug: "asc" }, { sortOrder: "asc" }],
      include: {
        _count: { select: { items: true } },
      },
    });

    return NextResponse.json(
      { success: true, data: categories },
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
    );
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch categories" }, { status: 500 });
  }
}
