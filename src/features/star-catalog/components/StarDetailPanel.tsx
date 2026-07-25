"use client";

import { StarData } from "../types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/formatters";

interface StarDetailPanelProps {
  star: StarData;
  onClose: () => void;
}

function StarDetailPanel({ star, onClose }: StarDetailPanelProps) {
  return (
    <Card variant="glass" className="w-full max-w-md">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-full"
              style={{ backgroundColor: star.color, boxShadow: `0 0 20px ${star.color}60` }}
            />
            <div>
              <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">
                {star.name}
              </h2>
              <p className="text-[10px] text-text-muted">{star.designation}</p>
              <div className="flex gap-1 mt-1">
                <Badge variant="cosmic" size="sm">{star.spectralType}</Badge>
                <Badge variant="primary" size="sm">{star.category}</Badge>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-4">{star.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <InfoItem label="Distance" value={formatDistance(star.distance * 3.26)} />
          <InfoItem label="Constellation" value={star.constellation} />
          <InfoItem label="Temperature" value={`${star.temperature.toLocaleString()} K`} />
          <InfoItem label="Luminosity" value={`${star.luminosity.toLocaleString()} L☉`} />
          <InfoItem label="Radius" value={`${star.radius} R☉`} />
          <InfoItem label="Mass" value={`${star.mass} M☉`} />
          <InfoItem label="Age" value={`${star.age} Gyr`} />
          <InfoItem label="Magnitude" value={`${star.apparentMagnitude}`} />
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <InfoItem label="Absolute Mag" value={`${star.absoluteMagnitude}`} />
          <InfoItem label="Metallicity" value={`${star.metallicity}`} />
          {star.rotationPeriod && <InfoItem label="Rotation" value={`${star.rotationPeriod} days`} />}
          {star.binaryCompanion && <InfoItem label="Companion" value={star.binaryCompanion} />}
          {star.exoplanets && <InfoItem label="Exoplanets" value={`${star.exoplanets}`} />}
        </div>

        <div className="mb-4">
          <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Evolution Stage</div>
          <Badge variant="warning" size="sm">{star.evolutionStage.replace("-", " ")}</Badge>
        </div>

        {star.funFacts.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h4>
            <ul className="space-y-1.5">
              {star.funFacts.map((fact, i) => (
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

export { StarDetailPanel };
