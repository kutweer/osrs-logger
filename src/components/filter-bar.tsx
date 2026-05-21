"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
  filters?: Array<{
    key: string;
    label: string;
    active: boolean;
    onClick: () => void;
  }>;
  className?: string;
  children?: React.ReactNode;
}

export function FilterBar({
  search,
  onSearchChange,
  placeholder = "Search…",
  filters,
  className,
  children,
}: FilterBarProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {/* Search */}
      <div className="relative flex-1 min-w-[160px]">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="h-8 pl-8 pr-8 text-xs"
        />
        {search && (
          <Button
            variant="ghost"
            size="icon-sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6"
            onClick={() => onSearchChange("")}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Toggle filters */}
      {filters?.map((filter) => (
        <Badge
          key={filter.key}
          variant={filter.active ? "gold" : "outline"}
          className="cursor-pointer select-none hover:bg-primary/20 transition-colors"
          onClick={filter.onClick}
        >
          {filter.label}
        </Badge>
      ))}

      {children}
    </div>
  );
}
