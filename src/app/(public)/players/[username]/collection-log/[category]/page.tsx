"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import { AppShell } from "@/components/app-shell";
import { ItemGrid } from "@/components/item-grid";
import { FilterBar } from "@/components/filter-bar";
import { SortSelect } from "@/components/sort-select";
import { ViewToggle } from "@/components/view-toggle";
import { Progress } from "@/components/ui/progress";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/empty-state";
import { calcPercent, formatNumber } from "@/lib/utils";
import { DEMO_PLAYER, DEMO_CATEGORIES } from "@/data/demo-player";
import { OSRS_CATEGORIES } from "@/data/osrs-categories";
import type { CollectionItemWithStatus, SortOption, ViewMode } from "@/types";
import { CheckCircle2, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { useLocalStorage } from "@/hooks/use-local-storage";

const SORT_OPTIONS: SortOption[] = [
  { label: "Sort order", value: "sortOrder", direction: "asc" },
  { label: "Name A–Z", value: "name-asc", direction: "asc" },
  { label: "Name Z–A", value: "name-desc", direction: "desc" },
  { label: "Obtained first", value: "obtained-first", direction: "desc" },
  { label: "Missing first", value: "missing-first", direction: "asc" },
  { label: "Rarity (rarest)", value: "rarity", direction: "asc" },
];

interface Props {
  params: Promise<{ username: string; category: string }>;
}

function sortItems(items: CollectionItemWithStatus[], sortBy: string): CollectionItemWithStatus[] {
  return [...items].sort((a, b) => {
    switch (sortBy) {
      case "name-asc": return a.name.localeCompare(b.name);
      case "name-desc": return b.name.localeCompare(a.name);
      case "obtained-first": return (b.obtained ? 1 : 0) - (a.obtained ? 1 : 0);
      case "missing-first": return (a.obtained ? 1 : 0) - (b.obtained ? 1 : 0);
      case "rarity":
        return (a.dropRarityNum ?? 1) - (b.dropRarityNum ?? 1);
      default: return a.sortOrder - b.sortOrder;
    }
  });
}

export default function CategoryDetailPage({ params }: Props) {
  const { username, category: slug } = use(params);

  const isDemo = username.toLowerCase() === "omhoog" || username.toLowerCase() === "demo";
  const cat = DEMO_CATEGORIES.find((c) => c.slug === slug);
  if (!isDemo || !cat) return notFound();

  const player = DEMO_PLAYER;
  const osrsCat = OSRS_CATEGORIES.find((c) => c.slug === slug);
  const parentSlug = osrsCat?.parent ?? "bosses";

  // Siblings for prev/next navigation
  const siblings = DEMO_CATEGORIES
    .filter((c) => {
      const o = OSRS_CATEGORIES.find((x) => x.slug === c.slug);
      return o?.parent === parentSlug;
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const sibIdx = siblings.findIndex((c) => c.slug === slug);
  const prevCat = sibIdx > 0 ? siblings[sibIdx - 1] : null;
  const nextCat = sibIdx < siblings.length - 1 ? siblings[sibIdx + 1] : null;

  const wikiImageSlug = osrsCat?.wikiImageSlug;
  const bossImageUrl = wikiImageSlug
    ? `https://oldschool.runescape.wiki/images/${wikiImageSlug}.png`
    : null;

  const [search, setSearch] = useState("");
  const [showMissing, setShowMissing] = useState(false);
  const [showObtained, setShowObtained] = useState(false);
  const [sortBy, setSortBy] = useState("sortOrder");
  const [viewMode, setViewMode] = useLocalStorage<ViewMode>("clog-view", "grid");
  const [bossImgError, setBossImgError] = useState(false);

  const debouncedSearch = useDebounce(search, 200);

  let items = cat.items as CollectionItemWithStatus[];
  if (debouncedSearch) {
    items = items.filter((i) =>
      i.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }
  if (showMissing && !showObtained) items = items.filter((i) => !i.obtained);
  if (showObtained && !showMissing) items = items.filter((i) => i.obtained);
  items = sortItems(items, sortBy);

  const percent = calcPercent(cat.obtainedCount, cat.totalCount);
  const isComplete = cat.obtainedCount === cat.totalCount;

  return (
    <AppShell showSearch>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <Breadcrumbs
          items={[
            { label: "Players", href: "/" },
            { label: player.username, href: `/players/${player.username}` },
            { label: "Collection Log", href: `/players/${player.username}/collection-log` },
            { label: cat.name },
          ]}
          className="mb-5"
        />

        {/* Category header */}
        <div className="rounded-lg border border-border bg-card overflow-hidden mb-5">
          {bossImageUrl && !bossImgError && (
            <div className="relative h-36 sm:h-48 bg-gradient-to-b from-muted/40 to-card border-b border-border/40 flex items-center justify-center">
              <Image
                src={bossImageUrl}
                alt={cat.name}
                fill
                className="object-contain p-4"
                unoptimized
                onError={() => setBossImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>
          )}

          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-xl font-bold text-foreground">{cat.name}</h1>
                  {isComplete && (
                    <Badge variant="success" className="gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Complete
                    </Badge>
                  )}
                </div>
                {osrsCat?.description && (
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed max-w-2xl">
                    {osrsCat.description}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  {formatNumber(cat.obtainedCount)} / {formatNumber(cat.totalCount)} items obtained
                </p>
                <div className="mt-3 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Category progress</span>
                    <span className="text-primary font-semibold">{percent.toFixed(1)}%</span>
                  </div>
                  <Progress value={percent} className="h-2" />
                </div>
              </div>

              <div className="flex gap-5 sm:border-l sm:border-border sm:pl-5">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-700 tabular-nums">{cat.obtainedCount}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Obtained</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground tabular-nums">
                    {cat.totalCount - cat.obtainedCount}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Missing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next navigation */}
        {(prevCat || nextCat) && (
          <div className="flex justify-between gap-3 mb-5">
            {prevCat ? (
              <Link
                href={`/players/${player.username}/collection-log/${prevCat.slug}`}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                {prevCat.name}
              </Link>
            ) : <span />}
            {nextCat ? (
              <Link
                href={`/players/${player.username}/collection-log/${nextCat.slug}`}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {nextCat.name}
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ) : <span />}
          </div>
        )}

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <FilterBar
            search={search}
            onSearchChange={setSearch}
            placeholder={`Search ${cat.name}…`}
            className="flex-1 min-w-0"
            filters={[
              {
                key: "missing",
                label: "Missing only",
                active: showMissing,
                onClick: () => { setShowMissing(!showMissing); setShowObtained(false); },
              },
              {
                key: "obtained",
                label: "Obtained only",
                active: showObtained,
                onClick: () => { setShowObtained(!showObtained); setShowMissing(false); },
              },
            ]}
          />
          <SortSelect
            options={SORT_OPTIONS}
            value={sortBy}
            onChange={setSortBy}
          />
          <ViewToggle value={viewMode} onChange={setViewMode} />
        </div>

        {/* Items */}
        {items.length > 0 ? (
          <ItemGrid items={items} viewMode={viewMode} />
        ) : (
          <EmptyState
            icon={BookOpen}
            title="No items match your filter"
            description="Try adjusting your search or filter."
            action={{ label: "Clear filters", onClick: () => { setSearch(""); setShowMissing(false); setShowObtained(false); } }}
          />
        )}

        <p className="text-xs text-muted-foreground mt-4 text-right">
          Showing {items.length} of {cat.totalCount} items
        </p>
      </div>
    </AppShell>
  );
}
