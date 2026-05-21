import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, Shield, Code2, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About ClogLog — data sources, project goals, and legal info.",
};

export default function AboutPage() {
  return (
    <AppShell showSearch>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "About" }]}
          className="mb-6"
        />

        <h1 className="text-3xl font-bold text-foreground mb-2">About ClogLog</h1>
        <p className="text-muted-foreground mb-8">
          The modern Old School RuneScape collection log and goals tracker.
        </p>

        <div className="space-y-8 text-sm text-foreground leading-relaxed">
          {/* Project */}
          <section>
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-3">
              <Heart className="h-4 w-4 text-primary" />
              What is ClogLog?
            </h2>
            <p className="text-muted-foreground">
              ClogLog is a free, open-source OSRS collection log tracker built for completionists,
              ironmen, and anyone working toward long-term goals in Old School RuneScape.
              It provides clean, fast, data-dense interfaces for tracking your collection log
              progress, setting personal goals, and sharing your journey.
            </p>
          </section>

          {/* Data sources */}
          <section>
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-3">
              <Database className="h-4 w-4 text-primary" />
              Data sources
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <div className="rounded-md border border-border bg-card/50 p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="gold" className="mt-0.5 flex-shrink-0">Wiki</Badge>
                  <div>
                    <p className="font-medium text-foreground">OSRS Wiki API</p>
                    <p className="text-xs mt-0.5">
                      Item metadata, examine text, and GE data are sourced from the{" "}
                      <Link href="https://oldschool.runescape.wiki/w/Application_programming_interface" target="_blank" className="text-primary hover:underline inline-flex items-center gap-0.5">
                        OSRS Wiki API <ExternalLink className="h-3 w-3" />
                      </Link>
                      . We respect the wiki&apos;s fair-use policy and include a User-Agent on all requests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border border-border bg-card/50 p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 flex-shrink-0">Hiscores</Badge>
                  <div>
                    <p className="font-medium text-foreground">Jagex Hiscores API</p>
                    <p className="text-xs mt-0.5">
                      Player skills and boss KC data are fetched from the official OSRS hiscores
                      endpoint. Collection log slot data requires a future RuneLite plugin or
                      manual upload.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border border-border bg-card/50 p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="muted" className="mt-0.5 flex-shrink-0">Manual</Badge>
                  <div>
                    <p className="font-medium text-foreground">User-provided data</p>
                    <p className="text-xs mt-0.5">
                      Collection log state is entered manually or will be synced via a future
                      RuneLite plugin integration. We do not scrape third-party sites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-primary" />
              Legal & attribution
            </h2>
            <p className="text-muted-foreground text-xs leading-relaxed">
              ClogLog is not affiliated with, endorsed by, or in any way officially connected
              with Jagex Ltd. &ldquo;Old School RuneScape&rdquo; and &ldquo;OSRS&rdquo; are trademarks of Jagex Ltd.
              Game assets and item icons are used under fair use for informational purposes.
              OSRS Wiki content is licensed under{" "}
              <Link href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank" className="text-primary hover:underline">
                CC BY-NC-SA 3.0
              </Link>.
            </p>
          </section>

          {/* Open source */}
          <section>
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-3">
              <Code2 className="h-4 w-4 text-primary" />
              Open source
            </h2>
            <p className="text-muted-foreground">
              ClogLog is open source. Contributions, bug reports, and feature requests are welcome.
            </p>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
