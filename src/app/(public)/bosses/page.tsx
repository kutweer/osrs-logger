import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OSRS_CATEGORIES } from "@/data/osrs-categories";
import { DEMO_CATEGORIES } from "@/data/demo-player";
import { cn, calcPercent } from "@/lib/utils";
import { Sword } from "lucide-react";

export const metadata: Metadata = {
  title: "Bosses — ClogLog",
  description: "All OSRS bosses and their collection log completion stats.",
};

export default function BossesPage() {
  const bossCats = OSRS_CATEGORIES.filter((c) => c.parent === "bosses");

  return (
    <AppShell showSearch>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <Breadcrumbs
          items={[{ label: "Bosses" }]}
          className="mb-5"
        />

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
            const demoCat = DEMO_CATEGORIES.find((c) => c.slug === boss.slug);
            const obtained = demoCat?.obtainedCount ?? 0;
            const total = demoCat?.totalCount ?? 0;
            const pct = calcPercent(obtained, total);
            const complete = obtained === total && total > 0;
            const bossImageUrl = boss.wikiImageSlug
              ? `https://oldschool.runescape.wiki/images/${boss.wikiImageSlug}.png`
              : null;

            return (
              <Link
                key={boss.slug}
                href={`/bosses/${boss.slug}`}
                className="group rounded-lg border border-border/60 bg-card overflow-hidden hover:border-primary/40 transition-all duration-150"
              >
                {/* Boss image */}
                <div className="relative h-28 bg-gradient-to-b from-muted/30 to-muted/10 flex items-center justify-center border-b border-border/40">
                  {bossImageUrl ? (
                    <Image
                      src={bossImageUrl}
                      alt={boss.name}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-200"
                      unoptimized
                    />
                  ) : (
                    <Sword className="h-8 w-8 text-muted-foreground/30" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                  {complete && (
                    <Badge variant="success" className="absolute top-2 right-2 text-[10px]">
                      ✓ Done
                    </Badge>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate mb-0.5">
                    {boss.name}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
                    <span>{obtained}/{total} items</span>
                    <span className={cn("font-semibold tabular-nums", complete ? "text-green-400" : "text-primary")}>
                      {pct.toFixed(0)}%
                    </span>
                  </div>
                  <Progress value={pct} className="h-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
