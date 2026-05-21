"use client";

import { LayoutGrid, List, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ViewMode } from "@/types";

interface ViewToggleProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
  className?: string;
  options?: ViewMode[];
}

const ICONS: Record<ViewMode, React.ComponentType<{ className?: string }>> = {
  grid: LayoutGrid,
  compact: List,
  table: Table,
};

const LABELS: Record<ViewMode, string> = {
  grid: "Grid",
  compact: "Compact",
  table: "Table",
};

export function ViewToggle({
  value,
  onChange,
  className,
  options = ["grid", "compact", "table"],
}: ViewToggleProps) {
  return (
    <div className={cn("flex items-center gap-0.5 rounded-md border border-border p-0.5", className)}>
      {options.map((mode) => {
        const Icon = ICONS[mode];
        return (
          <Button
            key={mode}
            variant="ghost"
            size="icon-sm"
            aria-label={LABELS[mode]}
            title={LABELS[mode]}
            className={cn(
              "h-7 w-7 rounded-sm",
              value === mode && "bg-secondary text-foreground"
            )}
            onClick={() => onChange(mode)}
          >
            <Icon className="h-3.5 w-3.5" />
          </Button>
        );
      })}
    </div>
  );
}
