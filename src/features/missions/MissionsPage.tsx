"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { missions } from "@/data/missions";
import { Badge } from "@/components/ui/Badge";

function MissionsPage() {
  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-aurora-400 to-plasma-300 bg-clip-text text-transparent">
          Space Missions
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Explore the history of human space exploration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {missions.map((mission) => (
          <div key={mission.id} className="bg-surface-primary rounded-xl border border-border-default p-6 hover:border-plasma-500/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-display)]">
                {mission.name}
              </h3>
              <Badge variant={mission.status === "active" ? "success" : mission.status === "completed" ? "primary" : "default"}>
                {mission.status}
              </Badge>
            </div>
            <p className="text-sm text-text-secondary mb-3">{mission.description}</p>
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <span>{mission.agency}</span>
              <span>•</span>
              <span>{mission.destination}</span>
              <span>•</span>
              <span>{mission.startDate}</span>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export { MissionsPage };
