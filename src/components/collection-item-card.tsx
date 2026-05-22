"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { cn, getWikiUrl, formatNumber } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import type { CollectionItemWithStatus } from "@/types";

// Fallback SVG for failed item images — light-mode friendly
const fallbackSvg = (id: number) =>
  `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23E8EDE0" rx="4"/><text x="50%25" y="55%25" text-anchor="middle" dy=".1em" font-size="9" fill="%235F6F60">%23${id}</text></svg>`;

interface CollectionItemCardProps {
  item: CollectionItemWithStatus;
  compact?: boolean;
  showGoalMarker?: boolean;
  onGoalToggle?: (itemId: number) => void;
  isGoal?: boolean;
}

export function CollectionItemCard({
  item,
  compact = false,
  showGoalMarker = false,
  onGoalToggle,
  isGoal = false,
}: CollectionItemCardProps) {
  const iconUrl = `https://oldschool.runescape.wiki/images/${encodeURIComponent(item.name.replace(/ /g, "_"))}_detail.png`;

  if (compact) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "relative flex items-center justify-center rounded-md border w-10 h-10 cursor-default transition-all duration-150",
                item.obtained
                  ? "border-green-400/60 bg-green-50 hover:border-green-500/80"
                  : "border-border/60 bg-muted/30 opacity-40 grayscale"
              )}
            >
              <Image
                src={iconUrl}
                alt={item.name}
                width={32}
                height={32}
                className="object-contain p-0.5"
                unoptimized
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = fallbackSvg(item.itemId);
                }}
              />
              {item.obtained && item.quantity > 1 && (
                <span className="absolute -bottom-1 -right-1 text-[8px] font-bold text-primary bg-white rounded-sm px-0.5 leading-tight border border-border/60">
                  {formatNumber(item.quantity)}
                </span>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <div className="space-y-1">
              <p className="font-semibold text-foreground">{item.name}</p>
              {item.dropRarity && (
                <p className="text-muted-foreground text-xs">Drop: {item.dropRarity}</p>
              )}
              {item.dropSource && (
                <p className="text-muted-foreground text-xs">Source: {item.dropSource}</p>
              )}
              <p className={cn("text-xs font-medium", item.obtained ? "text-green-700" : "text-muted-foreground")}>
                {item.obtained ? `Obtained${item.quantity > 1 ? ` × ${formatNumber(item.quantity)}` : ""}` : "Not obtained"}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div
      className={cn(
        "group relative rounded-lg border p-3 transition-all duration-150",
        item.obtained
          ? "border-green-300/70 bg-green-50/80 hover:border-green-400/80 hover:shadow-sm"
          : "border-border/60 bg-card/60 opacity-55"
      )}
    >
      {showGoalMarker && onGoalToggle && (
        <button
          onClick={() => onGoalToggle(item.itemId)}
          className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          title={isGoal ? "Remove goal" : "Add as goal"}
        >
          <Star
            className={cn(
              "h-3.5 w-3.5",
              isGoal ? "fill-accent text-accent" : "text-muted-foreground"
            )}
          />
        </button>
      )}

      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0 w-12 h-12 rounded-md border border-border/60 bg-secondary/40 flex items-center justify-center">
          <Image
            src={iconUrl}
            alt={item.name}
            width={40}
            height={40}
            className={cn("object-contain p-1", !item.obtained && "grayscale")}
            unoptimized
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = fallbackSvg(item.itemId);
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <p className="text-sm font-medium text-foreground leading-tight truncate">
              {item.name}
            </p>
            <Link
              href={getWikiUrl(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
              title="OSRS Wiki"
            >
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-1 mt-1">
            <Badge
              variant={item.obtained ? "success" : "muted"}
              className="text-[10px] py-0"
            >
              {item.obtained
                ? item.quantity > 1
                  ? `× ${formatNumber(item.quantity)}`
                  : "Obtained"
                : "Missing"}
            </Badge>
            {item.dropRarity && (
              <span className="text-[10px] text-muted-foreground">{item.dropRarity}</span>
            )}
          </div>

          {item.dropSource && (
            <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
              {item.dropSource}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
