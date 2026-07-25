"use client";

import { StarData } from "../types";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/formatters";

interface StarCatalogProps {
  stars: StarData[];
  onSelect: (id: string) => void;
  selectedStar: string | null;
}

function StarCatalog({ stars, onSelect, selectedStar }: StarCatalogProps) {
  return (
    <div className="space-y-2">
      {stars.map((star) => (
        <button
          key={star.id}
          onClick={() => onSelect(star.id)}
          className={`w-full p-3 rounded-xl border text-left transition-all duration-300 ${
            selectedStar === star.id
              ? "bg-plasma-500/10 border-plasma-500/30"
              : "bg-surface-primary border-border-default hover:border-plasma-500/20"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full shrink-0"
              style={{ backgroundColor: star.color, boxShadow: `0 0 10px ${star.color}60` }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                  {star.name}
                </h3>
                <span className="text-[10px] text-text-muted">{star.apparentMagnitude.toFixed(1)} mag</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-text-muted">
                <span>{star.spectralType}</span>
                <span>•</span>
                <span>{star.constellation}</span>
                <span>•</span>
                <span>{formatDistance(star.distance * 3.26)}</span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export { StarCatalog };
