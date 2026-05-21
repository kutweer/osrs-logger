import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { PlayerHeader } from "@/components/player-header";
import { CollectionCategoryCard } from "@/components/collection-category-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Sword, Shield, Scroll, Gamepad2, Layers } from "lucide-react";
import { formatNumber, calcPercent } from "@/lib/utils";
import { DEMO_PLAYER, DEMO_CATEGORIES } from "@/data/demo-player";
import { OSRS_CATEGORIES } from "@/data/osrs-categories";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ tab?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username} — Collection Log`,
    description: `View ${username}'s full OSRS collection log on ClogLog.`,
  };
}

const TABS = [
  { id: "all",       label: "All",       icon: BookOpen  },
  { id: "bosses",    label: "Bosses",    icon: Sword     },
  { id: "raids",     label: "Raids",     icon: Shield    },
  { id: "clues",     label: "Clues",     icon: Scroll    },
  { id: "minigames", label: "Minigames", icon: Gamepad2  },
  { id: "other",     label: "Other",     icon: Layers    },
];

const SECTION_LABELS: Record<string, string> = {
  bosses:    "Bosses",
  raids:     "Raids",
  clues:     "Clue Scrolls",
  minigames: "Minigames",
  other:     "Other",
};

export default async function CollectionLogPage({ params, searchParams }: Props) {
  const { username } = await params;
  const { tab = "all" } = await searchParams;

  const isDemo = username.toLowerCase() === "omhoog" || username.toLowerCase() === "demo";
  if (!isDemo) return notFound();

  const player = DEMO_PLAYER;

  // Group categories by parent
  const grouped = new Map<string, typeof DEMO_CATEGORIES>();
  for (const cat of DEMO_CATEGORIES) {
    const osrsCat = OSRS_CATEGORIES.find((c) => c.slug === cat.slug);
    const parentSlug = osrsCat?.parent ?? "other";
    if (!grouped.has(parentSlug)) grouped.set(parentSlug, []);
    grouped.get(parentSlug)!.push(cat);
  }

  // Stat totals per section
  const sectionStats = Object.fromEntries(
    [...grouped.entries()].map(([parent, cats]) => [
      parent,
      {
        obtained: cats.reduce((s, c) => s + c.obtainedCount, 0),
        total: cats.reduce((s, c) => s + c.totalCount, 0),
        completed: cats.filter((c) => c.obtainedCount === c.totalCount).length,
        count: cats.length,
      },
    ])
  );

  const totalObtained = DEMO_CATEGORIES.reduce((s, c) => s + c.obtainedCount, 0);
  const totalItems    = DEMO_CATEGORIES.reduce((s, c) => s + c.totalCount, 0);
  const completedCats = DEMO_CATEGORIES.filter((c) => c.obtainedCount === c.totalCount).length;
  const logPercent    = calcPercent(totalObtained, totalItems);

  // Which sections to show based on active tab
  const sectionsToShow =
    tab === "all"
      ? (["bosses", "raids", "clues", "minigames", "other"] as const)
      : ([tab] as const);

  return (
    <AppShell showSearch>
      <PlayerHeader player={player} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <Breadcrumbs
          items={[
            { label: "Players", href: "/" },
            { label: player.username, href: `/players/${player.username}` },
            { label: "Collection Log" },
          ]}
          className="mb-5"
        />

        {/* Summary banner */}
        <div className="rounded-lg border border-border bg-card p-5 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <h1 className="text-base font-semibold text-foreground">
                  {player.username}&apos;s Collection Log
                </h1>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Overall Progress</span>
                  <span className="text-primary font-semibold">{logPercent.toFixed(2)}%</span>
                </div>
                <Progress value={logPercent} className="h-3" />
                <p className="text-xs text-muted-foreground">
                  {formatNumber(totalObtained)} obtained · {formatNumber(totalItems - totalObtained)} missing · {formatNumber(totalItems)} total
                </p>
              </div>
            </div>
            <div className="flex gap-6 sm:border-l sm:border-border sm:pl-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground tabular-nums">{formatNumber(totalObtained)}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Obtained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground tabular-nums">{completedCats}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground tabular-nums">{DEMO_CATEGORIES.length}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section mini-stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5">
          {(["bosses", "raids", "clues", "minigames", "other"] as const).map((s) => {
            const st = sectionStats[s];
            if (!st) return null;
            const pct = st.total > 0 ? Math.round((st.obtained / st.total) * 100) : 0;
            return (
              <Link
                key={s}
                href={`/players/${player.username}/collection-log?tab=${s}`}
                className={cn(
                  "rounded-md border p-2.5 text-center transition-colors hover:border-primary/40 hover:bg-secondary/50",
                  tab === s ? "border-primary/60 bg-secondary/60" : "border-border/60 bg-card"
                )}
              >
                <div className="text-base font-bold tabular-nums text-foreground">{pct}%</div>
                <div className="text-[10px] text-muted-foreground capitalize">{SECTION_LABELS[s]}</div>
                <div className="text-[10px] text-muted-foreground/70">{st.obtained}/{st.total}</div>
              </Link>
            );
          })}
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 mb-5 overflow-x-auto pb-1">
          {TABS.map(({ id, label, icon: Icon }) => (
            <Link
              key={id}
              href={`/players/${player.username}/collection-log${id === "all" ? "" : `?tab=${id}`}`}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors",
                tab === id || (id === "all" && tab === "all")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
              {id !== "all" && sectionStats[id] && (
                <Badge
                  variant={sectionStats[id].completed === sectionStats[id].count ? "success" : "secondary"}
                  className="text-[10px] py-0 px-1 ml-0.5"
                >
                  {sectionStats[id].completed}/{sectionStats[id].count}
                </Badge>
              )}
            </Link>
          ))}
        </div>

        {/* Category sections */}
        {sectionsToShow.map((sectionSlug) => {
          const cats = grouped.get(sectionSlug);
          if (!cats || cats.length === 0) return null;
          const sorted = [...cats].sort((a, b) => a.sortOrder - b.sortOrder);
          return (
            <div key={sectionSlug} className="mb-8">
              {tab === "all" && (
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {SECTION_LABELS[sectionSlug]}
                  </h2>
                  <Link
                    href={`/players/${player.username}/collection-log?tab=${sectionSlug}`}
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors"
                  >
                    View all →
                  </Link>
                </div>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sorted.map((cat) => (
                  <CollectionCategoryCard
                    key={cat.id}
                    category={cat}
                    href={`/players/${player.username}/collection-log/${cat.slug}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
