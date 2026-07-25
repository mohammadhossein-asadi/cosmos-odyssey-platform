"use client";

import { useState } from "react";
import { GalaxyData } from "../types";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/formatters";

interface GalaxyCatalogProps {
  galaxies: GalaxyData[];
  onSelect: (id: string) => void;
  selectedGalaxy: string | null;
}

function GalaxyCatalog({ galaxies, onSelect, selectedGalaxy }: GalaxyCatalogProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {galaxies.map((galaxy) => (
        <button
          key={galaxy.id}
          onClick={() => onSelect(galaxy.id)}
          className={`group p-5 rounded-xl border text-left transition-all duration-300 ${
            selectedGalaxy === galaxy.id
              ? "bg-plasma-500/10 border-plasma-500/30"
              : "bg-surface-primary border-border-default hover:border-plasma-500/20"
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: `${galaxy.color}30`, border: `2px solid ${galaxy.color}50` }}
              />
              <div>
                <h3 className="text-sm font-semibold text-text-primary group-hover:text-plasma-300 transition-colors font-[family-name:var(--font-display)]">
                  {galaxy.name}
                </h3>
                <p className="text-[10px] text-text-muted">{galaxy.type}</p>
              </div>
            </div>
            {galaxy.hasActiveNucleus && (
              <Badge variant="warning" size="sm">Active Nucleus</Badge>
            )}
          </div>

          <p className="text-xs text-text-secondary mb-3 line-clamp-2">{galaxy.description}</p>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-[9px] text-text-muted uppercase">Distance</div>
              <div className="text-[11px] text-text-primary">{formatDistance(galaxy.distance * 3.26)}</div>
            </div>
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-[9px] text-text-muted uppercase">Stars</div>
              <div className="text-[11px] text-text-primary">{galaxy.stars}</div>
            </div>
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-[9px] text-text-muted uppercase">Age</div>
              <div className="text-[11px] text-text-primary">{galaxy.age} Gyr</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export { GalaxyCatalog };
