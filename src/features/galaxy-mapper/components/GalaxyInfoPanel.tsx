"use client";

import { GalaxyPosition } from "../types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface GalaxyInfoPanelProps {
  galaxy: GalaxyPosition;
  onClose: () => void;
}

function GalaxyInfoPanel({ galaxy, onClose }: GalaxyInfoPanelProps) {
  return (
    <Card variant="glass" className="w-64">
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: galaxy.color, boxShadow: `0 0 10px ${galaxy.color}60` }} />
            <div>
              <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">{galaxy.name}</h3>
              <Badge variant="cosmic" size="sm">{galaxy.type}</Badge>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-surface-glass text-text-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {galaxy.description && (
          <p className="text-[10px] text-text-secondary mb-2">{galaxy.description}</p>
        )}

        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-surface-glass rounded p-1.5">
            <div className="text-[8px] text-text-muted">Distance</div>
            <div className="text-[10px] text-text-primary">{galaxy.distance.toLocaleString()} ly</div>
          </div>
          <div className="bg-surface-glass rounded p-1.5">
            <div className="text-[8px] text-text-muted">Magnitude</div>
            <div className="text-[10px] text-text-primary">{galaxy.magnitude}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { GalaxyInfoPanel };
