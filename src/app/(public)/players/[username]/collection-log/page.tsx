import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { PlayerHeader } from "@/components/player-header";
import { CollectionCategoryCard } from "@/components/collection-category-card";
import { MetricCard } from "@/components/metric-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, BookOpen, Target, Layers } from "lucide-react";
import { formatNumber, calcPercent } from "@/lib/utils";
import { DEMO_PLAYER, DEMO_CATEGORIES } from "@/data/demo-player";

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username} — Collection Log`,
    description: `View ${username}'s full OSRS collection log on ClogLog.`,
  };
}

export default async function CollectionLogPage({ params }: Props) {
  const { username } = await params;
  const isDemo = username.toLowerCase() === "omhoog" || username.toLowerCase() === "demo";
  if (!isDemo) return notFound();

  const player = DEMO_PLAYER;
  const categories = DEMO_CATEGORIES;

  const totalObtained = categories.reduce((s, c) => s + c.obtainedCount, 0);
  const totalItems = categories.reduce((s, c) => s + c.totalCount, 0);
  const completedCats = categories.filter(c => c.obtainedCount === c.totalCount).length;
  const logPercent = calcPercent(totalObtained, totalItems);

  // Group by parent (bosses, raids, etc.) — simplified grouping for demo
  const grouped = [
    { label: "Bosses & Raids", cats: categories.slice(0, 4) },
    { label: "Other", cats: categories.slice(4) },
  ].filter(g => g.cats.length > 0);

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
        <div className="rounded-lg border border-border bg-card p-5 mb-6">
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
                <div className="text-2xl font-bold text-foreground tabular-nums">{categories.length}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <MetricCard
            title="Bosses"
            value="24/32"
            subtitle="Unique slots"
            icon={Target}
            progress={75}
          />
          <MetricCard
            title="Raids"
            value="9/14"
            subtitle="Unique slots"
            icon={Layers}
            progress={64}
          />
          <MetricCard
            title="Pets"
            value="3/8"
            subtitle="Pets obtained"
            icon={CheckCircle2}
            progress={37.5}
          />
          <MetricCard
            title="Clues"
            value="12/20"
            subtitle="Unique rewards"
            icon={BookOpen}
            progress={60}
          />
        </div>

        {/* Categories grouped */}
        {grouped.map((group) => (
          <div key={group.label} className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {group.label}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.cats.map((cat) => (
                <CollectionCategoryCard
                  key={cat.id}
                  category={cat}
                  href={`/players/${player.username}/collection-log/${cat.slug}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
