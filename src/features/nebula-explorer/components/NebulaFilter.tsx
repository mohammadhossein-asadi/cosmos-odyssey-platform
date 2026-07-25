"use client";

import { NebulaType, NebulaCategory } from "../types";

interface NebulaFilterProps {
  type: NebulaType | "all";
  onTypeChange: (type: NebulaType | "all") => void;
  category: NebulaCategory | "all";
  onCategoryChange: (category: NebulaCategory | "all") => void;
  search: string;
  onSearchChange: (search: string) => void;
}

function NebulaFilter({
  type,
  onTypeChange,
  category,
  onCategoryChange,
  search,
  onSearchChange,
}: NebulaFilterProps) {
  const types: (NebulaType | "all")[] = ["all", "emission", "reflection", "planetary", "supernova", "dark"];
  const categories: (NebulaCategory | "all")[] = ["all", "star-forming", "stellar-evolution", "remnant"];

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search nebulae..."
        className="w-full h-9 px-3 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
      />

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Type</label>
        <div className="flex gap-1 flex-wrap">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => onTypeChange(t)}
              className={`px-2.5 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                type === t
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {t === "all" ? "All" : t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Category</label>
        <div className="flex gap-1 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => onCategoryChange(c)}
              className={`px-2.5 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                category === c
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {c === "all" ? "All" : c.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { NebulaFilter };
