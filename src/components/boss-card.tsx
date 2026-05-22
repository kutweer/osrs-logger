"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sword } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface BossCardProps {
  slug: string;
  name: string;
  wikiImageUrl: string | null;   // may 404 if wiki slug is wrong
  fallbackSpriteUrl: string | null; // RuneLite by iconItemId — always works
  obtained: number;
  total: number;
  pct: number;
  complete: boolean;
}

export function BossCard({
  slug,
  name,
  wikiImageUrl,
  fallbackSpriteUrl,
  obtained,
  total,
  pct,
  complete,
}: BossCardProps) {
  const [wikiError, setWikiError] = useState(false);

  const showWiki    = !!wikiImageUrl && !wikiError;
  const showSprite  = !showWiki && !!fallbackSpriteUrl;

  return (
    <Link
      href={`/bosses/${slug}`}
      className="group rounded-lg border border-border/60 bg-card overflow-hidden hover:border-primary/40 transition-all duration-150"
    >
      {/* Image area */}
      <div className="relative h-28 bg-gradient-to-b from-muted/30 to-muted/10 flex items-center justify-center border-b border-border/40">
        {showWiki && (
          <Image
            src={wikiImageUrl!}
            alt={name}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 640px) 50vw, 25vw"
            onError={() => setWikiError(true)}
          />
        )}
        {showSprite && (
          <Image
            src={fallbackSpriteUrl!}
            alt={name}
            width={48}
            height={48}
            className="object-contain group-hover:scale-105 transition-transform duration-200"
          />
        )}
        {!showWiki && !showSprite && (
          <Sword className="h-8 w-8 text-muted-foreground/30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
        {complete && (
          <Badge variant="success" className="absolute top-2 right-2 text-[10px]">
            ✓ Done
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate mb-0.5">
          {name}
        </h3>
        <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
          <span>{obtained}/{total} items</span>
          <span className={cn("font-semibold tabular-nums", complete ? "text-green-700" : "text-primary")}>
            {pct.toFixed(0)}%
          </span>
        </div>
        <Progress value={pct} className="h-1" />
      </div>
    </Link>
  );
}
