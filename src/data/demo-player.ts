// Demo player data for "Omhoog" — shown on landing page and as default
// This lets the MVP look functional without requiring a real sync

import type {
  Player,
  CollectionCategoryWithProgress,
  CollectionItemWithStatus,
  Goal,
} from "@/types";
import { OSRS_CATEGORIES } from "./osrs-categories";
import { ALL_COLLECTION_LOG_ITEMS } from "./collection-log-items";

export const DEMO_PLAYER: Player = {
  id: "demo-omhoog",
  username: "Omhoog",
  displayName: "Omhoog",
  accountType: "IRONMAN",
  combatLevel: 126,
  totalLevel: 2187,
  totalXp: 498_234_122,
  collectionLogTotal: 1477,
  collectionLogObtained: 834,
  lastSyncedAt: new Date(Date.now() - 1000 * 60 * 17), // 17 min ago
  lastSyncStatus: "SUCCESS",
  createdAt: new Date("2024-01-15"),
  updatedAt: new Date(),
};

function generateDemoCategories(): CollectionCategoryWithProgress[] {
  const leafCats = OSRS_CATEGORIES.filter((c) => c.parent !== undefined);

  return leafCats.map((cat) => {
    const catItems = ALL_COLLECTION_LOG_ITEMS.filter((i) => i.category === cat.slug);
    const catId = `demo-cat-${cat.slug}`;

    const items: CollectionItemWithStatus[] = catItems.map((item) => {
      // Deterministic "obtained" based on itemId — gives a realistic ~71% completion spread
      const obtained = item.itemId % 7 !== 3;
      const msAgo = (item.itemId * 137891) % (1000 * 60 * 60 * 24 * 365);
      return {
        id: `demo-item-${item.slug}`,
        itemId: item.itemId,
        name: item.name,
        slug: item.slug,
        categoryId: catId,
        sortOrder: item.sortOrder,
        tradeable: true,
        members: true,
        stackable: false,
        noted: false,
        dropSource: item.dropSource,
        dropRarity: item.dropRarity,
        dropRarityNum: item.dropRarityNum,
        obtained,
        quantity: obtained ? 1 : 0,
        obtainedAt: obtained ? new Date(Date.now() - msAgo).toISOString() : null,
      };
    });

    const obtainedCount = items.filter((i) => i.obtained).length;
    const totalCount = items.length;

    return {
      id: catId,
      slug: cat.slug,
      name: cat.name,
      sortOrder: cat.sortOrder,
      iconItemId: cat.iconItemId,
      obtainedCount,
      totalCount,
      itemCount: totalCount,
      completionPercent: totalCount > 0 ? (obtainedCount / totalCount) * 100 : 0,
      items,
    };
  });
}

export const DEMO_CATEGORIES: CollectionCategoryWithProgress[] = generateDemoCategories();

export const DEMO_GOALS: Goal[] = [
  {
    id: "g1",
    userId: "demo-user",
    playerId: "demo-omhoog",
    title: "Complete Chambers of Xeric log",
    type: "COMPLETE_CATEGORY",
    status: "ACTIVE",
    priority: "HIGH",
    pinned: true,
    targetCategoryId: "cat-cox",
    currentProgress: 6,
    targetProgress: 8,
    notes: "Just need Kodai insignia and Ancestral robe top. Averaging 2-3 purples per 100 raids.",
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date(),
  },
  {
    id: "g2",
    userId: "demo-user",
    playerId: "demo-omhoog",
    title: "Get Tanzanite mutagen",
    type: "OBTAIN_ITEM",
    status: "ACTIVE",
    priority: "MEDIUM",
    pinned: false,
    targetItemId: 12924,
    currentProgress: 0,
    targetProgress: 1,
    notes: "1/13106 — pure RNG. Running scales at Zulrah in spare time.",
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date(),
  },
  {
    id: "g3",
    userId: "demo-user",
    playerId: "demo-omhoog",
    title: "Reach 99 Slayer",
    type: "SKILL_XP",
    status: "ACTIVE",
    priority: "HIGH",
    pinned: true,
    targetSkill: "Slayer",
    currentProgress: 87_421_983,
    targetProgress: 200_000_000,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date(),
  },
  {
    id: "g4",
    userId: "demo-user",
    playerId: "demo-omhoog",
    title: "500 Theatre of Blood completions",
    type: "BOSS_KC",
    status: "ACTIVE",
    priority: "MEDIUM",
    pinned: false,
    targetBoss: "Theatre of Blood",
    currentProgress: 312,
    targetProgress: 500,
    notes: "Pushing for collection log completion. Need rapier, Justiciar faceplate, and legguards.",
    createdAt: new Date("2024-04-01"),
    updatedAt: new Date(),
  },
  {
    id: "g5",
    userId: "demo-user",
    playerId: "demo-omhoog",
    title: "Get Jar of souls from Cerberus",
    type: "OBTAIN_ITEM",
    status: "ACTIVE",
    priority: "LOW",
    pinned: false,
    targetItemId: 13265,
    currentProgress: 0,
    targetProgress: 1,
    notes: "1/2000. Will farm between ToB sessions.",
    createdAt: new Date("2024-07-20"),
    updatedAt: new Date(),
  },
  {
    id: "g6",
    userId: "demo-user",
    playerId: "demo-omhoog",
    title: "Complete Abyssal Sire log",
    type: "COMPLETE_CATEGORY",
    status: "COMPLETED",
    priority: "HIGH",
    pinned: false,
    targetCategoryId: "cat-abyssal-sire",
    currentProgress: 12,
    targetProgress: 12,
    createdAt: new Date("2024-01-10"),
    completedAt: new Date("2024-05-03"),
    updatedAt: new Date("2024-05-03"),
  },
  {
    id: "g7",
    userId: "demo-user",
    playerId: "demo-omhoog",
    title: "56% Collection Log",
    type: "COLLECTION_LOG_PERCENT",
    status: "COMPLETED",
    priority: "MEDIUM",
    pinned: false,
    currentProgress: 56,
    targetProgress: 56,
    createdAt: new Date("2024-01-01"),
    completedAt: new Date("2024-09-22"),
    updatedAt: new Date("2024-09-22"),
  },
];
