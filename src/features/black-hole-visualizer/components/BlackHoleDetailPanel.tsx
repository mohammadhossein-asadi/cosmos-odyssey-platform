"use client";

import { BlackHoleData } from "../types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface BlackHoleDetailPanelProps {
  blackHole: BlackHoleData;
  onClose: () => void;
}

function BlackHoleDetailPanel({ blackHole, onClose }: BlackHoleDetailPanelProps) {
  return (
    <Card variant="glass" className="w-full max-w-md">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">
              {blackHole.name}
            </h2>
            <div className="flex gap-1 mt-1">
              <Badge variant="cosmic" size="sm">{blackHole.type}</Badge>
              <Badge variant={blackHole.state === "quasar" ? "warning" : "primary"} size="sm">{blackHole.state}</Badge>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-4">{blackHole.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <InfoItem label="Mass" value={`${blackHole.mass.toLocaleString()} ${blackHole.massUnit}`} />
          <InfoItem label="Distance" value={`${blackHole.distance.toLocaleString()} ly`} />
          <InfoItem label="Spin" value={`${(blackHole.spin * 100).toFixed(0)}%`} />
          <InfoItem label="Temperature" value={`${blackHole.temperature.toExponential(1)} K`} />
          <InfoItem label="Constellation" value={blackHole.constellation || "N/A"} />
          <InfoItem label="Discovered" value={`${blackHole.discoveryYear}`} />
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Scientific Details</h4>
          <div className="space-y-1.5">
            <DetailRow label="Event Horizon" value={blackHole.scientificDetails.eventHorizonRadius} />
            <DetailRow label="Schwarzschild Radius" value={blackHole.scientificDetails.schwarzschildRadius} />
            <DetailRow label="Hawking Temperature" value={blackHole.scientificDetails.hawkingTemperature} />
            <DetailRow label="Time Dilation" value={blackHole.scientificDetails.timeDilation} />
            <DetailRow label="Tidal Force" value={blackHole.scientificDetails.tidalForce} />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h4>
          <ul className="space-y-1.5">
            {blackHole.funFacts.map((fact, i) => (
              <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                <span className="text-plasma-400 mt-0.5 shrink-0">★</span>
                {fact}
              </li>
            ))}
          </ul>
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

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-[10px]">
      <span className="text-text-muted">{label}</span>
      <span className="text-text-secondary text-right">{value}</span>
    </div>
  );
}

export { BlackHoleDetailPanel };
