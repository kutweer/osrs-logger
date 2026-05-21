"use client";

import { RefreshCw, Shield, Sword, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SyncStatusBadge } from "@/components/sync-status-badge";
import { cn, formatNumber, calcPercent } from "@/lib/utils";
import type { Player } from "@/types";

const ACCOUNT_TYPE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  NORMAL: () => null,
  IRONMAN: ({ className }) => <Shield className={cn("text-zinc-400", className)} />,
  HARDCORE_IRONMAN: ({ className }) => <Shield className={cn("text-red-400", className)} />,
  ULTIMATE_IRONMAN: ({ className }) => <Shield className={cn("text-yellow-400", className)} />,
  GROUP_IRONMAN: ({ className }) => <Star className={cn("text-blue-400", className)} />,
  HARDCORE_GROUP_IRONMAN: ({ className }) => <Star className={cn("text-orange-400", className)} />,
};

const ACCOUNT_TYPE_BADGE: Record<string, "ironman" | "hcim" | "uim" | "outline" | "muted"> = {
  IRONMAN: "ironman",
  HARDCORE_IRONMAN: "hcim",
  ULTIMATE_IRONMAN: "uim",
  GROUP_IRONMAN: "outline",
  HARDCORE_GROUP_IRONMAN: "hcim",
};

interface PlayerHeaderProps {
  player: Player;
  onSync?: () => void;
  syncing?: boolean;
  isClaimed?: boolean;
}

export function PlayerHeader({
  player,
  onSync,
  syncing,
  isClaimed,
}: PlayerHeaderProps) {
  const AccountIcon = ACCOUNT_TYPE_ICONS[player.accountType] ?? (() => null);
  const logPercent = calcPercent(
    player.collectionLogObtained,
    player.collectionLogTotal
  );
  const accountBadgeVariant = ACCOUNT_TYPE_BADGE[player.accountType];

  return (
    <div className="border-b border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0 w-16 h-16 rounded-md border border-border/60 bg-muted/30 flex items-center justify-center">
            <Sword className="h-7 w-7 text-muted-foreground/50" />
          </div>

          {/* Player info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <AccountIcon className="h-5 w-5" />
              <h1 className="text-xl font-bold text-foreground">
                {player.displayName ?? player.username}
              </h1>
              {player.accountType !== "NORMAL" && accountBadgeVariant && (
                <Badge variant={accountBadgeVariant} className="text-xs">
                  {player.accountType.replace(/_/g, " ")}
                </Badge>
              )}
              {isClaimed && (
                <Badge variant="gold" className="text-xs gap-1">
                  <Star className="h-2.5 w-2.5 fill-current" />
                  Claimed
                </Badge>
              )}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
              {player.combatLevel && (
                <span>
                  <span className="text-foreground font-medium">{player.combatLevel}</span>{" "}
                  Combat
                </span>
              )}
              {player.totalLevel && (
                <span>
                  <span className="text-foreground font-medium">
                    {formatNumber(player.totalLevel)}
                  </span>{" "}
                  Total
                </span>
              )}
              <span>
                <span className="text-primary font-semibold">
                  {player.collectionLogObtained}
                </span>
                <span className="text-muted-foreground">/{player.collectionLogTotal}</span>{" "}
                log slots
              </span>
            </div>

            {/* Collection log progress bar */}
            <div className="mt-3 max-w-md space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Collection Log</span>
                <span className="text-primary font-semibold">{logPercent.toFixed(1)}%</span>
              </div>
              <Progress value={logPercent} className="h-2" />
            </div>

            {/* Sync status */}
            <div className="flex items-center gap-3 mt-3 flex-wrap">
              <SyncStatusBadge
                status={player.lastSyncStatus}
                lastSyncedAt={player.lastSyncedAt}
              />
              {onSync && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={onSync}
                  disabled={syncing}
                  className="h-7 gap-1.5 text-xs"
                >
                  <RefreshCw
                    className={cn("h-3 w-3", syncing && "animate-spin")}
                  />
                  {syncing ? "Syncing…" : "Sync now"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
