"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Target,
  Settings,
  RefreshCw,
  BookOpen,
  Trophy,
  Info,
  Code2,
  ChevronRight,
  Leaf,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  exact?: boolean;
}

const PUBLIC_NAV: NavItem[] = [
  { href: "/", label: "Home", icon: BookOpen, exact: true },
  { href: "/leaderboards", label: "Leaderboards", icon: Trophy },
  { href: "/items", label: "Item Database", icon: Package },
  { href: "/about", label: "About", icon: Info },
  { href: "/docs", label: "API Docs", icon: Code2 },
];

const DASHBOARD_NAV: NavItem[] = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/accounts", label: "Accounts", icon: Users },
  { href: "/dashboard/goals", label: "Goals", icon: Target },
  { href: "/dashboard/sync", label: "Sync", icon: RefreshCw },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  className?: string;
  showDashboard?: boolean;
}

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-150",
        isActive
          ? "bg-secondary text-foreground font-medium"
          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 flex-shrink-0",
          isActive ? "text-primary" : "text-muted-foreground/70"
        )}
      />
      <span>{item.label}</span>
      {item.badge && (
        <span className="ml-auto rounded-full bg-primary/20 px-1.5 py-0.5 text-[10px] font-medium text-primary">
          {item.badge}
        </span>
      )}
      {isActive && (
        <ChevronRight className="ml-auto h-3.5 w-3.5 text-primary/60" />
      )}
    </Link>
  );
}

export function Sidebar({ className, showDashboard }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col w-56 flex-shrink-0 border-r border-border bg-card/30",
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Leaf className="h-4 w-4" />
        </div>
        <div>
          <span className="text-sm font-bold text-gold-gradient">ClogLog</span>
          <p className="text-[10px] text-muted-foreground leading-tight">OSRS Collection Tracker</p>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {showDashboard ? (
          <>
            <p className="px-3 pt-1 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
              Dashboard
            </p>
            {DASHBOARD_NAV.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
            <div className="pt-3">
              <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                Explore
              </p>
              {PUBLIC_NAV.slice(1).map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </div>
          </>
        ) : (
          <>
            {PUBLIC_NAV.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </>
        )}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border">
        <p className="text-[10px] text-muted-foreground/40 text-center">
          Not affiliated with Jagex Ltd.
        </p>
      </div>
    </aside>
  );
}
