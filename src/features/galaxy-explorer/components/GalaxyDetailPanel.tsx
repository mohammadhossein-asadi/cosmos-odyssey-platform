"use client";

import { galaxies } from "../data/galaxies";
import { deepSkyObjects } from "../data/deep-sky-objects";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/formatters";

interface GalaxyDetailPanelProps {
  galaxyId: string;
  onClose: () => void;
}

function GalaxyDetailPanel({ galaxyId, onClose }: GalaxyDetailPanelProps) {
  const galaxy = galaxies.find((g) => g.id === galaxyId);
  if (!galaxy) return null;

  const objects = deepSkyObjects.filter((o) => o.galaxy === galaxyId);

  return (
    <div className="w-full max-w-md">
      <Card variant="glass">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full"
                style={{ backgroundColor: galaxy.color, boxShadow: `0 0 20px ${galaxy.color}50` }}
              />
              <div>
                <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">
                  {galaxy.name}
                </h2>
                <div className="flex items-center gap-2">
                  <Badge variant="cosmic" size="sm">{galaxy.type}</Badge>
                  {galaxy.constellation && (
                    <Badge variant="default" size="sm">{galaxy.constellation}</Badge>
                  )}
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-sm text-text-secondary mb-4">{galaxy.description}</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <InfoItem label="Distance" value={formatDistance(galaxy.distance * 3.26)} />
            <InfoItem label="Diameter" value={`${galaxy.diameter.toLocaleString()} ly`} />
            <InfoItem label="Stars" value={galaxy.stars} />
            <InfoItem label="Age" value={`${galaxy.age} billion years`} />
          </div>

          {galaxy.funFacts.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h4>
              <ul className="space-y-1.5">
                {galaxy.funFacts.map((fact, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                    <span className="text-plasma-400 mt-0.5 shrink-0">★</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {objects.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Deep Sky Objects ({objects.length})
              </h4>
              <div className="space-y-1.5">
                {objects.map((obj) => (
                  <div key={obj.id} className="flex items-center gap-2 p-2 bg-surface-glass rounded-lg">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: obj.color }} />
                    <span className="text-xs text-text-primary">{obj.name}</span>
                    <Badge variant="default" size="sm">{obj.type}</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-glass rounded-lg p-2">
      <div className="text-[9px] text-text-muted uppercase tracking-wider">{label}</div>
      <div className="text-xs font-medium text-text-primary">{value}</div>
    </div>
  );
}

export { GalaxyDetailPanel };
