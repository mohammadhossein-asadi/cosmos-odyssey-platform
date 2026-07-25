import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: "default" | "gradient" | "glow";
}

function Divider({ className, variant = "default", ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0",
        {
          "h-px bg-border-default": variant === "default",
          "h-px bg-gradient-to-r from-transparent via-plasma-500/50 to-transparent": variant === "gradient",
          "h-px bg-gradient-to-r from-transparent via-plasma-500 to-transparent shadow-glow-sm": variant === "glow",
        },
        className
      )}
      {...props}
    />
  );
}

export { Divider };
