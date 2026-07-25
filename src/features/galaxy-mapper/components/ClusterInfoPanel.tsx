"use client";

import { galaxyClusters } from "../data/clusters";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/formatters";

interface ClusterInfoPanelProps {
  clusterId: string;
  onClose: () => void;
}

function ClusterInfoPanel({ clusterId, onClose }: ClusterInfoPanelProps) {
  const cluster = galaxyClusters.find((c) => c.id === clusterId);
  if (!cluster) return null;

  return (
    <Card variant="glass" className="w-full max-w-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">
              {cluster.name}
            </h2>
            <Badge variant="cosmic" size="sm">{cluster.type}</Badge>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-3">{cluster.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <InfoItem label="Distance" value={formatDistance(cluster.distance * 3.26)} />
          <InfoItem label="Radius" value={`${cluster.radius} Mly`} />
          <InfoItem label="Galaxies" value={`${cluster.galaxies.length || "Many"}`} />
          <InfoItem label="Type" value={cluster.type} />
        </div>

        {cluster.galaxies.length > 0 && (
          <div>
            <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Notable Galaxies</div>
            <div className="flex flex-wrap gap-1">
              {cluster.galaxies.slice(0, 5).map((g) => (
                <span key={g} className="text-[10px] px-1.5 py-0.5 rounded bg-surface-glass text-text-secondary">{g}</span>
              ))}
            </div>
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

export { ClusterInfoPanel };
