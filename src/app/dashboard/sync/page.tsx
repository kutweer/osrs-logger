import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SyncStatusBadge } from "@/components/sync-status-badge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { DEMO_PLAYER } from "@/data/demo-player";
import { timeAgo, formatDateTime } from "@/lib/utils";

export default async function SyncPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const player = DEMO_PLAYER;

  const jobs = [
    { id: "j1", player: "Omhoog", status: "SUCCESS", provider: "hiscore", startedAt: new Date(Date.now() - 1000 * 60 * 17), finishedAt: new Date(Date.now() - 1000 * 60 * 16) },
    { id: "j2", player: "Omhoog", status: "SUCCESS", provider: "hiscore", startedAt: new Date(Date.now() - 1000 * 60 * 60 * 2), finishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2 + 1000) },
    { id: "j3", player: "Omhoog", status: "FAILED", provider: "hiscore", startedAt: new Date(Date.now() - 1000 * 60 * 60 * 6), finishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6 + 2000), error: "Rate limited by hiscores API" },
  ];

  return (
    <AppShell showSearch showSidebar sidebarDashboard>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Sync" },
          ]}
          className="mb-5"
        />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-foreground">Sync</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Manage data synchronization for your tracked accounts.
            </p>
          </div>
        </div>

        {/* Account sync card */}
        <div className="rounded-md border border-border bg-card p-5 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-foreground">{player.username}</span>
                <Badge variant="ironman">Ironman</Badge>
              </div>
              <SyncStatusBadge
                status={player.lastSyncStatus}
                lastSyncedAt={player.lastSyncedAt}
              />
            </div>
            <Button variant="outline" size="sm" className="gap-1.5">
              <RefreshCw className="h-3.5 w-3.5" />
              Sync now
            </Button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm border-t border-border pt-4">
            <div>
              <p className="text-foreground font-semibold">{timeAgo(player.lastSyncedAt)}</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Last synced</p>
            </div>
            <div>
              <p className="text-foreground font-semibold">hiscore</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Provider</p>
            </div>
            <div>
              <p className="text-green-700 font-semibold">Active</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Status</p>
            </div>
          </div>
        </div>

        {/* Rate limiting info */}
        <div className="rounded-md border border-amber-700/30 bg-amber-900/5 p-4 mb-6 flex gap-3">
          <AlertCircle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-muted-foreground">
            <p className="font-semibold text-foreground mb-0.5">Rate limiting</p>
            Syncs are limited to once every 5 minutes per account. The OSRS hiscores API
            imposes its own limits which may occasionally delay sync jobs.
          </div>
        </div>

        {/* Sync history */}
        <h2 className="text-sm font-semibold text-foreground mb-3">Sync history</h2>
        <div className="rounded-md border border-border bg-card overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-muted-foreground">
                <th className="px-4 py-2.5 text-left font-semibold">Player</th>
                <th className="px-4 py-2.5 text-left font-semibold">Status</th>
                <th className="px-4 py-2.5 text-left font-semibold hidden sm:table-cell">Started</th>
                <th className="px-4 py-2.5 text-left font-semibold hidden md:table-cell">Provider</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-border/40">
                  <td className="px-4 py-2.5 font-medium text-foreground">{job.player}</td>
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      {job.status === "SUCCESS" ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-700" />
                      ) : (
                        <AlertCircle className="h-3.5 w-3.5 text-red-400" />
                      )}
                      <span className={job.status === "SUCCESS" ? "text-green-700" : "text-red-400"}>
                        {job.status}
                      </span>
                      {job.error && (
                        <span className="text-muted-foreground hidden md:inline"> — {job.error}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden sm:table-cell">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {timeAgo(job.startedAt)}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">
                    <Badge variant="muted" className="text-[10px]">{job.provider}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
