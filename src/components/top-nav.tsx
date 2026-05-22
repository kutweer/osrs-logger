"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf, LogIn, LayoutDashboard, Sword, Search } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm font-bold text-gold-gradient hidden sm:block">
              ClogLog
            </span>
          </Link>

          {/* Search bar — center */}
          {showSearch && (
            <div className="flex-1 max-w-sm hidden sm:block">
              <PlayerSearch size="sm" placeholder="Search player…" />
            </div>
          )}

          {/* Nav links */}
          <nav className="hidden sm:flex items-center gap-0.5">
            {[
              { href: "/bosses", label: "Bosses", icon: Sword },
            ].map(({ href, label, icon: Icon }) => (
              <Button key={href} variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
                <Link href={href} className="gap-1.5">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </Link>
              </Button>
            ))}
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/leaderboards">Leaderboards</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/items">Items</Link>
            </Button>

            <div className="w-px h-5 bg-border mx-1" />

            {user ? (
              <Button variant="default" size="sm" asChild>
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

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-border bg-card px-4 py-3 space-y-3 animate-fade-in">
          {showSearch && (
            <PlayerSearch size="sm" placeholder="Search player…" className="w-full" />
          )}
          <nav className="flex flex-col gap-0.5">
            {[
              { href: "/bosses",       label: "Bosses"        },
              { href: "/leaderboards", label: "Leaderboards"  },
              { href: "/items",        label: "Item Database" },
              { href: "/about",        label: "About"         },
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
