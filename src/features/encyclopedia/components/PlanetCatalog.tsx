"use client";

import Link from "next/link";
import { Planet } from "@/types/celestial";

interface PlanetCatalogProps {
  planets: Planet[];
}

function PlanetCatalog({ planets }: PlanetCatalogProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {planets.map((planet) => (
        <Link
          key={planet.id}
          href={`/encyclopedia/${planet.id}`}
          className="group p-6 rounded-xl bg-surface-primary border border-border-default hover:border-plasma-500/30 transition-all duration-300 hover:shadow-glow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${planet.color}20`, border: `2px solid ${planet.color}40` }}
            >
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: planet.color }} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-plasma-300 transition-colors font-[family-name:var(--font-display)]">
                {planet.name}
              </h3>
              <p className="text-xs text-text-muted">#{planet.orderFromSun} from Sun</p>
            </div>
          </div>
          <p className="text-sm text-text-secondary mb-4 line-clamp-2">{planet.description}</p>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span>{planet.moons.length} moons</span>
            <span>•</span>
            <span>{planet.diameter.toLocaleString()} km</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export { PlanetCatalog };
