import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BossCard } from "@/components/boss-card";
import { OSRS_CATEGORIES } from "@/data/osrs-categories";
import { DEMO_CATEGORIES } from "@/data/demo-player";
import { calcPercent } from "@/lib/utils";
import { Sword } from "lucide-react";

export const metadata: Metadata = {
  title: "Bosses — ClogLog",
  description: "All OSRS bosses and their collection log completion stats.",
};

export default function BossesPage() {
  const bossCats = OSRS_CATEGORIES
    .filter((c) => c.parent === "bosses")
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <AppShell showSearch>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <Breadcrumbs items={[{ label: "Bosses" }]} className="mb-5" />

        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
            <Sword className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Bosses</h1>
            <p className="text-sm text-muted-foreground">{bossCats.length} bosses in the collection log</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {bossCats.map((boss) => {
            const demoCat  = DEMO_CATEGORIES.find((c) => c.slug === boss.slug);
            const obtained = demoCat?.obtainedCount ?? 0;
            const total    = demoCat?.totalCount ?? 0;
            const pct      = calcPercent(obtained, total);
            const complete = obtained === total && total > 0;

            const wikiImageUrl = boss.wikiImageSlug
              ? `https://oldschool.runescape.wiki/images/${boss.wikiImageSlug}.png`
              : null;

            // Reliable fallback: RuneLite CDN item sprite by iconItemId
            const fallbackSpriteUrl = boss.iconItemId
              ? `https://static.runelite.net/cache/item/icon/${boss.iconItemId}.png`
              : null;

            return (
              <BossCard
                key={boss.slug}
                slug={boss.slug}
                name={boss.name}
                wikiImageUrl={wikiImageUrl}
                fallbackSpriteUrl={fallbackSpriteUrl}
                obtained={obtained}
                total={total}
                pct={pct}
                complete={complete}
              />
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
