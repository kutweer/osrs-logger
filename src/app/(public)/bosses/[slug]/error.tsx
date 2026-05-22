"use client";

import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function BossError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertCircle className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
        <h2 className="text-lg font-bold text-foreground mb-2">Failed to load boss page</h2>
        <p className="text-sm text-muted-foreground mb-6">
          {error.message || "An unexpected error occurred while loading this boss."}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/bosses"
            className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Bosses
          </Link>
        </div>
      </div>
    </div>
  );
}
