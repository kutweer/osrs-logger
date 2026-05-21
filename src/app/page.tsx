import Link from "next/link";
import { Layers, Target, BookOpen, Trophy, ArrowRight, Star, Shield, Sword, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlayerSearch } from "@/components/player-search";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TopNav } from "@/components/top-nav";
import { auth } from "@/lib/auth";
import { DEMO_CATEGORIES, DEMO_PLAYER } from "@/data/demo-player";
import { calcPercent, formatNumber } from "@/lib/utils";

export default async function LandingPage() {
  const session = await auth();
  const logPercent = calcPercent(
    DEMO_PLAYER.collectionLogObtained,
    DEMO_PLAYER.collectionLogTotal
  );

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav showSearch={false} user={session?.user} />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-card/40">
        {/* Gold radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(42 71% 47% / 0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center relative">
          {/* Badge */}
          <Badge variant="gold" className="mb-6 gap-1.5 text-xs px-3 py-1">
            <Star className="h-3 w-3 fill-current" />
            OSRS Collection Log Tracker
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">
            <span className="text-foreground">Track every </span>
            <span className="text-gold-gradient">log slot.</span>
            <br />
            <span className="text-foreground">Set every </span>
            <span className="text-gold-gradient">goal.</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            ClogLog is the modern Old School RuneScape collection log tracker.
            Follow your progress, manage goals, and share your journey — no
            plugin required to get started.
          </p>

          {/* Search CTA */}
          <div className="max-w-lg mx-auto space-y-3">
            <PlayerSearch size="lg" placeholder="Enter your OSRS username…" autoFocus />
            <p className="text-xs text-muted-foreground">
              Works with Normal, Ironman, HCIM, and UIM accounts.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Button variant="outline" size="sm" asChild>
              <Link href="/players/Omhoog">
                View demo profile
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/leaderboards">Leaderboards</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Demo Preview ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            See it in action
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Demo player: <Link href="/players/Omhoog" className="text-primary hover:underline">Omhoog</Link> — Ironman
          </p>
        </div>

        {/* Player card preview */}
        <div className="rounded-lg border border-border bg-card overflow-hidden mb-6 shadow-xl">
          {/* Player header */}
          <div className="border-b border-border p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-md border border-border/60 bg-muted/30 flex items-center justify-center">
                <Sword className="h-7 w-7 text-muted-foreground/50" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-zinc-400" />
                  <h3 className="text-lg font-bold text-foreground">Omhoog</h3>
                  <Badge variant="ironman" className="text-xs">Ironman</Badge>
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <span><span className="text-foreground font-medium">126</span> Combat</span>
                  <span><span className="text-foreground font-medium">2,187</span> Total</span>
                </div>
              </div>
            </div>
            <div className="sm:ml-auto text-right">
              <div className="text-xs text-muted-foreground mb-1">Collection Log</div>
              <div className="text-2xl font-bold text-primary tabular-nums">
                {logPercent.toFixed(1)}%
              </div>
              <div className="text-xs text-muted-foreground">
                {formatNumber(DEMO_PLAYER.collectionLogObtained)} / {formatNumber(DEMO_PLAYER.collectionLogTotal)} slots
              </div>
            </div>
          </div>

          {/* Metric strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border/50 border-b border-border">
            {[
              { label: "Obtained", value: formatNumber(DEMO_PLAYER.collectionLogObtained), icon: CheckCircle2, color: "text-green-400" },
              { label: "Missing", value: formatNumber(DEMO_PLAYER.collectionLogTotal - DEMO_PLAYER.collectionLogObtained), icon: Target, color: "text-amber-400" },
              { label: "Combat Lv.", value: "126", icon: Sword, color: "text-primary" },
              { label: "Active Goals", value: "5", icon: TrendingUp, color: "text-blue-400" },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="flex flex-col items-center py-4 px-3">
                  <Icon className={`h-4 w-4 mb-1 ${m.color}`} />
                  <div className="text-xl font-bold text-foreground tabular-nums">{m.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{m.label}</div>
                </div>
              );
            })}
          </div>

          {/* Category list preview */}
          <div className="p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Collection Categories
            </h4>
            <div className="space-y-2">
              {DEMO_CATEGORIES.slice(0, 4).map((cat) => (
                <div key={cat.id} className="flex items-center gap-3">
                  <span className="text-sm text-foreground w-44 truncate">{cat.name}</span>
                  <Progress value={cat.completionPercent} className="flex-1 h-1.5" />
                  <span className="text-xs text-muted-foreground tabular-nums w-16 text-right">
                    {cat.obtainedCount}/{cat.totalCount}
                  </span>
                  <span className="text-xs text-primary font-semibold tabular-nums w-10 text-right">
                    {cat.completionPercent.toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/players/Omhoog/collection-log">
                  View full collection log
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section className="border-t border-border bg-card/20 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center text-foreground mb-10">
            Everything you need to track your log
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: BookOpen,
                title: "Full Collection Log",
                desc: "Every boss, raid, clue, minigame, and miscellaneous category. Track all 1,477+ log slots.",
              },
              {
                icon: Target,
                title: "Goals Tracker",
                desc: "Set goals for items, boss KCs, skills, and collection log milestones. Track progress with detailed cards.",
              },
              {
                icon: Trophy,
                title: "Leaderboards",
                desc: "See how you compare. Global and per-category leaderboards for completionists.",
              },
              {
                icon: Shield,
                title: "Ironman Support",
                desc: "Full support for IM, HCIM, UIM, GIM, and HCGIM account types.",
              },
              {
                icon: TrendingUp,
                title: "Progress Charts",
                desc: "Visualize your collection log journey over time with clean, readable charts.",
              },
              {
                icon: Layers,
                title: "Multi-Account",
                desc: "Claim and manage multiple OSRS accounts under one ClogLog profile.",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-md border border-border bg-card p-5 hover:border-primary/20 transition-colors"
                >
                  <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="border-t border-border py-16 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Start tracking for free
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            No account required to view player profiles. Sign up to save goals
            and claim your accounts.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link href="/login">
                Create free account
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/players/Omhoog">Browse demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="border-t border-border py-6 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary/60" />
            <span className="font-semibold text-foreground/70">ClogLog</span>
            <span>— OSRS Collection Log Tracker</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/docs" className="hover:text-foreground transition-colors">API</Link>
            <Link href="/leaderboards" className="hover:text-foreground transition-colors">Leaderboards</Link>
          </div>
          <p className="text-center sm:text-right">
            Not affiliated with Jagex Ltd. &nbsp;·&nbsp; OSRS is a trademark of Jagex.
          </p>
        </div>
      </footer>
    </div>
  );
}
