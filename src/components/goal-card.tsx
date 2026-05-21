"use client";

import { cn, calcPercent, formatDate, formatNumber } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pin, PinOff, CheckCircle2, Pause, MoreHorizontal, Target, Sword, Scroll, TrendingUp } from "lucide-react";
import type { Goal, GoalType, GoalStatus, GoalPriority } from "@/types";

const GOAL_TYPE_ICONS: Record<GoalType, React.ComponentType<{ className?: string }>> = {
  OBTAIN_ITEM: Target,
  COMPLETE_CATEGORY: CheckCircle2,
  COLLECTION_LOG_PERCENT: TrendingUp,
  BOSS_KC: Sword,
  CLUE_COUNT: Scroll,
  SKILL_LEVEL: TrendingUp,
  SKILL_XP: TrendingUp,
  CUSTOM: Target,
};

const GOAL_TYPE_LABELS: Record<GoalType, string> = {
  OBTAIN_ITEM: "Item",
  COMPLETE_CATEGORY: "Category",
  COLLECTION_LOG_PERCENT: "Log %",
  BOSS_KC: "Boss KC",
  CLUE_COUNT: "Clues",
  SKILL_LEVEL: "Level",
  SKILL_XP: "XP",
  CUSTOM: "Custom",
};

const STATUS_STYLES: Record<GoalStatus, string> = {
  NOT_STARTED: "muted",
  ACTIVE: "gold",
  COMPLETED: "success",
  PAUSED: "warning",
};

const PRIORITY_STYLES: Record<GoalPriority, string> = {
  LOW: "text-muted-foreground",
  MEDIUM: "text-foreground",
  HIGH: "text-amber-400",
  CRITICAL: "text-red-400",
};

interface GoalCardProps {
  goal: Goal;
  onPin?: (id: string) => void;
  onStatusChange?: (id: string, status: GoalStatus) => void;
  className?: string;
}

export function GoalCard({ goal, onPin, onStatusChange, className }: GoalCardProps) {
  const percent = calcPercent(goal.currentProgress, goal.targetProgress);
  const Icon = GOAL_TYPE_ICONS[goal.type];
  const isComplete = goal.status === "COMPLETED";
  const isPaused = goal.status === "PAUSED";

  return (
    <div
      className={cn(
        "relative rounded-md border bg-card p-4 transition-all duration-150",
        isComplete
          ? "border-green-700/30 bg-green-900/5"
          : isPaused
          ? "border-border/40 opacity-70"
          : goal.pinned
          ? "border-primary/30 bg-gradient-to-br from-card to-secondary/20"
          : "border-border hover:border-primary/20",
        className
      )}
    >
      {goal.pinned && !isComplete && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-t-md" />
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className={cn(
              "flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center mt-0.5",
              isComplete ? "bg-green-900/30" : "bg-muted/50"
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4",
                isComplete ? "text-green-400" : "text-muted-foreground"
              )}
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                className={cn(
                  "text-sm font-semibold leading-tight",
                  PRIORITY_STYLES[goal.priority],
                  isComplete && "line-through text-muted-foreground"
                )}
              >
                {goal.title}
              </h3>
              <Badge
                variant={STATUS_STYLES[goal.status] as "gold" | "success" | "warning" | "muted"}
                className="text-[10px] py-0"
              >
                {goal.status.replace("_", " ")}
              </Badge>
              <Badge variant="muted" className="text-[10px] py-0">
                {GOAL_TYPE_LABELS[goal.type]}
              </Badge>
            </div>
            {goal.notes && (
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {goal.notes}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {onPin && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onPin(goal.id)}
              title={goal.pinned ? "Unpin" : "Pin goal"}
              className="opacity-0 group-hover:opacity-100"
            >
              {goal.pinned ? (
                <PinOff className="h-3.5 w-3.5 text-primary" />
              ) : (
                <Pin className="h-3.5 w-3.5" />
              )}
            </Button>
          )}
          {!isComplete && onStatusChange && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() =>
                onStatusChange(
                  goal.id,
                  isPaused ? "ACTIVE" : "PAUSED"
                )
              }
              title={isPaused ? "Resume" : "Pause"}
            >
              <Pause className="h-3.5 w-3.5" />
            </Button>
          )}
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {!isComplete && (
        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              {formatNumber(goal.currentProgress)} / {formatNumber(goal.targetProgress)}
            </span>
            <span className="text-primary font-semibold tabular-nums">{percent.toFixed(1)}%</span>
          </div>
          <Progress value={percent} className="h-1.5" />
        </div>
      )}

      {isComplete && goal.completedAt && (
        <p className="text-[10px] text-muted-foreground mt-2">
          Completed {formatDate(goal.completedAt)}
        </p>
      )}

      <p className="text-[10px] text-muted-foreground/60 mt-1">
        Started {formatDate(goal.createdAt)}
      </p>
    </div>
  );
}
