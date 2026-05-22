"use client";

import Link from "next/link";
import Image from "next/image";
import { cn, formatPercent } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import type { CollectionCategoryWithProgress } from "@/types";

interface CollectionCategoryCardProps {
  category: CollectionCategoryWithProgress;
  href: string;
  className?: string;
  compact?: boolean;
}

export function CollectionCategoryCard({
  category,
  href,
  className,
  compact = false,
}: CollectionCategoryCardProps) {
  const percent = category.completionPercent;
  const isComplete = category.obtainedCount === category.totalCount;
  // Use RuneLite CDN for category icon sprites — reliable, by item ID
  const iconUrl = category.iconItemId
    ? `https://static.runelite.net/cache/item/icon/${category.iconItemId}.png`
    : null;

  if (compact) {
    return (
      <Link href={href} className={cn("block group", className)}>
        <div className="flex items-center gap-3 rounded-md border border-border/60 bg-card p-2.5 transition-all duration-150 hover:border-primary/30 hover:bg-secondary/50">
          {iconUrl && (
            <Image
              src={iconUrl}
              alt={category.name}
              width={28}
              height={28}
              className="object-contain opacity-80 group-hover:opacity-100"

            />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                {category.name}
              </span>
              <span className="text-[10px] text-muted-foreground tabular-nums flex-shrink-0">
                {category.obtainedCount}/{category.totalCount}
              </span>
            </div>
            <Progress value={percent} className="h-1 mt-1.5" />
          </div>
          {isComplete && (
            <Badge variant="success" className="text-[10px] py-0 px-1.5 flex-shrink-0">
              ✓
            </Badge>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className={cn("block group", className)}>
      <div className="category-card">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {iconUrl && (
              <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-border/40 bg-muted/30 flex items-center justify-center">
                <Image
                  src={iconUrl}
                  alt={category.name}
                  width={32}
                  height={32}
                  className="object-contain p-0.5"
    
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.obtainedCount} / {category.totalCount} items
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {isComplete ? (
              <Badge variant="success">Complete</Badge>
            ) : (
              <span className="text-sm font-semibold text-primary tabular-nums">
                {percent.toFixed(0)}%
              </span>
            )}
            <ChevronRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
          </div>
        </div>

        <div className="mt-3 space-y-1">
          <Progress value={percent} className="h-1.5" />
          <p className="text-[10px] text-muted-foreground">
            {formatPercent(category.obtainedCount, category.totalCount)} complete
            {!isComplete && ` · ${category.totalCount - category.obtainedCount} missing`}
          </p>
        </div>
      </div>
    </Link>
  );
}
