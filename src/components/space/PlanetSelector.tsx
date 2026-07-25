"use client";

import { cn } from "@/lib/utils";
import { planets } from "@/data/planets";

interface PlanetSelectorProps {
  selectedPlanet: string | null;
  onSelect: (id: string) => void;
}

function PlanetSelector({ selectedPlanet, onSelect }: PlanetSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {planets.map((planet) => (
        <button
          key={planet.id}
          onClick={() => onSelect(planet.id)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            "border",
            selectedPlanet === planet.id
              ? "bg-plasma-500/20 border-plasma-500/50 text-plasma-300"
              : "bg-surface-glass border-border-default text-text-secondary hover:border-plasma-500/30 hover:text-text-primary"
          )}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: planet.color }}
          />
          <span>{planet.name}</span>
        </button>
      ))}
    </div>
  );
}

export { PlanetSelector };
