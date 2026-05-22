import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BossHeroImage } from "@/components/boss-hero-image";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { OSRS_CATEGORIES } from "@/data/osrs-categories";
import { DEMO_CATEGORIES } from "@/data/demo-player";
import { calcPercent, formatNumber } from "@/lib/utils";
import { CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ItemGrid } from "@/components/item-grid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return OSRS_CATEGORIES.filter((c) => c.parent === "bosses").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const boss = OSRS_CATEGORIES.find((c) => c.slug === slug && c.parent === "bosses");
  if (!boss) return { title: "Boss Not Found" };
  return {
    title: `${boss.name} — ClogLog`,
    description: boss.description ?? `View ${boss.name} collection log drops and completion stats.`,
  };
}

export default async function BossPage({ params }: Props) {
  const { slug } = await params;
  const boss = OSRS_CATEGORIES.find((c) => c.slug === slug && c.parent === "bosses");
  if (!boss) return notFound();

  const allBosses = OSRS_CATEGORIES.filter((c) => c.parent === "bosses").sort((a, b) => a.sortOrder - b.sortOrder);
  const bossIdx = allBosses.findIndex((b) => b.slug === slug);
  const prevBoss = bossIdx > 0 ? allBosses[bossIdx - 1] : null;
  const nextBoss = bossIdx < allBosses.length - 1 ? allBosses[bossIdx + 1] : null;

  const demoCat = DEMO_CATEGORIES.find((c) => c.slug === slug);
  const obtained = demoCat?.obtainedCount ?? 0;
  const total = demoCat?.totalCount ?? 0;
  const pct = calcPercent(obtained, total);
  const isComplete = obtained === total && total > 0;

  const demoItems = (demoCat?.items ?? []).sort((a, b) => a.sortOrder - b.sortOrder);

  const bossImageUrl = boss.wikiImageSlug
    ? `https://oldschool.runescape.wiki/images/${boss.wikiImageSlug}.png`
    : null;
  const wikiUrl = `https://oldschool.runescape.wiki/w/${boss.wikiImageSlug ?? boss.name.replace(/ /g, "_")}`;

  return (
    <AppShell showSearch>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5">
        <Breadcrumbs
          items={[
            { label: "Bosses", href: "/bosses" },
            { label: boss.name },
          ]}
          className="mb-5"
        />

        {/* Hero card */}
        <div className="rounded-xl border border-border bg-card overflow-hidden mb-6">
          {bossImageUrl && (
            <BossHeroImage src={bossImageUrl} alt={boss.name} />
          )}

          <div className="p-5">
            <h1 className="text-2xl font-bold text-foreground mb-2">{boss.name}</h1>

            {boss.description && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                {boss.description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Collection Log Progress</span>
                  <span className={isComplete ? "text-green-700 font-semibold" : "text-primary font-semibold"}>
                    {pct.toFixed(1)}%
                  </span>
                </div>
                <Progress value={pct} className="h-2.5" />
                <p className="text-xs text-muted-foreground">
                  {formatNumber(obtained)} obtained · {formatNumber(total - obtained)} missing
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {isComplete && (
                  <Badge variant="success" className="gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Complete
                  </Badge>
                )}
                <Link
                  href={wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  OSRS Wiki
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Drop table */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-foreground mb-3">
            Collection Log Drops
            <span className="ml-2 text-muted-foreground font-normal text-xs">({demoItems.length} unique slots)</span>
          </h2>
          <ItemGrid items={demoItems} viewMode="grid" />
        </div>

        {/* Prev / Next navigation */}
        {(prevBoss || nextBoss) && (
          <div className="flex justify-between gap-3 pt-4 border-t border-border/60">
            {prevBoss ? (
              <Link
                href={`/bosses/${prevBoss.slug}`}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                {prevBoss.name}
              </Link>
            ) : <span />}
            {nextBoss ? (
              <Link
                href={`/bosses/${nextBoss.slug}`}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {nextBoss.name}
                <ChevronRight className="h-4 w-4" />
              </Link>
            ) : <span />}
          </div>
        )}
      </div>
    </AppShell>
  );
}
