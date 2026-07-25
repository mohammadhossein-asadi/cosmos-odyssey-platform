"use client";

import { ConstellationData } from "../types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface ConstellationDetailPanelProps {
  constellation: ConstellationData;
  onClose: () => void;
  onStarHover: (starId: string | null) => void;
}

function ConstellationDetailPanel({ constellation, onClose, onStarHover }: ConstellationDetailPanelProps) {
  return (
    <Card variant="glass" className="w-full max-w-sm">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">
              {constellation.name}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="cosmic" size="sm">{constellation.abbreviation}</Badge>
              <Badge variant="primary" size="sm">{constellation.season}</Badge>
              <Badge variant="default" size="sm">{constellation.hemisphere}</Badge>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-4">{constellation.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <InfoItem label="Area" value={`${constellation.area} sq deg`} />
          <InfoItem label="Brightest Star" value={constellation.brightestStar} />
          <InfoItem label="Best Viewing" value={constellation.bestViewingMonth} />
          <InfoItem label="Stars" value={`${constellation.stars.length}`} />
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Mythology</h4>
          <p className="text-xs text-text-secondary italic">{constellation.mythology}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Stars</h4>
          <div className="space-y-1.5">
            {constellation.stars.map((star) => (
              <div
                key={star.id}
                className="flex items-center gap-2 p-2 bg-surface-glass rounded-lg hover:bg-surface-tertiary transition-colors cursor-pointer"
                onMouseEnter={() => onStarHover(star.id)}
                onMouseLeave={() => onStarHover(null)}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: star.color, boxShadow: `0 0 6px ${star.color}` }} />
                <div className="flex-1">
                  <span className="text-xs font-medium text-text-primary">{star.name}</span>
                  {star.description && (
                    <p className="text-[10px] text-text-muted">{star.description}</p>
                  )}
                </div>
                <span className="text-[10px] text-text-muted">Mag {star.magnitude.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </div>

        {constellation.funFacts.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h4>
            <ul className="space-y-1">
              {constellation.funFacts.map((fact, i) => (
                <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                  <span className="text-plasma-400 shrink-0">★</span>
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

export { ConstellationDetailPanel };
