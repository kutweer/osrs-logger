"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";

interface PlayerSearchProps {
  className?: string;
  placeholder?: string;
  size?: "sm" | "default" | "lg";
  autoFocus?: boolean;
}

export function PlayerSearch({
  className,
  placeholder = "Search OSRS username…",
  size = "default",
  autoFocus,
}: PlayerSearchProps) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounced = useDebounce(value, 400);

  // Pre-validate: OSRS usernames are 1-12 chars, letters/numbers/spaces/hyphens
  const isValid = debounced.trim().length >= 1 && debounced.trim().length <= 12;

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const username = value.trim();
    if (!username) return;
    setLoading(true);
    router.push(`/players/${encodeURIComponent(username)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const sizeClasses = {
    sm: "h-8 text-xs",
    default: "h-10 text-sm",
    lg: "h-12 text-base",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative flex items-center gap-2", className)}
    >
      <div className="relative flex-1">
        <Search
          className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none",
            size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5"
          )}
        />
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          maxLength={12}
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          className={cn(
            sizeClasses[size],
            "pl-9",
            value && "pr-8"
          )}
          aria-label="Search OSRS username"
        />
        {value && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <Button
        type="submit"
        disabled={!isValid || loading}
        variant="gold"
        size={size === "lg" ? "lg" : size === "sm" ? "sm" : "default"}
        className={cn(size === "lg" && "px-6")}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Search"
        )}
      </Button>
    </form>
  );
}
