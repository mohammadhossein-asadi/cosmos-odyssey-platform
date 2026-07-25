"use client";

import { planets } from "@/data/planets";
import { formatDistance, formatTemperature } from "@/lib/formatters";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface VizInfoPanelProps {
  planetId: string;
  onClose: () => void;
}

function VizInfoPanel({ planetId, onClose }: VizInfoPanelProps) {
  const planet = planets.find((p) => p.id === planetId);
  if (!planet) return null;

  return (
    <div className="absolute right-4 top-4 w-72">
      <Card variant="glass">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: planet.color, boxShadow: `0 0 15px ${planet.color}60` }}
              />
              <div>
                <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-display)]">
                  {planet.name}
                </h3>
                <Badge variant="cosmic" size="sm">#{planet.orderFromSun}</Badge>
              </div>
            </div>
            <button onClick={onClose} className="p-1 rounded hover:bg-surface-glass text-text-muted">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-text-secondary mb-3">{planet.description}</p>

          <div className="grid grid-cols-2 gap-2">
            <InfoItem label="Distance" value={formatDistance(planet.distanceFromSun)} />
            <InfoItem label="Diameter" value={`${planet.diameter.toLocaleString()} km`} />
            <InfoItem label="Gravity" value={`${planet.gravity} m/s²`} />
            <InfoItem label="Temperature" value={formatTemperature(planet.temperature.average)} />
          </div>

          {planet.moons.length > 0 && (
            <div className="mt-3">
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Moons</div>
              <div className="flex flex-wrap gap-1">
                {planet.moons.map((moon) => (
                  <Badge key={moon.id} variant="default" size="sm">{moon.name}</Badge>
                ))}
              </div>
            </div>
          )}

          <div className="mt-3 bg-surface-glass rounded-lg p-2">
            <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Composition</div>
            <div className="flex flex-wrap gap-1">
              {planet.composition.slice(0, 2).map((comp, i) => (
                <span key={i} className="text-[10px] text-text-secondary">{comp}{i < 1 ? "," : ""}</span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-glass rounded p-2">
      <div className="text-[9px] text-text-muted uppercase">{label}</div>
      <div className="text-[11px] font-medium text-text-primary">{value}</div>
    </div>
  );
}

export { VizInfoPanel };
