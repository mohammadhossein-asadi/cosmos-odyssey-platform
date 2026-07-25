import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "cosmic" | "glow";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6 transition-all duration-300",
          {
            "bg-surface-primary border border-border-default": variant === "default",
            "bg-surface-glass backdrop-blur-md border border-white/10": variant === "glass",
            "bg-gradient-to-br from-cosmic-700 to-cosmic-900 border border-cosmic-500/30": variant === "cosmic",
            "bg-surface-primary border border-plasma-500/30 shadow-glow-sm": variant === "glow",
          },
          hover && "hover:scale-[1.02] hover:shadow-glow-md cursor-pointer",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold text-text-primary font-[family-name:var(--font-display)]", className)} {...props} />;
}

function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-text-secondary", className)} {...props} />;
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, type CardProps };
