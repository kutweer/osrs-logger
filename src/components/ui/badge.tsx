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
          "border-border text-foreground",
        gold:
          "border-primary/40 bg-primary/10 text-primary",
        success:
          "border-transparent bg-green-900/40 text-green-400 border-green-700/40",
        warning:
          "border-transparent bg-amber-900/40 text-amber-400 border-amber-700/40",
        muted:
          "border-border bg-muted text-muted-foreground",
        ironman:
          "border-transparent bg-zinc-700/50 text-zinc-300",
        hcim:
          "border-transparent bg-red-900/40 text-red-400",
        uim:
          "border-transparent bg-purple-900/40 text-purple-400",
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
