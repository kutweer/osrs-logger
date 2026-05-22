"use client";

import { cn } from "@/lib/utils";
import { CollectionItemCard } from "@/components/collection-item-card";
import type { CollectionItemWithStatus, ViewMode } from "@/types";

interface ItemGridProps {
  items: CollectionItemWithStatus[];
  viewMode?: ViewMode;
  showGoalMarkers?: boolean;
  goalItemIds?: Set<number>;
  onGoalToggle?: (itemId: number) => void;
  className?: string;
}

export function ItemGrid({
  items,
  viewMode = "grid",
  showGoalMarkers = false,
  goalItemIds,
  onGoalToggle,
  className,
}: ItemGridProps) {
  if (viewMode === "compact") {
    return (
      <div className={cn("flex flex-wrap gap-1", className)}>
        {items.map((item) => (
          <CollectionItemCard
            key={item.id}
            item={item}
            compact
            showGoalMarker={showGoalMarkers}
            isGoal={goalItemIds?.has(item.itemId)}
            onGoalToggle={onGoalToggle}
          />
        ))}
      </div>
    );
  }

  if (viewMode === "table") {
    return (
      <div className={cn("overflow-x-auto", className)}>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted-foreground">
              <th className="pb-2 text-left font-medium pl-2">Item</th>
              <th className="pb-2 text-left font-medium">Source</th>
              <th className="pb-2 text-left font-medium">Rarity</th>
              <th className="pb-2 text-right font-medium pr-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-b border-border/40 hover:bg-muted/20 transition-colors"
              >
                <td className="py-2 pl-2">
                  <span className={cn("font-medium", !item.obtained && "text-muted-foreground")}>
                    {item.name}
                  </span>
                  <span className="ml-2 text-[10px] text-muted-foreground">#{item.itemId}</span>
                </td>
                <td className="py-2 text-xs text-muted-foreground">
                  {item.dropSource ?? "—"}
                </td>
                <td className="py-2 text-xs text-muted-foreground">
                  {item.dropRarity ?? "—"}
                </td>
                <td className="py-2 pr-2 text-right">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      item.obtained ? "text-green-700" : "text-muted-foreground"
                    )}
                  >
                    {item.obtained ? "Obtained" : "Missing"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Default: grid view
  return (
    <div
      className={cn(
        "grid gap-2",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <CollectionItemCard
          key={item.id}
          item={item}
          showGoalMarker={showGoalMarkers}
          isGoal={goalItemIds?.has(item.itemId)}
          onGoalToggle={onGoalToggle}
        />
      ))}
    </div>
  );
}
