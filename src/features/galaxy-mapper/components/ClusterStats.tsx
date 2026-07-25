"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { galaxyClusters } from "../data/clusters";

function ClusterStats() {
  const stats = [
    { label: "Local Group", value: "54", color: "#4a90d9" },
    { label: "Virgo Cluster", value: "1,348", color: "#ff6b8a" },
    { label: "Coma Cluster", value: "1,000+", color: "#e4c46e" },
    { label: "Laniakea", value: "1M+", color: "#ffd93d" },
  ];

  return (
    <Card variant="glass">
      <CardContent className="p-3">
        <h3 className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Cluster Statistics</h3>
        <div className="grid grid-cols-2 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-2 bg-surface-glass rounded">
              <div className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-[9px] text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { ClusterStats };
