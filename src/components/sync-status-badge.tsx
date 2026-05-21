import { cn, timeAgo } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Clock, Loader2, WifiOff } from "lucide-react";
import type { SyncStatus } from "@/types";

interface SyncStatusBadgeProps {
  status: SyncStatus;
  lastSyncedAt?: Date | string | null;
  className?: string;
  showTime?: boolean;
}

const STATUS_CONFIG: Record<
  SyncStatus,
  { label: string; icon: React.ComponentType<{ className?: string }>; variant: "success" | "warning" | "destructive" | "muted" | "outline" }
> = {
  SUCCESS: { label: "Synced", icon: CheckCircle2, variant: "success" },
  PENDING: { label: "Pending", icon: Clock, variant: "muted" },
  RUNNING: { label: "Syncing…", icon: Loader2, variant: "warning" },
  FAILED: { label: "Failed", icon: AlertCircle, variant: "destructive" },
  RATE_LIMITED: { label: "Rate limited", icon: WifiOff, variant: "warning" },
};

export function SyncStatusBadge({
  status,
  lastSyncedAt,
  className,
  showTime = true,
}: SyncStatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <Badge
        variant={config.variant as "success" | "warning" | "muted" | "outline"}
        className="gap-1"
      >
        <Icon
          className={cn(
            "h-3 w-3",
            status === "RUNNING" && "animate-spin"
          )}
        />
        {config.label}
      </Badge>
      {showTime && lastSyncedAt && status === "SUCCESS" && (
        <span className="text-[10px] text-muted-foreground">
          {timeAgo(lastSyncedAt)}
        </span>
      )}
    </div>
  );
}
