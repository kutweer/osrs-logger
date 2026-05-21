import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

interface Params {
  params: Promise<{ username: string }>;
}

export async function GET(req: Request, { params }: Params) {
  const { username } = await params;
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const limit = rateLimit(`player:${ip}`, { windowMs: 60_000, max: 30 });

  if (!limit.allowed) {
    return NextResponse.json(
      { success: false, error: "Rate limit exceeded" },
      { status: 429 }
    );
  }

  try {
    const player = await db.player.findUnique({
      where: { username },
      include: {
        _count: {
          select: { collectionItems: true },
        },
      },
    });

    if (!player) {
      return NextResponse.json(
        { success: false, error: "Player not found", code: "NOT_FOUND" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: player },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
