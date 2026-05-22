import { cn, formatNumber } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  progress?: number;
  progressLabel?: string;
  trend?: {
    value: number;
    label: string;
    direction: "up" | "down" | "neutral";
  };
  className?: string;
  highlight?: boolean;
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  progress,
  progressLabel,
  trend,
  className,
  highlight,
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-150 hover:border-primary/20",
        highlight && "border-primary/30 bg-gradient-to-br from-card to-secondary/30",
        className
      )}
    >
      {highlight && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      )}
      <CardHeader className="pb-1">
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          {Icon && <Icon className="h-4 w-4 text-muted-foreground/60" />}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground tabular-nums">
              {typeof value === "number" ? formatNumber(value) : value}
            </p>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>
          {trend && (
            <div
              className={cn(
                "text-xs font-medium",
                trend.direction === "up" && "text-green-700",
                trend.direction === "down" && "text-red-400",
                trend.direction === "neutral" && "text-muted-foreground"
              )}
            >
              {trend.direction === "up" && "↑"}
              {trend.direction === "down" && "↓"}
              {formatNumber(trend.value)} {trend.label}
            </div>
          )}
        </div>
        {progress !== undefined && (
          <div className="mt-3 space-y-1">
            <Progress value={progress} className="h-1.5" />
            {progressLabel && (
              <p className="text-[10px] text-muted-foreground">{progressLabel}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
