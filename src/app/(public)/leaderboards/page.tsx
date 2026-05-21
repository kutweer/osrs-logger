import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EmptyState } from "@/components/empty-state";
import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Leaderboards",
  description: "OSRS collection log leaderboards on ClogLog.",
};

// Demo leaderboard data
const DEMO_LEADERS = [
  { rank: 1, username: "AlexM95", accountType: "NORMAL", obtained: 1341, total: 1477, percent: 90.8 },
  { rank: 2, username: "Woox", accountType: "NORMAL", obtained: 1298, total: 1477, percent: 87.9 },
  { rank: 3, username: "Lynx Titan", accountType: "NORMAL", obtained: 1250, total: 1477, percent: 84.6 },
  { rank: 4, username: "Omhoog", accountType: "IRONMAN", obtained: 834, total: 1477, percent: 56.5 },
  { rank: 5, username: "IronScape", accountType: "IRONMAN", obtained: 812, total: 1477, percent: 55.0 },
];

const ACCOUNT_BADGE: Record<string, "ironman" | "hcim" | "uim" | "muted"> = {
  IRONMAN: "ironman",
  HARDCORE_IRONMAN: "hcim",
  ULTIMATE_IRONMAN: "uim",
};

export default function LeaderboardsPage() {
  return (
    <AppShell showSearch>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Leaderboards" }]}
          className="mb-6"
        />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Leaderboards</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Top collection log completionists tracked on ClogLog.
            </p>
          </div>
          <Badge variant="warning" className="text-xs">Beta</Badge>
        </div>

        {/* Table */}
        <div className="rounded-md border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-xs text-muted-foreground">
                <th className="px-4 py-3 text-left font-semibold w-12">Rank</th>
                <th className="px-4 py-3 text-left font-semibold">Player</th>
                <th className="px-4 py-3 text-right font-semibold">Obtained</th>
                <th className="px-4 py-3 text-right font-semibold w-24 hidden sm:table-cell">%</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_LEADERS.map((player) => (
                <tr
                  key={player.username}
                  className="border-b border-border/40 hover:bg-secondary/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <span
                      className={
                        player.rank === 1
                          ? "text-yellow-400 font-bold"
                          : player.rank === 2
                          ? "text-zinc-300 font-bold"
                          : player.rank === 3
                          ? "text-amber-600 font-bold"
                          : "text-muted-foreground"
                      }
                    >
                      #{player.rank}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <a
                        href={`/players/${player.username}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {player.username}
                      </a>
                      {ACCOUNT_BADGE[player.accountType] && (
                        <Badge variant={ACCOUNT_BADGE[player.accountType]} className="text-[10px] py-0">
                          {player.accountType.replace(/_/g, " ")}
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    <span className="text-primary font-semibold">{player.obtained.toLocaleString()}</span>
                    <span className="text-muted-foreground text-xs"> / {player.total.toLocaleString()}</span>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums hidden sm:table-cell">
                    <span className="font-semibold text-foreground">{player.percent.toFixed(1)}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <EmptyState
            icon={Trophy}
            title="Full leaderboards coming soon"
            description="Leaderboards will expand as more players sync their accounts. Check back after launch."
          />
        </div>
      </div>
    </AppShell>
  );
}
