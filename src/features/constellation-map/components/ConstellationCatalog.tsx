"use client";

import { ConstellationData, Season } from "../types";
import { Badge } from "@/components/ui/Badge";

interface ConstellationCatalogProps {
  constellations: ConstellationData[];
  onSelect: (id: string) => void;
  selectedConstellation: string | null;
}

function ConstellationCatalog({ constellations, onSelect, selectedConstellation }: ConstellationCatalogProps) {
  return (
    <div className="space-y-2">
      {constellations.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
            selectedConstellation === c.id
              ? "bg-plasma-500/10 border-plasma-500/30"
              : "bg-surface-primary border-border-default hover:border-plasma-500/20"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                {c.name}
              </h3>
              <p className="text-[10px] text-text-muted">{c.abbreviation} • {c.area} sq deg</p>
            </div>
            <div className="flex gap-1">
              <Badge variant="cosmic" size="sm">{c.season}</Badge>
              <Badge variant="default" size="sm">{c.hemisphere}</Badge>
            </div>
          </div>
          <p className="text-xs text-text-secondary line-clamp-2 mb-2">{c.description}</p>
          <div className="flex items-center gap-2 text-[10px] text-text-muted">
            <span>Brightest: {c.brightestStar}</span>
            <span>•</span>
            <span>Best: {c.bestViewingMonth}</span>
            <span>•</span>
            <span>{c.stars.length} stars</span>
          </div>
        </button>
      ))}
    </div>
  );
}

export { ConstellationCatalog };
