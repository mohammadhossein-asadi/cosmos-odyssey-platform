"use client";

import { cn } from "@/lib/utils";
import { planets } from "@/data/planets";

interface PlanetSelectorProps {
  selectedPlanet: string | null;
  onSelect: (id: string) => void;
}

function PlanetSelector({ selectedPlanet, onSelect }: PlanetSelectorProps) {
  return (
    <div className="bg-surface-glass/80 backdrop-blur-md rounded-xl border border-border-default p-2">
      <div className="flex flex-wrap gap-1.5 justify-center">
        {planets.map((planet) => (
          <button
            key={planet.id}
            onClick={() => onSelect(planet.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              "border",
              selectedPlanet === planet.id
                ? "bg-plasma-500/20 border-plasma-500/50 text-plasma-300 shadow-glow-sm"
                : "bg-transparent border-transparent text-text-secondary hover:bg-surface-glass hover:text-text-primary"
            )}
          >
            <div
              className="w-3 h-3 rounded-full shrink-0 transition-transform duration-200"
              style={{
                backgroundColor: planet.color,
                boxShadow: selectedPlanet === planet.id ? `0 0 8px ${planet.color}` : "none",
              }}
            />
            <span className="hidden sm:inline">{planet.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export { PlanetSelector };
