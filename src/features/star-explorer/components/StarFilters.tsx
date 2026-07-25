"use client";

import { cn } from "@/lib/utils";

interface StarFiltersProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All Stars" },
  { id: "brightest", label: "Brightest" },
  { id: "nearest", label: "Nearest" },
];

function StarFilters({ filter, onFilterChange }: StarFiltersProps) {
  return (
    <div className="flex gap-2 justify-center">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onFilterChange(f.id)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
            filter === f.id
              ? "bg-star-500/20 border-star-500/30 text-star-400"
              : "bg-surface-glass border-border-default text-text-secondary hover:text-text-primary"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export { StarFilters };
