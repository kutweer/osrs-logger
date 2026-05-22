import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { HiscoresSearch } from "@/components/hiscores-search";
import { fetchHiscores } from "@/lib/hiscores";
import { formatNumber } from "@/lib/utils";
import { BarChart2, Swords, ScrollText, AlertCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Hiscores — ClogLog",
  description: "Look up OSRS hiscores for any player — skills, boss KCs, and clue scrolls.",
};

interface Props {
  searchParams: Promise<{ player?: string; mode?: string }>;
}

const MODE_LABELS: Record<string, string> = {
  normal:   "Normal",
  ironman:  "Ironman",
  hardcore: "Hardcore IM",
  ultimate: "Ultimate IM",
  seasonal: "Seasonal",
};

// OSRS Wiki skill icon URLs — proxy through Next.js image optimization
const SKILL_ICON: Record<string, string> = {
  "Overall":      "https://oldschool.runescape.wiki/images/Stats_icon.png",
  "Attack":       "https://oldschool.runescape.wiki/images/Attack_icon.png",
  "Defence":      "https://oldschool.runescape.wiki/images/Defence_icon.png",
  "Strength":     "https://oldschool.runescape.wiki/images/Strength_icon.png",
  "Hitpoints":    "https://oldschool.runescape.wiki/images/Hitpoints_icon.png",
  "Ranged":       "https://oldschool.runescape.wiki/images/Ranged_icon.png",
  "Prayer":       "https://oldschool.runescape.wiki/images/Prayer_icon.png",
  "Magic":        "https://oldschool.runescape.wiki/images/Magic_icon.png",
  "Cooking":      "https://oldschool.runescape.wiki/images/Cooking_icon.png",
  "Woodcutting":  "https://oldschool.runescape.wiki/images/Woodcutting_icon.png",
  "Fletching":    "https://oldschool.runescape.wiki/images/Fletching_icon.png",
  "Fishing":      "https://oldschool.runescape.wiki/images/Fishing_icon.png",
  "Firemaking":   "https://oldschool.runescape.wiki/images/Firemaking_icon.png",
  "Crafting":     "https://oldschool.runescape.wiki/images/Crafting_icon.png",
  "Smithing":     "https://oldschool.runescape.wiki/images/Smithing_icon.png",
  "Mining":       "https://oldschool.runescape.wiki/images/Mining_icon.png",
  "Herblore":     "https://oldschool.runescape.wiki/images/Herblore_icon.png",
  "Agility":      "https://oldschool.runescape.wiki/images/Agility_icon.png",
  "Thieving":     "https://oldschool.runescape.wiki/images/Thieving_icon.png",
  "Slayer":       "https://oldschool.runescape.wiki/images/Slayer_icon.png",
  "Farming":      "https://oldschool.runescape.wiki/images/Farming_icon.png",
  "Runecraft":    "https://oldschool.runescape.wiki/images/Runecraft_icon.png",
  "Hunter":       "https://oldschool.runescape.wiki/images/Hunter_icon.png",
  "Construction": "https://oldschool.runescape.wiki/images/Construction_icon.png",
};

function formatXp(xp: number): string {
  if (xp < 0) return "—";
  if (xp >= 1_000_000) return `${(xp / 1_000_000).toFixed(2)}M`;
  if (xp >= 1_000)     return `${(xp / 1_000).toFixed(1)}k`;
  return xp.toLocaleString();
}

function formatRank(rank: number): string {
  if (rank < 0) return "Unranked";
  return `#${formatNumber(rank)}`;
}

export default async function HiscoresPage({ searchParams }: Props) {
  const { player, mode } = await searchParams;
  const username = player?.trim() || "Omhoog";
  const gameMode = mode ?? "normal";

  const data = await fetchHiscores(username, gameMode);

  return (
    <AppShell showSearch>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Hiscores" }]}
          className="mb-5"
        />

        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
            <BarChart2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">OSRS Hiscores</h1>
            <p className="text-sm text-muted-foreground">Live data from the official OSRS Hiscores</p>
          </div>
        </div>

        {/* Search */}
        <HiscoresSearch defaultPlayer={username} defaultMode={gameMode} />

        {/* Mode tabs */}
        <div className="flex gap-1 flex-wrap mb-6">
          {Object.entries(MODE_LABELS).map(([m, label]) => (
            <Link
              key={m}
              href={`/hiscores?player=${encodeURIComponent(username)}&mode=${m}`}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                gameMode === m
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {!data ? (
          <div className="rounded-lg border border-border bg-card p-10 text-center">
            <AlertCircle className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-foreground font-semibold mb-1">Player not found</p>
            <p className="text-sm text-muted-foreground">
              &quot;{username}&quot; doesn&apos;t appear on the {MODE_LABELS[gameMode] ?? gameMode} hiscores.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Player header */}
            <div className="rounded-lg border border-border bg-card p-4 flex flex-wrap items-center gap-4">
              <div>
                <h2 className="text-lg font-bold text-foreground">{username}</h2>
                <p className="text-xs text-muted-foreground">
                  {MODE_LABELS[gameMode] ?? gameMode} hiscores
                </p>
              </div>
              <div className="flex gap-6 ml-auto text-center">
                <div>
                  <div className="text-xl font-bold text-primary tabular-nums">
                    {data.skills[0]?.level >= 0 ? data.skills[0].level.toLocaleString() : "—"}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Total Level</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary tabular-nums">
                    {data.skills[0]?.xp >= 0 ? formatXp(data.skills[0].xp) : "—"}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Total XP</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary tabular-nums">
                    {formatRank(data.skills[0]?.rank ?? -1)}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Overall Rank</div>
                </div>
              </div>
            </div>

            {/* ── Skills ──────────────────────────────────────────────── */}
            <div>
              <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                <TrendingUp className="h-4 w-4 text-primary" />
                Skills
              </h2>
              <div className="rounded-lg border border-border bg-card overflow-hidden">
                {/* Overall row — full width */}
                {data.skills[0] && (
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-secondary/30">
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={SKILL_ICON["Overall"]}
                        alt="Overall"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Overall</span>
                    <div className="ml-auto flex items-center gap-6 text-sm">
                      <span className="text-muted-foreground text-xs">{formatRank(data.skills[0].rank)}</span>
                      <span className="font-bold text-primary tabular-nums text-lg">
                        {data.skills[0].level >= 0 ? data.skills[0].level.toLocaleString() : "—"}
                      </span>
                      <span className="text-muted-foreground text-xs tabular-nums w-20 text-right">
                        {formatXp(data.skills[0].xp)} XP
                      </span>
                    </div>
                  </div>
                )}

                {/* Remaining skills in a grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  {data.skills.slice(1).map((skill) => {
                    const iconUrl = SKILL_ICON[skill.name];
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 px-3 py-2.5 border-b border-r border-border/40 hover:bg-muted/10 transition-colors"
                      >
                        {/* OSRS skill icon */}
                        <div className="w-[18px] h-[18px] flex-shrink-0 relative">
                          {iconUrl ? (
                            <Image
                              src={iconUrl}
                              alt={skill.name}
                              width={18}
                              height={18}
                              className="object-contain"
                            />
                          ) : (
                            <div className="w-[18px] h-[18px] bg-muted rounded-sm" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[11px] text-muted-foreground truncate">{skill.name}</span>
                            <span className={`text-sm font-bold tabular-nums ${
                              skill.level >= 99 ? "text-primary" : "text-foreground"
                            }`}>
                              {skill.level >= 0 ? skill.level : "—"}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-0.5">
                            <span>{formatRank(skill.rank)}</span>
                            <span>{formatXp(skill.xp)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Clue Scrolls ────────────────────────────────────────── */}
            {data.clues.length > 0 && (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <ScrollText className="h-4 w-4 text-primary" />
                  Clue Scrolls
                </h2>
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30 text-xs text-muted-foreground">
                        <th className="px-4 py-2.5 text-left font-semibold">Type</th>
                        <th className="px-4 py-2.5 text-right font-semibold">Completions</th>
                        <th className="px-4 py-2.5 text-right font-semibold hidden sm:table-cell">Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.clues.map((c) => (
                        <tr key={c.name} className="border-b border-border/40 hover:bg-muted/10">
                          <td className="px-4 py-2.5 text-foreground">{c.name}</td>
                          <td className="px-4 py-2.5 text-right font-semibold tabular-nums">
                            {c.score >= 0 ? c.score.toLocaleString() : "—"}
                          </td>
                          <td className="px-4 py-2.5 text-right text-muted-foreground text-xs hidden sm:table-cell">
                            {formatRank(c.rank)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── Boss Kill Counts ─────────────────────────────────────── */}
            {data.bosses.length > 0 ? (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Swords className="h-4 w-4 text-primary" />
                  Boss Kill Counts
                  <Badge variant="secondary" className="text-[10px]">{data.bosses.length} tracked</Badge>
                </h2>
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30 text-xs text-muted-foreground">
                        <th className="px-4 py-2.5 text-left font-semibold">Boss</th>
                        <th className="px-4 py-2.5 text-right font-semibold">Kill Count</th>
                        <th className="px-4 py-2.5 text-right font-semibold hidden sm:table-cell">Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.bosses
                        .sort((a, b) => b.score - a.score)
                        .map((boss) => (
                          <tr key={boss.name} className="border-b border-border/40 hover:bg-muted/10">
                            <td className="px-4 py-2.5 text-foreground">{boss.name}</td>
                            <td className="px-4 py-2.5 text-right font-bold tabular-nums text-primary">
                              {boss.score.toLocaleString()}
                            </td>
                            <td className="px-4 py-2.5 text-right text-muted-foreground text-xs hidden sm:table-cell">
                              {formatRank(boss.rank)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">
                No boss kill counts on the hiscores for this player.
              </p>
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
