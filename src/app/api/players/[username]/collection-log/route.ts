import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

interface Params {
  params: Promise<{ username: string }>;
}

export async function GET(req: Request, { params }: Params) {
  const { username } = await params;
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const limit = rateLimit(`clog:${ip}`, { windowMs: 60_000, max: 20 });

  if (!limit.allowed) {
    return NextResponse.json({ success: false, error: "Rate limit exceeded" }, { status: 429 });
  }

  try {
    const player = await db.player.findUnique({ where: { username } });
    if (!player) {
      return NextResponse.json(
        { success: false, error: "Player not found" },
        { status: 404 }
      );
    }

    const categories = await db.collectionCategory.findMany({
      include: {
        items: {
          include: {
            playerItems: {
              where: { playerId: player.id },
              select: { obtained: true, quantity: true, obtainedAt: true },
            },
          },
          orderBy: { sortOrder: "asc" },
        },
      },
      orderBy: { sortOrder: "asc" },
    });

    const result = categories.map((cat) => {
      const items = cat.items.map((item) => ({
        ...item,
        obtained: item.playerItems[0]?.obtained ?? false,
        quantity: item.playerItems[0]?.quantity ?? 0,
        obtainedAt: item.playerItems[0]?.obtainedAt ?? null,
        playerItems: undefined,
      }));
      const obtainedCount = items.filter((i) => i.obtained).length;
      return {
        ...cat,
        items,
        obtainedCount,
        totalCount: items.length,
        completionPercent: items.length > 0 ? (obtainedCount / items.length) * 100 : 0,
      };
    });

    return NextResponse.json(
      { success: true, data: result },
      { headers: { "Cache-Control": "public, s-maxage=60" } }
    );
  } catch {
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 500 });
  }
}
