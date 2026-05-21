import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { DEMO_ITEMS } from "@/data/osrs-categories";
import { getWikiUrl } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Item Database",
  description: "Browse all OSRS collection log items on ClogLog.",
};

export default function ItemsPage() {
  const items = DEMO_ITEMS.slice(0, 40);

  return (
    <AppShell showSearch>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Items" }]}
          className="mb-6"
        />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Item Database</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              {items.length} collection log items shown. Full database syncing from OSRS Wiki.
            </p>
          </div>
          <Badge variant="warning">Demo</Badge>
        </div>

        <div className="rounded-md border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-xs text-muted-foreground">
                <th className="px-4 py-3 text-left font-semibold">Item</th>
                <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Category</th>
                <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Drop source</th>
                <th className="px-4 py-3 text-left font-semibold hidden lg:table-cell">Rarity</th>
                <th className="px-4 py-3 text-right font-semibold">ID</th>
                <th className="px-4 py-3 w-8"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.itemId}
                  className="border-b border-border/40 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-4 py-2.5 font-medium text-foreground">{item.name}</td>
                  <td className="px-4 py-2.5 hidden sm:table-cell">
                    <Badge variant="muted" className="text-[10px]">{item.category}</Badge>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">
                    {item.dropSource ?? "—"}
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden lg:table-cell text-xs">
                    {item.dropRarity ?? "—"}
                  </td>
                  <td className="px-4 py-2.5 text-right text-muted-foreground tabular-nums text-xs">
                    {item.itemId}
                  </td>
                  <td className="px-4 py-2.5">
                    <Link
                      href={getWikiUrl(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Package className="h-4 w-4 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">
            Full item database with 1,477+ entries available after setup. Item metadata is fetched from the OSRS Wiki API.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
