import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { fetchGEIDsMap } from "@/lib/providers/wiki-data-provider";
import { DEMO_ITEMS, OSRS_CATEGORIES } from "@/data/osrs-categories";
import { slugify } from "@/lib/utils";

export async function POST(req: Request) {
  const session = await auth();
  // In production: check if user is admin
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const adminKey = req.headers.get("x-admin-key");
  if (adminKey !== process.env.ADMIN_KEY && process.env.NODE_ENV === "production") {
    return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
  }

  try {
    let seeded = 0;

    // Upsert categories
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

    // Upsert demo items
    for (const item of DEMO_ITEMS) {
      const category = await db.collectionCategory.findFirst({
        where: { slug: item.category },
      });
      if (!category) continue;

      const slug = item.slug ?? slugify(item.name);
      await db.collectionItem.upsert({
        where: { itemId: item.itemId },
        create: {
          itemId: item.itemId,
          name: item.name,
          slug,
          categoryId: category.id,
          sortOrder: item.sortOrder,
          dropSource: item.dropSource ?? null,
          dropRarity: item.dropRarity ?? null,
          dropRarityNum: item.dropRarityNum ?? null,
          wikiUrl: `https://oldschool.runescape.wiki/w/${encodeURIComponent(item.name.replace(/ /g, "_"))}`,
          members: true,
          tradeable: true,
          stackable: false,
          noted: false,
        },
        update: {
          name: item.name,
          dropSource: item.dropSource ?? null,
          dropRarity: item.dropRarity ?? null,
        },
      });
      seeded++;
    }

    return NextResponse.json({
      success: true,
      data: { message: `Metadata refresh complete. ${seeded} items upserted.` },
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Refresh failed" },
      { status: 500 }
    );
  }
}
