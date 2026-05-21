"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Layers, LogIn, LayoutDashboard, Sword } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlayerSearch } from "@/components/player-search";
import { cn } from "@/lib/utils";

interface TopNavProps {
  showSearch?: boolean;
  user?: { name?: string | null; email?: string | null } | null;
}

export function TopNav({ showSearch = true, user }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/20 border border-primary/30">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-bold text-gold-gradient hidden sm:block">
              ClogLog
            </span>
          </Link>

          {/* Search bar — center */}
          {showSearch && (
            <div className="flex-1 max-w-md hidden sm:block">
              <PlayerSearch size="sm" placeholder="Search player…" />
            </div>
          )}

          {/* Nav links */}
          <nav className="hidden sm:flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/bosses" className="gap-1.5">
                <Sword className="h-3.5 w-3.5" />
                Bosses
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/leaderboards">Leaderboards</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/items">Items</Link>
            </Button>
            {user ? (
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard" className="gap-1.5">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  Dashboard
                </Link>
              </Button>
            ) : (
              <Button variant="gold" size="sm" asChild>
                <Link href="/login" className="gap-1.5">
                  <LogIn className="h-3.5 w-3.5" />
                  Sign in
                </Link>
              </Button>
            )}
          </nav>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-border bg-card/95 px-4 py-3 space-y-3 animate-fade-in">
          {showSearch && (
            <PlayerSearch size="sm" placeholder="Search player…" className="w-full" />
          )}
          <nav className="flex flex-col gap-1">
            {[
              { href: "/bosses", label: "Bosses" },
              { href: "/leaderboards", label: "Leaderboards" },
              { href: "/items", label: "Item Database" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Sign in
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
