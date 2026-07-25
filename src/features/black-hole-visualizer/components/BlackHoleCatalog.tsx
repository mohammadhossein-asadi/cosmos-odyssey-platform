"use client";

import { BlackHoleData } from "../types";
import { Badge } from "@/components/ui/Badge";

interface BlackHoleCatalogProps {
  blackHoles: BlackHoleData[];
  onSelect: (id: string) => void;
  selectedBlackHole: string | null;
}

function BlackHoleCatalog({ blackHoles, onSelect, selectedBlackHole }: BlackHoleCatalogProps) {
  return (
    <div className="space-y-2">
      {blackHoles.map((bh) => (
        <button
          key={bh.id}
          onClick={() => onSelect(bh.id)}
          className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
            selectedBlackHole === bh.id
              ? "bg-plasma-500/10 border-plasma-500/30"
              : "bg-surface-primary border-border-default hover:border-plasma-500/20"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
              {bh.name}
            </h3>
            <Badge variant="cosmic" size="sm">{bh.type}</Badge>
          </div>
          <p className="text-xs text-text-secondary line-clamp-2 mb-2">{bh.description}</p>
          <div className="flex items-center gap-2 text-[10px] text-text-muted">
            <span>{bh.mass.toLocaleString()} {bh.massUnit}</span>
            <span>•</span>
            <span>{bh.distance.toLocaleString()} ly</span>
            <span>•</span>
            <span>Spin: {(bh.spin * 100).toFixed(0)}%</span>
          </div>
        </button>
      ))}
    </div>
  );
}

export { BlackHoleCatalog };
