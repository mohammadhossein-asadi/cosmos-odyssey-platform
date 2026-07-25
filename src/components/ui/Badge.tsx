import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "cosmic";
  size?: "sm" | "md";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "sm", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full font-medium",
          {
            "bg-surface-secondary text-text-secondary border border-border-default": variant === "default",
            "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30": variant === "primary",
            "bg-aurora-500/20 text-aurora-400 border border-aurora-500/30": variant === "success",
            "bg-star-500/20 text-star-400 border border-star-500/30": variant === "warning",
            "bg-nebula-500/20 text-nebula-400 border border-nebula-500/30": variant === "danger",
            "bg-cosmic-500/20 text-cosmic-200 border border-cosmic-500/30": variant === "cosmic",
          },
          {
            "px-2 py-0.5 text-xs": size === "sm",
            "px-3 py-1 text-sm": size === "md",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
export { Badge, type BadgeProps };
