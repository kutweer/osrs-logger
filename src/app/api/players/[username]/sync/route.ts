import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";
import { defaultProvider } from "@/lib/providers/collection-log-provider";

interface Params {
  params: Promise<{ username: string }>;
}

export async function POST(req: Request, { params }: Params) {
  const { username } = await params;
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  // 1 sync per player per 5 minutes per IP
  const limit = rateLimit(`sync:${ip}:${username}`, {
    windowMs: 5 * 60_000,
    max: 1,
  });

  if (!limit.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: `Rate limited. Try again in ${Math.ceil((limit.resetAt - Date.now()) / 1000)}s`,
      },
      { status: 429 }
    );
  }

  try {
    // Find or create player record
    let player = await db.player.findUnique({ where: { username } });
    if (!player) {
      player = await db.player.create({
        data: { username, lastSyncStatus: "RUNNING" },
      });
    } else {
      await db.player.update({
        where: { username },
        data: { lastSyncStatus: "RUNNING" },
      });
    }

    // Create sync job record
    const job = await db.syncJob.create({
      data: {
        playerId: player.id,
        status: "RUNNING",
        provider: "hiscore",
        startedAt: new Date(),
      },
    });

    // Fetch hiscore data
    let hiscoreData = null;
    try {
      hiscoreData = await defaultProvider.fetchPlayer(username);
    } catch {
      // Will handle below
    }

    if (!hiscoreData) {
      await db.player.update({
        where: { id: player.id },
        data: { lastSyncStatus: "FAILED", syncErrorMessage: "Player not found on hiscores" },
      });
      await db.syncJob.update({
        where: { id: job.id },
        data: { status: "FAILED", finishedAt: new Date(), errorMessage: "Not found on hiscores" },
      });
      return NextResponse.json(
        { success: false, error: "Player not found on hiscores" },
        { status: 404 }
      );
    }

    // Update player with hiscore data
    const skills = hiscoreData.skills;
    const totalXp = Object.values(skills).reduce((sum, s) => sum + (s.xp ?? 0), 0);
    const combatLevel = Math.floor(
      (skills.attack?.level ?? 1) +
      (skills.defence?.level ?? 1) +
      (skills.strength?.level ?? 1) +
      (skills.hitpoints?.level ?? 10) +
      (skills.ranged?.level ?? 1) / 2 +
      (skills.prayer?.level ?? 1) / 2 +
      (skills.magic?.level ?? 1) / 2
    );

    await db.player.update({
      where: { id: player.id },
      data: {
        totalLevel: skills.overall?.level ?? null,
        totalXp: BigInt(totalXp),
        combatLevel,
        lastSyncedAt: new Date(),
        lastSyncStatus: "SUCCESS",
        syncErrorMessage: null,
      },
    });

    await db.syncJob.update({
      where: { id: job.id },
      data: { status: "SUCCESS", finishedAt: new Date() },
    });

    return NextResponse.json({
      success: true,
      data: { message: "Sync completed", jobId: job.id },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Sync failed" },
      { status: 500 }
    );
  }
}
