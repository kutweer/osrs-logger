import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { GoalCard } from "@/components/goal-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Target, Plus, CheckCircle2, Pause } from "lucide-react";
import { DEMO_GOALS } from "@/data/demo-player";
import type { Goal } from "@/types";

export default async function GoalsPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const goals = DEMO_GOALS as Goal[];
  const active = goals.filter((g) => g.status === "ACTIVE");
  const completed = goals.filter((g) => g.status === "COMPLETED");
  const paused = goals.filter((g) => g.status === "PAUSED");

  return (
    <AppShell showSearch showSidebar sidebarDashboard>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Goals" },
          ]}
          className="mb-5"
        />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-foreground">Goals</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Track your OSRS milestones and collection log objectives.
            </p>
          </div>
          <Button variant="gold" size="sm" asChild>
            <Link href="/dashboard/goals/new" className="gap-1.5">
              <Plus className="h-3.5 w-3.5" />
              New goal
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="active">
          <TabsList className="mb-5">
            <TabsTrigger value="active">
              <Target className="h-3.5 w-3.5 mr-1.5" />
              Active
              {active.length > 0 && (
                <Badge variant="gold" className="ml-1.5 text-[10px] py-0 px-1.5">
                  {active.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed">
              <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
              Completed ({completed.length})
            </TabsTrigger>
            <TabsTrigger value="paused">
              <Pause className="h-3.5 w-3.5 mr-1.5" />
              Paused ({paused.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {active.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-3">
                {active
                  .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
                  .map((g) => (
                    <GoalCard key={g.id} goal={g} />
                  ))}
              </div>
            ) : (
              <EmptyState
                icon={Target}
                title="No active goals"
                description="Create your first goal to start tracking progress towards items, bosses, and collection log milestones."
                action={{ label: "Create goal", onClick: () => {} }}
              />
            )}
          </TabsContent>

          <TabsContent value="completed">
            {completed.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-3">
                {completed.map((g) => (
                  <GoalCard key={g.id} goal={g} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={CheckCircle2}
                title="No completed goals yet"
                description="Your completed goals will appear here."
              />
            )}
          </TabsContent>

          <TabsContent value="paused">
            {paused.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-3">
                {paused.map((g) => (
                  <GoalCard key={g.id} goal={g} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Pause}
                title="No paused goals"
                description="Paused goals are shown here."
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
}
