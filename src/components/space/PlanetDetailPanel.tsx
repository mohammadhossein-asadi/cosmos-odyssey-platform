"use client";

import { planets } from "@/data/planets";
import { formatDistance, formatTemperature } from "@/lib/formatters";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface PlanetDetailPanelProps {
  planetId: string;
  onClose?: () => void;
}

function PlanetDetailPanel({ planetId, onClose }: PlanetDetailPanelProps) {
  const planet = planets.find((p) => p.id === planetId);
  if (!planet) return null;

  return (
    <Card variant="glass" className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: planet.color }}
            />
            <CardTitle>{planet.name}</CardTitle>
          </div>
          <Badge variant="cosmic">#{planet.orderFromSun}</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-text-secondary mb-4">{planet.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <StatItem label="Distance" value={formatDistance(planet.distanceFromSun)} />
          <StatItem label="Diameter" value={`${planet.diameter.toLocaleString()} km`} />
          <StatItem label="Gravity" value={`${planet.gravity} m/s²`} />
          <StatItem label="Temperature" value={formatTemperature(planet.temperature.average)} />
          <StatItem label="Day Length" value={`${planet.dayLength} hours`} />
          <StatItem label="Year Length" value={`${planet.yearLength} Earth days`} />
        </div>

        {planet.moons.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Moons ({planet.moons.length})
            </h4>
            <div className="flex flex-wrap gap-1">
              {planet.moons.map((moon) => (
                <Badge key={moon.id} variant="default" size="sm">
                  {moon.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
            Fun Facts
          </h4>
          <ul className="space-y-1">
            {planet.funFacts.slice(0, 2).map((fact, i) => (
              <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                <span className="text-plasma-400 mt-0.5">•</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-glass rounded-lg p-2">
      <div className="text-[10px] text-text-muted uppercase tracking-wider">{label}</div>
      <div className="text-xs text-text-primary font-medium">{value}</div>
    </div>
  );
}

export { PlanetDetailPanel };
