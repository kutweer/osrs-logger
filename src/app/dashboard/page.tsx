import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { MetricCard } from "@/components/metric-card";
import { CollectionCategoryCard } from "@/components/collection-category-card";
import { GoalCard } from "@/components/goal-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { PlayerSearch } from "@/components/player-search";
import {
  BookOpen,
  Target,
  CheckCircle2,
  Sword,
  Plus,
  Users,
} from "lucide-react";
import { formatNumber, calcPercent } from "@/lib/utils";
import { DEMO_PLAYER, DEMO_CATEGORIES, DEMO_GOALS } from "@/data/demo-player";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  // In production: fetch user's claimed players and goals from DB
  // For MVP: show demo data to illustrate the dashboard layout
  const player = DEMO_PLAYER;
  const categories = DEMO_CATEGORIES;
  const goals = DEMO_GOALS;
  const activeGoals = goals.filter((g) => g.status === "ACTIVE");
  const logPercent = calcPercent(
    player.collectionLogObtained,
    player.collectionLogTotal
  );

  return (
    <AppShell showSearch showSidebar sidebarDashboard>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <Breadcrumbs
          items={[{ label: "Dashboard" }]}
          className="mb-5"
        />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-foreground">
              Welcome back, {session.user.name ?? session.user.email}
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Here&apos;s your OSRS tracking overview.
            </p>
          </div>
          <Button variant="gold" size="sm" asChild>
            <Link href="/dashboard/goals/new" className="gap-1.5">
              <Plus className="h-3.5 w-3.5" />
              New goal
            </Link>
          </Button>
        </div>

        {/* Player quick-add if no accounts */}
        <div className="rounded-md border border-dashed border-border/60 bg-card/30 p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Search and claim an OSRS account to sync your data</span>
            </div>
            <div className="sm:ml-auto flex gap-2">
              <PlayerSearch size="sm" placeholder="Search username…" className="w-64" />
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <MetricCard
            title="Log completion"
            value={`${logPercent.toFixed(1)}%`}
            subtitle={`${formatNumber(player.collectionLogObtained)} / ${formatNumber(player.collectionLogTotal)}`}
            icon={BookOpen}
            progress={logPercent}
            highlight
          />
          <MetricCard
            title="Categories done"
            value={categories.filter((c) => c.obtainedCount === c.totalCount).length}
            subtitle={`of ${categories.length} tracked`}
            icon={CheckCircle2}
          />
          <MetricCard
            title="Active goals"
            value={activeGoals.length}
            subtitle={`${goals.filter((g) => g.status === "COMPLETED").length} completed`}
            icon={Target}
          />
          <MetricCard
            title="Combat level"
            value={player.combatLevel ?? "—"}
            subtitle={`Total ${formatNumber(player.totalLevel ?? 0)}`}
            icon={Sword}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Pinned goals */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-foreground">Active goals</h2>
              <Link href="/dashboard/goals" className="text-xs text-primary hover:underline">
                View all
              </Link>
            </div>
            {activeGoals.length > 0 ? (
              <div className="space-y-3">
                {activeGoals
                  .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
                  .slice(0, 4)
                  .map((g) => (
                    <GoalCard key={g.id} goal={g} />
                  ))}
                {activeGoals.length > 4 && (
                  <p className="text-xs text-center text-muted-foreground">
                    +{activeGoals.length - 4} more goals.{" "}
                    <Link href="/dashboard/goals" className="text-primary hover:underline">
                      View all
                    </Link>
                  </p>
                )}
              </div>
            ) : (
              <EmptyState
                icon={Target}
                title="No active goals"
                description="Create goals to track your progress towards bosses, items, and collection log milestones."
                action={{ label: "Create goal", onClick: () => {} }}
              />
            )}
          </div>

          {/* Closest categories */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-foreground">Closest to complete</h2>
              <Link
                href={`/players/${player.username}/collection-log`}
                className="text-xs text-primary hover:underline"
              >
                Full log
              </Link>
            </div>
            <div className="space-y-2">
              {[...categories]
                .sort((a, b) => b.completionPercent - a.completionPercent)
                .slice(0, 6)
                .map((cat) => (
                  <CollectionCategoryCard
                    key={cat.id}
                    category={cat}
                    href={`/players/${player.username}/collection-log/${cat.slug}`}
                    compact
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
