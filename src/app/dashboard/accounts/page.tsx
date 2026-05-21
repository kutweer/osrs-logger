import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PlayerSearch } from "@/components/player-search";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SyncStatusBadge } from "@/components/sync-status-badge";
import { EmptyState } from "@/components/empty-state";
import { Progress } from "@/components/ui/progress";
import { Users, RefreshCw, Star, ExternalLink, Sword } from "lucide-react";
import { DEMO_PLAYER } from "@/data/demo-player";
import { formatNumber, calcPercent, timeAgo } from "@/lib/utils";
import Link from "next/link";

export default async function AccountsPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const player = DEMO_PLAYER;
  const logPercent = calcPercent(player.collectionLogObtained, player.collectionLogTotal);

  return (
    <AppShell showSearch showSidebar sidebarDashboard>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Accounts" },
          ]}
          className="mb-5"
        />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Accounts
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Manage your claimed OSRS accounts.
            </p>
          </div>
        </div>

        {/* Search to add */}
        <div className="rounded-md border border-dashed border-border/60 bg-card/20 p-4 mb-6">
          <p className="text-xs text-muted-foreground mb-2">Add an account</p>
          <PlayerSearch size="sm" placeholder="Search OSRS username to claim…" />
        </div>

        {/* Claimed accounts */}
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Claimed accounts
        </h2>

        <div className="space-y-3">
          {/* Demo: Omhoog */}
          <div className="rounded-md border border-border bg-card p-4">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md border border-border/50 bg-muted/30 flex items-center justify-center">
                  <Sword className="h-5 w-5 text-muted-foreground/50" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/players/${player.username}`}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {player.username}
                    </Link>
                    <Badge variant="ironman" className="text-xs">Ironman</Badge>
                    <Badge variant="gold" className="text-xs gap-1">
                      <Star className="h-2.5 w-2.5 fill-current" />
                      Primary
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>Combat {player.combatLevel}</span>
                    <span>Total {formatNumber(player.totalLevel ?? 0)}</span>
                    <span className="text-primary font-medium">{logPercent.toFixed(1)}% log</span>
                  </div>
                  <div className="mt-2">
                    <SyncStatusBadge status={player.lastSyncStatus} lastSyncedAt={player.lastSyncedAt} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/players/${player.username}`} className="gap-1.5">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Profile
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <RefreshCw className="h-3.5 w-3.5" />
                  Sync
                </Button>
              </div>
            </div>

            {/* Log progress */}
            <div className="mt-4 space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Collection Log</span>
                <span className="text-primary font-semibold">
                  {formatNumber(player.collectionLogObtained)} / {formatNumber(player.collectionLogTotal)}
                </span>
              </div>
              <Progress value={logPercent} className="h-1.5" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <EmptyState
            icon={Users}
            title="Add more accounts"
            description="Search for an OSRS username above to claim additional accounts. You can track Normal, Ironman, and Group Ironman accounts."
          />
        </div>
      </div>
    </AppShell>
  );
}
