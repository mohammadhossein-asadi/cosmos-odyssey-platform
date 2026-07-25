"use client";

import { useState, useMemo } from "react";
import { localGroupGalaxies, virgoClusterGalaxies, comaClusterGalaxies } from "../data/galaxies";
import { GalaxyPosition } from "../types";

interface GalaxySearchProps {
  onSelect: (id: string) => void;
  selectedGalaxy: string | null;
}

function GalaxySearch({ onSelect, selectedGalaxy }: GalaxySearchProps) {
  const [query, setQuery] = useState("");

  const allGalaxies = useMemo(() => [...localGroupGalaxies, ...virgoClusterGalaxies, ...comaClusterGalaxies], []);

  const results = useMemo(() => {
    if (!query) return [];
    return allGalaxies.filter((g) =>
      g.name.toLowerCase().includes(query.toLowerCase()) ||
      g.type.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  }, [query, allGalaxies]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search galaxies..."
        className="w-full h-8 px-3 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-xs placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
      />

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-primary border border-border-default rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
          {results.map((galaxy) => (
            <button
              key={galaxy.id}
              onClick={() => { onSelect(galaxy.id); setQuery(""); }}
              className="w-full px-3 py-2 flex items-center gap-2 hover:bg-surface-glass transition-colors text-left"
            >
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: galaxy.color }} />
              <div>
                <div className="text-xs text-text-primary">{galaxy.name}</div>
                <div className="text-[10px] text-text-muted">{galaxy.type} • {galaxy.distance.toLocaleString()} ly</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { GalaxySearch };
