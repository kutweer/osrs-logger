import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { OSRS_CATEGORIES, DEMO_ITEMS } from "../src/data/osrs-categories";
import { DEMO_GOALS } from "../src/data/demo-player";

const db = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database…");

  // ─── Categories ───────────────────────────────────────────
  console.log("  Creating categories…");
  for (const cat of OSRS_CATEGORIES) {
    await db.collectionCategory.upsert({
      where: { slug: cat.slug },
      create: {
        slug: cat.slug,
        name: cat.name,
        parentSlug: cat.parent ?? null,
        sortOrder: cat.sortOrder,
        iconItemId: cat.iconItemId ?? null,
        description: cat.description ?? null,
      },
      update: {
        name: cat.name,
        sortOrder: cat.sortOrder,
        iconItemId: cat.iconItemId ?? null,
      },
    });
  }
  console.log(`  ✓ ${OSRS_CATEGORIES.length} categories`);

  // ─── Items ────────────────────────────────────────────────
  console.log("  Creating items…");
  let itemCount = 0;
  for (const item of DEMO_ITEMS) {
    const category = await db.collectionCategory.findFirst({
      where: { slug: item.category },
    });
    if (!category) {
      console.warn(`  ⚠ Category "${item.category}" not found for item "${item.name}"`);
      continue;
    }

    await db.collectionItem.upsert({
      where: { itemId: item.itemId },
      create: {
        itemId: item.itemId,
        name: item.name,
        slug: item.slug,
        categoryId: category.id,
        sortOrder: item.sortOrder,
        dropSource: item.dropSource ?? null,
        dropRarity: item.dropRarity ?? null,
        dropRarityNum: item.dropRarityNum ?? null,
        wikiUrl: `https://oldschool.runescape.wiki/w/${encodeURIComponent(item.name.replace(/ /g, "_"))}`,
        members: true,
        tradeable: !["Vorkath's head", "Jar of souls"].includes(item.name),
        stackable: ["Zul-andra teleport", "Onyx bolts (e)"].includes(item.name),
        noted: false,
      },
      update: {
        name: item.name,
        dropSource: item.dropSource ?? null,
        dropRarity: item.dropRarity ?? null,
      },
    });
    itemCount++;
  }
  console.log(`  ✓ ${itemCount} items`);

  // ─── Demo player: Omhoog ──────────────────────────────────
  console.log("  Creating demo player Omhoog…");
  const player = await db.player.upsert({
    where: { username: "Omhoog" },
    create: {
      username: "Omhoog",
      displayName: "Omhoog",
      accountType: "IRONMAN",
      combatLevel: 126,
      totalLevel: 2187,
      totalXp: BigInt(498_234_122),
      collectionLogObtained: 834,
      collectionLogTotal: 1477,
      lastSyncedAt: new Date(Date.now() - 1000 * 60 * 17),
      lastSyncStatus: "SUCCESS",
    },
    update: {
      collectionLogObtained: 834,
      collectionLogTotal: 1477,
      lastSyncedAt: new Date(),
    },
  });

  // Attach collection items to Omhoog
  const allItems = await db.collectionItem.findMany();
  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i];
    const obtained = i % 3 !== 0; // 2/3 of items obtained for demo
    await db.playerCollectionItem.upsert({
      where: { playerId_itemId: { playerId: player.id, itemId: item.id } },
      create: {
        playerId: player.id,
        itemId: item.id,
        categoryId: item.categoryId,
        obtained,
        quantity: obtained ? Math.floor(Math.random() * 3) + 1 : 0,
        obtainedAt: obtained ? new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365) : null,
      },
      update: {},
    });
  }

  // ─── Demo user account ────────────────────────────────────
  console.log("  Creating demo user account…");
  const hashedPw = await bcrypt.hash("password123", 12);
  const user = await db.user.upsert({
    where: { email: "demo@cloglog.app" },
    create: {
      email: "demo@cloglog.app",
      name: "Demo User",
      passwordHash: hashedPw,
    },
    update: {},
  });

  // Claim the demo player
  await db.playerClaim.upsert({
    where: { userId_playerId: { userId: user.id, playerId: player.id } },
    create: { userId: user.id, playerId: player.id, isPrimary: true },
    update: {},
  });

  // ─── Goals ────────────────────────────────────────────────
  console.log("  Creating demo goals…");
  for (const goal of DEMO_GOALS) {
    await db.goal.upsert({
      where: { id: goal.id },
      create: {
        id: goal.id,
        userId: user.id,
        playerId: player.id,
        title: goal.title,
        description: goal.description ?? null,
        type: goal.type,
        status: goal.status,
        priority: goal.priority,
        pinned: goal.pinned,
        targetItemId: goal.targetItemId ?? null,
        targetCategoryId: goal.targetCategoryId ?? null,
        targetSkill: goal.targetSkill ?? null,
        targetBoss: goal.targetBoss ?? null,
        customTarget: goal.customTarget ?? null,
        currentProgress: goal.currentProgress,
        targetProgress: goal.targetProgress,
        notes: goal.notes ?? null,
        completedAt: goal.completedAt ? new Date(goal.completedAt) : null,
        createdAt: new Date(goal.createdAt),
      },
      update: {},
    });
  }
  console.log(`  ✓ ${DEMO_GOALS.length} goals`);

  console.log("\n✅ Seed complete!");
  console.log("   Demo login: demo@cloglog.app / password123");
  console.log("   Demo player: Omhoog (Ironman)");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
