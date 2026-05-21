import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { PlayerHeader } from "@/components/player-header";
import { MetricCard } from "@/components/metric-card";
import { CollectionCategoryCard } from "@/components/collection-category-card";
import { GoalCard } from "@/components/goal-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState } from "@/components/empty-state";
import {
  CheckCircle2,
  Target,
  TrendingUp,
  Sword,
  BookOpen,
  Trophy,
  Clock,
} from "lucide-react";
import { formatNumber, calcPercent, timeAgo } from "@/lib/utils";
import {
  DEMO_PLAYER,
  DEMO_CATEGORIES,
  DEMO_GOALS,
} from "@/data/demo-player";

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username}'s Profile`,
    description: `View ${username}'s OSRS collection log progress and goals on ClogLog.`,
  };
}

export default async function PlayerProfilePage({ params }: Props) {
  const { username } = await params;

  // For demo: serve demo data for "Omhoog", 404 for others in MVP
  const isDemo =
    username.toLowerCase() === "omhoog" ||
    username.toLowerCase() === "demo";

  if (!isDemo) {
    // In production this would fetch from DB
    // For MVP, redirect unknown players to demo
    return notFound();
  }

  const player = DEMO_PLAYER;
  const categories = DEMO_CATEGORIES;
  const goals = DEMO_GOALS;
  const activeGoals = goals.filter((g) => g.status === "ACTIVE");
  const completedCategories = categories.filter(
    (c) => c.obtainedCount === c.totalCount
  );

  const logPercent = calcPercent(
    player.collectionLogObtained,
    player.collectionLogTotal
  );

  // Sort categories: closest to completion first
  const sortedByClosest = [...categories].sort(
    (a, b) => b.completionPercent - a.completionPercent
  );

  return (
    <AppShell showSearch>
      <PlayerHeader player={player} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <Breadcrumbs
          items={[
            { label: "Players", href: "/" },
            { label: player.username },
          ]}
          className="mb-5"
        />

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <MetricCard
            title="Log completion"
            value={`${logPercent.toFixed(1)}%`}
            subtitle={`${formatNumber(player.collectionLogObtained)} / ${formatNumber(player.collectionLogTotal)} slots`}
            icon={BookOpen}
            progress={logPercent}
            highlight
          />
          <MetricCard
            title="Categories done"
            value={completedCategories.length}
            subtitle={`of ${categories.length} categories`}
            icon={CheckCircle2}
            progress={calcPercent(completedCategories.length, categories.length)}
          />
          <MetricCard
            title="Active goals"
            value={activeGoals.length}
            subtitle={`${goals.filter((g) => g.status === "COMPLETED").length} completed`}
            icon={Target}
          />
          <MetricCard
            title="Total level"
            value={formatNumber(player.totalLevel ?? 0)}
            subtitle={`Combat level ${player.combatLevel}`}
            icon={Sword}
          />
        </div>

        {/* Tabs: Collection Log | Goals | Overview */}
        <Tabs defaultValue="collection-log">
          <TabsList className="mb-5">
            <TabsTrigger value="collection-log">
              <BookOpen className="h-3.5 w-3.5 mr-1.5" />
              Collection Log
            </TabsTrigger>
            <TabsTrigger value="goals">
              <Target className="h-3.5 w-3.5 mr-1.5" />
              Goals ({activeGoals.length})
            </TabsTrigger>
            <TabsTrigger value="overview">
              <TrendingUp className="h-3.5 w-3.5 mr-1.5" />
              Overview
            </TabsTrigger>
          </TabsList>

          {/* ── Collection Log Tab ────────────────────────── */}
          <TabsContent value="collection-log">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-foreground">
                Categories
              </h2>
              <Link
                href={`/players/${player.username}/collection-log`}
                className="text-xs text-primary hover:underline"
              >
                View full log →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sortedByClosest.map((cat) => (
                <CollectionCategoryCard
                  key={cat.id}
                  category={cat}
                  href={`/players/${player.username}/collection-log/${cat.slug}`}
                />
              ))}
            </div>
          </TabsContent>

          {/* ── Goals Tab ─────────────────────────────────── */}
          <TabsContent value="goals">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-foreground">
                Active goals
              </h2>
              <Link
                href="/dashboard/goals/new"
                className="text-xs text-primary hover:underline"
              >
                + New goal
              </Link>
            </div>

            {activeGoals.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {activeGoals.map((g) => (
                  <GoalCard key={g.id} goal={g} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Target}
                title="No active goals"
                description="Create a goal to track your progress towards bosses, items, and collection log milestones."
                className="mb-6"
              />
            )}

            {goals.filter((g) => g.status === "COMPLETED").length > 0 && (
              <>
                <h2 className="text-sm font-semibold text-foreground mb-3">
                  Completed
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {goals
                    .filter((g) => g.status === "COMPLETED")
                    .map((g) => (
                      <GoalCard key={g.id} goal={g} />
                    ))}
                </div>
              </>
            )}
          </TabsContent>

          {/* ── Overview Tab ──────────────────────────────── */}
          <TabsContent value="overview">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Closest to completion */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  Closest to completion
                </h3>
                <div className="space-y-2">
                  {sortedByClosest.slice(0, 5).map((cat) => (
                    <CollectionCategoryCard
                      key={cat.id}
                      category={cat}
                      href={`/players/${player.username}/collection-log/${cat.slug}`}
                      compact
                    />
                  ))}
                </div>
              </div>

              {/* Pinned goals */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Pinned goals
                </h3>
                {activeGoals.filter((g) => g.pinned).length > 0 ? (
                  <div className="space-y-2">
                    {activeGoals
                      .filter((g) => g.pinned)
                      .map((g) => (
                        <GoalCard key={g.id} goal={g} />
                      ))}
                  </div>
                ) : (
                  <EmptyState
                    icon={Target}
                    title="No pinned goals"
                    description="Pin important goals to see them here."
                  />
                )}
              </div>

              {/* Last synced */}
              <div className="sm:col-span-2">
                <div className="rounded-md border border-border bg-card/50 p-4 flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span>
                    Last synced{" "}
                    <span className="text-foreground">
                      {timeAgo(player.lastSyncedAt)}
                    </span>
                    . Data is pulled from the OSRS hiscores API.
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
}
