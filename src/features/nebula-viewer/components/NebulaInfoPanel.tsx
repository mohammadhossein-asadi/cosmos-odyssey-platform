"use client";

import { VisualNebula } from "../types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface NebulaInfoPanelProps {
  nebula: VisualNebula;
}

function NebulaInfoPanel({ nebula }: NebulaInfoPanelProps) {
  return (
    <div className="absolute top-4 right-4 w-64">
      <Card variant="glass">
        <CardContent className="p-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex gap-1">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: nebula.primaryColor }} />
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: nebula.secondaryColor }} />
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: nebula.accentColor }} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-text-primary font-[family-name:var(--font-display)]">
                {nebula.name}
              </h2>
              <Badge variant="cosmic" size="sm">{nebula.type}</Badge>
            </div>
          </div>

          <p className="text-[11px] text-text-secondary mb-3">{nebula.visualDescription}</p>

          <div className="space-y-1.5">
            <VisualBar label="Brightness" value={nebula.visualProperties.brightness} color={nebula.primaryColor} />
            <VisualBar label="Color Vibrancy" value={nebula.visualProperties.colorVibrancy} color={nebula.secondaryColor} />
            <VisualBar label="Structure" value={nebula.visualProperties.structureComplexity} color={nebula.accentColor} />
            <VisualBar label="Dust Lanes" value={nebula.visualProperties.dustLaneVisibility} color={nebula.dustColor} />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Size</div>
              <div className="text-text-primary">{nebula.size} ly</div>
            </div>
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Distance</div>
              <div className="text-text-primary">{nebula.distance.toLocaleString()} ly</div>
            </div>
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Constellation</div>
              <div className="text-text-primary">{nebula.constellation}</div>
            </div>
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Best Season</div>
              <div className="text-text-primary">{nebula.bestViewingSeason}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function VisualBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-0.5">
        <span className="text-[9px] text-text-muted">{label}</span>
        <span className="text-[9px] text-text-muted">{Math.round(value * 100)}%</span>
      </div>
      <div className="h-1 bg-surface-secondary rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value * 100}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

export { NebulaInfoPanel };
