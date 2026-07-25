"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const discoveries = [
  { year: 1610, planet: "Jupiter", discoverer: "Galileo Galilei", method: "Telescope", description: "First planet discovered with a telescope." },
  { year: 1655, planet: "Saturn's Titan", discoverer: "Christiaan Huygens", method: "Telescope", description: "First moon discovered orbiting another planet." },
  { year: 1781, planet: "Uranus", discoverer: "William Herschel", method: "Telescope", description: "First planet discovered with a telescope." },
  { year: 1846, planet: "Neptune", discoverer: "Johann Galle", method: "Mathematics", description: "Predicted mathematically before being observed." },
  { year: 1930, planet: "Pluto", discoverer: "Clyde Tombaugh", method: "Photography", description: "Discovered through photographic plates." },
  { year: 1995, planet: "51 Pegasi b", discoverer: "Michel Mayor & Didier Queloz", method: "Radial Velocity", description: "First exoplanet around a Sun-like star." },
  { year: 2006, planet: "Pluto reclassified", discoverer: "IAU", method: "Definition", description: "Pluto reclassified as a dwarf planet." },
];

function PlanetDiscoveryTimeline() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>📜</span> Discovery Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {discoveries.map((discovery, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-plasma-500 shrink-0" />
                {i < discoveries.length - 1 && <div className="w-px h-full bg-border-default" />}
              </div>
              <div className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-plasma-400">{discovery.year}</span>
                  <span className="text-xs font-semibold text-text-primary">{discovery.planet}</span>
                </div>
                <p className="text-[10px] text-text-secondary">{discovery.description}</p>
                <p className="text-[9px] text-text-muted mt-0.5">By {discovery.discoverer} • {discovery.method}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { PlanetDiscoveryTimeline };
