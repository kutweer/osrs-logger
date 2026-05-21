import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

const createSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  type: z.enum([
    "OBTAIN_ITEM", "COMPLETE_CATEGORY", "COLLECTION_LOG_PERCENT",
    "BOSS_KC", "CLUE_COUNT", "SKILL_LEVEL", "SKILL_XP", "CUSTOM",
  ]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]).default("MEDIUM"),
  targetItemId: z.number().int().positive().optional(),
  targetCategoryId: z.string().optional(),
  targetSkill: z.string().optional(),
  targetBoss: z.string().optional(),
  customTarget: z.string().optional(),
  currentProgress: z.number().int().min(0).default(0),
  targetProgress: z.number().int().min(1),
  notes: z.string().max(500).optional(),
  playerId: z.string().optional(),
});

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const goals = await db.goal.findMany({
      where: { userId: session.user.id },
      orderBy: [{ pinned: "desc" }, { updatedAt: "desc" }],
    });
    return NextResponse.json({ success: true, data: goals });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch goals" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body: unknown = await req.json();
    const parsed = createSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const goal = await db.goal.create({
      data: { ...parsed.data, userId: session.user.id, status: "ACTIVE" },
    });

    return NextResponse.json({ success: true, data: goal }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to create goal" }, { status: 500 });
  }
}
