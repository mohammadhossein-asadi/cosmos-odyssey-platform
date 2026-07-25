"use client";

import { ExoplanetData } from "../types";
import { Badge } from "@/components/ui/Badge";

interface ExoplanetCatalogProps {
  planets: ExoplanetData[];
  onSelect: (id: string) => void;
  selectedPlanet: string | null;
}

function ExoplanetCatalog({ planets, onSelect, selectedPlanet }: ExoplanetCatalogProps) {
  return (
    <div className="space-y-2 max-h-[500px] overflow-y-auto">
      {planets.map((planet) => (
        <button
          key={planet.id}
          onClick={() => onSelect(planet.id)}
          className={`w-full p-3 rounded-xl border text-left transition-all duration-300 ${
            selectedPlanet === planet.id
              ? "bg-plasma-500/10 border-plasma-500/30"
              : "bg-surface-primary border-border-default hover:border-plasma-500/20"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full shrink-0"
              style={{ backgroundColor: planet.color, boxShadow: `0 0 10px ${planet.color}40` }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                  {planet.name}
                </h3>
                {planet.habitable && <span className="text-[10px] text-aurora-400">✓ Habitable</span>}
              </div>
              <div className="flex items-center gap-2 text-[10px] text-text-muted">
                <span>{planet.hostStar}</span>
                <span>•</span>
                <span>{planet.distance} ly</span>
                <span>•</span>
                <Badge variant="cosmic" size="sm">{planet.type}</Badge>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export { ExoplanetCatalog };
