"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

function Tooltip({ content, children, side = "top", className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-xs text-white bg-cosmic-700 rounded-md shadow-lg whitespace-nowrap pointer-events-none animate-fade-in",
            {
              "bottom-full left-1/2 -translate-x-1/2 mb-2": side === "top",
              "top-full left-1/2 -translate-x-1/2 mt-2": side === "bottom",
              "right-full top-1/2 -translate-y-1/2 mr-2": side === "left",
              "left-full top-1/2 -translate-y-1/2 ml-2": side === "right",
            },
            className
          )}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}

export { Tooltip };
