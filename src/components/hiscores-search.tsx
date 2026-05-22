"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { Search } from "lucide-react";

interface HiscoresSearchProps {
  defaultPlayer: string;
  defaultMode: string;
}

export function HiscoresSearch({ defaultPlayer, defaultMode }: HiscoresSearchProps) {
  const router = useRouter();
  const [player, setPlayer] = useState(defaultPlayer);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = player.trim();
    if (!trimmed) return;
    router.push(`/hiscores?player=${encodeURIComponent(trimmed)}&mode=${defaultMode}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          placeholder="Enter OSRS username…"
          className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors"
          autoComplete="off"
          spellCheck={false}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Look up
      </button>
    </form>
  );
}
