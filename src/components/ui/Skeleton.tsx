import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
}

function Skeleton({ className, variant = "text", width, height, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-surface-secondary",
        {
          "rounded-md h-4": variant === "text",
          "rounded-full": variant === "circular",
          "rounded-lg": variant === "rectangular",
        },
        className
      )}
      style={{ width, height }}
      {...props}
    />
  );
}

export { Skeleton };
