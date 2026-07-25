"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const dwarfPlanets = [
  { id: "pluto", name: "Pluto", diameter: 2377, distance: 5906000000, moons: 5, color: "#c4a882", description: "A dwarf planet in the Kuiper Belt with a heart-shaped nitrogen glacier." },
  { id: "eris", name: "Eris", diameter: 2326, distance: 10120000000, moons: 1, color: "#d4d4d4", description: "The most massive dwarf planet, causing Pluto's reclassification." },
  { id: "haumea", name: "Haumea", diameter: 1632, distance: 6450000000, moons: 2, color: "#c0c0c0", description: "An egg-shaped dwarf planet due to rapid rotation." },
  { id: "makemake", name: "Makemake", diameter: 1430, distance: 6850000000, moons: 1, color: "#c1440e", description: "A reddish dwarf planet in the Kuiper Belt." },
  { id: "ceres", name: "Ceres", diameter: 946, distance: 414000000, moons: 0, color: "#8b8682", description: "Largest object in the asteroid belt between Mars and Jupiter." },
];

function DwarfPlanetPanel() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>🪐</span> Dwarf Planets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {dwarfPlanets.map((dp) => (
            <div key={dp.id} className="flex items-center gap-3 p-2 bg-surface-glass rounded-lg">
              <div className="w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: dp.color }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-semibold text-text-primary">{dp.name}</h4>
                  <Badge variant="default" size="sm">{dp.moons} moons</Badge>
                </div>
                <p className="text-[10px] text-text-muted line-clamp-1">{dp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { DwarfPlanetPanel };
