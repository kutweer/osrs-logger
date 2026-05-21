import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Layers className="h-8 w-8 text-primary/40" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-primary mb-3">404</h1>
        <h2 className="text-xl font-semibold text-foreground mb-2">Page not found</h2>
        <p className="text-sm text-muted-foreground mb-6">
          That page doesn&apos;t exist. Perhaps you&apos;re looking for a player
          profile or the collection log?
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="gold" asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/players/Omhoog">View demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
