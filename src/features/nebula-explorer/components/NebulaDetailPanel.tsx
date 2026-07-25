"use client";

import { NebulaData } from "../types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/formatters";

interface NebulaDetailPanelProps {
  nebula: NebulaData;
  onClose: () => void;
}

function NebulaDetailPanel({ nebula, onClose }: NebulaDetailPanelProps) {
  return (
    <Card variant="glass" className="w-full max-w-md">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-xl"
              style={{
                background: `radial-gradient(circle, ${nebula.color}80 0%, ${nebula.color}30 70%)`,
                border: `2px solid ${nebula.color}50`,
              }}
            />
            <div>
              <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">
                {nebula.name}
              </h2>
              <p className="text-[10px] text-text-muted">{nebula.designation}</p>
              <div className="flex gap-1 mt-1">
                <Badge variant="cosmic" size="sm">{nebula.type}</Badge>
                <Badge variant="primary" size="sm">{nebula.category}</Badge>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-4">{nebula.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <InfoItem label="Distance" value={formatDistance(nebula.distance * 3.26)} />
          <InfoItem label="Diameter" value={`${nebula.diameter} light-years`} />
          <InfoItem label="Constellation" value={nebula.constellation} />
          <InfoItem label="Magnitude" value={nebula.apparentMagnitude?.toString() || "N/A"} />
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Scientific Details</h4>
          <div className="grid grid-cols-2 gap-2">
            <InfoItem label="Temperature" value={`${nebula.scientificDetails.temperature.toLocaleString()} K`} />
            <InfoItem label="Density" value={nebula.scientificDetails.density} />
          </div>
          <div className="mt-2">
            <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Composition</div>
            <div className="flex flex-wrap gap-1">
              {nebula.scientificDetails.composition.map((comp, i) => (
                <Badge key={i} variant="default" size="sm">{comp}</Badge>
              ))}
            </div>
          </div>
          {nebula.scientificDetails.ionizedElements.length > 0 && (
            <div className="mt-2">
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Ionized Elements</div>
              <div className="flex flex-wrap gap-1">
                {nebula.scientificDetails.ionizedElements.map((el, i) => (
                  <Badge key={i} variant="primary" size="sm">{el}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Associated Objects</h4>
          <div className="flex flex-wrap gap-1">
            {nebula.scientificDetails.associatedObjects.map((obj, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded bg-surface-glass text-text-secondary">{obj}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h4>
          <ul className="space-y-1.5">
            {nebula.funFacts.map((fact, i) => (
              <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                <span className="text-plasma-400 mt-0.5 shrink-0">★</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 pt-4 border-t border-border-default">
          <div className="flex items-center gap-2 text-[10px] text-text-muted">
            <span>Discovered: {nebula.discoveryYear || "Ancient"}</span>
            <span>•</span>
            <span>By: {nebula.discoveredBy}</span>
          </div>
        </div>
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

export { NebulaDetailPanel };
