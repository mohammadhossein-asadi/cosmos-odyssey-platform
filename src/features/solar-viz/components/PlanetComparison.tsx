"use client";

import { planets } from "@/data/planets";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function PlanetComparison() {
  const sortedBySize = [...planets].sort((a, b) => b.diameter - a.diameter);
  const maxDiameter = sortedBySize[0].diameter;

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>📊</span> Planet Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid grid-cols-12 gap-2 text-[10px] text-text-muted uppercase tracking-wider px-2">
            <div className="col-span-3">Planet</div>
            <div className="col-span-5">Size</div>
            <div className="col-span-2 text-right">Diameter</div>
            <div className="col-span-2 text-right">Gravity</div>
          </div>

          {planets.map((planet) => {
            const sizePercent = (planet.diameter / maxDiameter) * 100;
            return (
              <div key={planet.id} className="grid grid-cols-12 gap-2 items-center px-2 py-1 rounded hover:bg-surface-glass transition-colors">
                <div className="col-span-3 flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: planet.color }}
                  />
                  <span className="text-xs font-medium text-text-primary">{planet.name}</span>
                </div>
                <div className="col-span-5">
                  <div className="h-2 bg-surface-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${sizePercent}%`,
                        backgroundColor: planet.color,
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-2 text-right text-xs text-text-secondary">
                  {planet.diameter.toLocaleString()} km
                </div>
                <div className="col-span-2 text-right text-xs text-text-secondary">
                  {planet.gravity} m/s²
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export { PlanetComparison };
