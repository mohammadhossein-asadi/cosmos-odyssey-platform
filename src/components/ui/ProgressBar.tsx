import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: string;
  showLabel?: boolean;
}

function ProgressBar({ value, max = 100, size = "md", color, showLabel = false }: ProgressBarProps) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs text-text-muted mb-1">
          <span>{Math.round(percent)}%</span>
        </div>
      )}
      <div
        className={cn(
          "w-full bg-surface-secondary rounded-full overflow-hidden",
          { "h-1": size === "sm", "h-2": size === "md", "h-3": size === "lg" }
        )}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            backgroundColor: color || "var(--color-plasma-500)",
          }}
        />
      </div>
    </div>
  );
}

export { ProgressBar };
