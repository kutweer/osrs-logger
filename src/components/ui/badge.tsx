import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline:
          "border-border text-foreground bg-transparent",
        // WUR lime tint — used for CTA badges and "active" states
        gold:
          "border-accent/50 bg-accent/15 text-accent-foreground font-semibold",
        // Success — light green tint, dark green text (accessible on cream)
        success:
          "border-green-400/60 bg-green-100 text-green-800",
        // Warning — amber tint
        warning:
          "border-amber-400/50 bg-amber-100 text-amber-800",
        // Muted — warm grey
        muted:
          "border-border bg-muted text-muted-foreground",
        // Account type badges
        ironman:
          "border-transparent bg-slate-200 text-slate-700",
        hcim:
          "border-transparent bg-red-100 text-red-700",
        uim:
          "border-transparent bg-purple-100 text-purple-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
