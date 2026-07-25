"use client";

import { ExoplanetData } from "../types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface ExoplanetDetailPanelProps {
  planet: ExoplanetData;
  onClose: () => void;
}

function ExoplanetDetailPanel({ planet, onClose }: ExoplanetDetailPanelProps) {
  return (
    <Card variant="glass" className="w-full max-w-md">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full"
              style={{ backgroundColor: planet.color, boxShadow: `0 0 20px ${planet.color}50` }}
            />
            <div>
              <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">
                {planet.name}
              </h2>
              <p className="text-[10px] text-text-muted">{planet.hostStar} • {planet.discoveryYear}</p>
              <div className="flex gap-1 mt-1">
                <Badge variant="cosmic" size="sm">{planet.type}</Badge>
                <Badge variant="primary" size="sm">{planet.discoveryMethod}</Badge>
                {planet.habitable && <Badge variant="success" size="sm">Habitable</Badge>}
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-4">{planet.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <InfoItem label="Mass" value={`${planet.mass} ${planet.massUnit}`} />
          <InfoItem label="Radius" value={`${planet.radius} ${planet.radiusUnit}`} />
          <InfoItem label="Distance" value={`${planet.distance} ${planet.distanceUnit}`} />
          <InfoItem label="Orbital Period" value={`${planet.orbitalPeriod} ${planet.orbitalPeriodUnit}`} />
          <InfoItem label="Temperature" value={`${planet.equilibriumTemperature} K`} />
          <InfoItem label="Star Type" value={planet.hostStarType} />
          <InfoItem label="Discovery" value={planet.discoveryFacility} />
          <InfoItem label="Habitability" value={planet.habitabilityScore} />
        </div>

        {planet.atmosphere.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Atmosphere</h4>
            <div className="flex flex-wrap gap-1">
              {planet.atmosphere.map((atm, i) => (
                <Badge key={i} variant="default" size="sm">{atm}</Badge>
              ))}
            </div>
          </div>
        )}

        {planet.funFacts.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h4>
            <ul className="space-y-1.5">
              {planet.funFacts.map((fact, i) => (
                <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                  <span className="text-plasma-400 mt-0.5 shrink-0">★</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
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

export { ExoplanetDetailPanel };
