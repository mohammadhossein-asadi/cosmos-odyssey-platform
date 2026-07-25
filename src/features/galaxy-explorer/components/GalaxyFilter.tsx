"use client";

import { GalaxyType } from "../types";

interface GalaxyFilterProps {
  typeFilter: GalaxyType | "all";
  onTypeFilterChange: (type: GalaxyType | "all") => void;
  search: string;
  onSearchChange: (search: string) => void;
}

const galaxyTypes: (GalaxyType | "all")[] = ["all", "spiral", "elliptical", "lenticular", "irregular"];

function GalaxyFilter({
  typeFilter,
  onTypeFilterChange,
  search,
  onSearchChange,
}: GalaxyFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <div className="flex-1">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search galaxies..."
          className="w-full h-9 px-3 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
        />
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {galaxyTypes.map((type) => (
          <button
            key={type}
            onClick={() => onTypeFilterChange(type)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
              typeFilter === type
                ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export { GalaxyFilter };
