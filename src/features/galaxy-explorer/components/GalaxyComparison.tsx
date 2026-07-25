"use client";

import { galaxies } from "../data/galaxies";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { formatDistance } from "@/lib/formatters";

function GalaxyComparison() {
  const sorted = [...galaxies].sort((a, b) => b.diameter - a.diameter);
  const maxDiameter = sorted[0].diameter;

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🌌</span> Galaxy Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="grid grid-cols-12 gap-2 text-[10px] text-text-muted uppercase tracking-wider px-2">
            <div className="col-span-4">Galaxy</div>
            <div className="col-span-4">Size</div>
            <div className="col-span-2 text-right">Diameter</div>
            <div className="col-span-2 text-right">Type</div>
          </div>

          {galaxies.map((galaxy) => {
            const sizePercent = (galaxy.diameter / maxDiameter) * 100;
            return (
              <div key={galaxy.id} className="grid grid-cols-12 gap-2 items-center px-2 py-1.5 rounded hover:bg-surface-glass transition-colors">
                <div className="col-span-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: galaxy.color }} />
                  <span className="text-xs font-medium text-text-primary truncate">{galaxy.name}</span>
                </div>
                <div className="col-span-4">
                  <div className="h-2 bg-surface-secondary rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${sizePercent}%`, backgroundColor: galaxy.color }} />
                  </div>
                </div>
                <div className="col-span-2 text-right text-xs text-text-secondary">
                  {galaxy.diameter.toLocaleString()} ly
                </div>
                <div className="col-span-2 text-right text-[10px] text-text-muted capitalize">
                  {galaxy.type}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export { GalaxyComparison };
