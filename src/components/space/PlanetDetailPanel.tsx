"use client";

import { useState } from "react";
import { planets } from "@/data/planets";
import { formatDistance, formatTemperature } from "@/lib/formatters";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PlanetStats } from "./PlanetStats";
import { FactCard } from "./FactCard";

interface PlanetDetailPanelProps {
  planetId: string;
  onClose?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

function PlanetDetailPanel({
  planetId,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}: PlanetDetailPanelProps) {
  const planet = planets.find((p) => p.id === planetId);
  const [activeTab, setActiveTab] = useState<"overview" | "physical" | "moons" | "missions">("overview");

  if (!planet) return null;

  const tabs = [
    { id: "overview" as const, label: "Overview" },
    { id: "physical" as const, label: "Physical" },
    { id: "moons" as const, label: `Moons (${planet.moons.length})` },
    { id: "missions" as const, label: "Missions" },
  ];

  return (
    <div className="w-full max-w-2xl">
      <Card variant="glass" className="overflow-hidden">
        <div className="relative">
          <div
            className="h-32 w-full opacity-30"
            style={{
              background: `linear-gradient(135deg, ${planet.color}40 0%, transparent 60%), radial-gradient(circle at 70% 30%, ${planet.color}20, transparent 70%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center px-6">
            <div className="flex items-center gap-4 w-full">
              <div
                className="w-16 h-16 rounded-full shrink-0"
                style={{
                  backgroundColor: planet.color,
                  boxShadow: `0 0 30px ${planet.color}60`,
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-display)]">
                    {planet.name}
                  </h2>
                  <Badge variant="cosmic" size="sm">#{planet.orderFromSun}</Badge>
                </div>
                <p className="text-sm text-text-secondary truncate">{planet.description}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {hasPrev && (
                  <button onClick={onPrev} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted" aria-label="Previous planet">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                {hasNext && (
                  <button onClick={onNext} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted" aria-label="Next planet">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
                <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-glass text-text-muted" aria-label="Close">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 border-b border-border-default">
          <div className="flex gap-1 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-plasma-500 text-plasma-300"
                    : "border-transparent text-text-muted hover:text-text-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <CardContent className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <StatCard label="Distance from Sun" value={formatDistance(planet.distanceFromSun)} icon="☀️" />
                <StatCard label="Diameter" value={`${planet.diameter.toLocaleString()} km`} icon="📏" />
                <StatCard label="Mass" value={planet.mass} icon="⚖️" />
                <StatCard label="Gravity" value={`${planet.gravity} m/s²`} icon="🌍" />
                <StatCard label="Temperature" value={formatTemperature(planet.temperature.average)} icon="🌡️" />
                <StatCard label="Day Length" value={`${planet.dayLength}h`} icon="🕐" />
              </div>

              <div className="bg-surface-glass rounded-lg p-4">
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Composition</h4>
                <div className="flex flex-wrap gap-1.5">
                  {planet.composition.map((comp, i) => (
                    <Badge key={i} variant="default" size="sm">{comp}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-surface-glass rounded-lg p-4">
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Atmosphere</h4>
                <div className="flex flex-wrap gap-1.5">
                  {planet.atmosphere.map((atm, i) => (
                    <Badge key={i} variant="primary" size="sm">{atm}</Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "physical" && (
            <PlanetStats planet={planet} />
          )}

          {activeTab === "moons" && (
            <div className="space-y-3">
              {planet.moons.length === 0 ? (
                <p className="text-sm text-text-muted text-center py-8">No moons</p>
              ) : (
                planet.moons.map((moon) => (
                  <div key={moon.id} className="bg-surface-glass rounded-lg p-4 flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full shrink-0"
                      style={{ backgroundColor: moon.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-text-primary">{moon.name}</h4>
                      <p className="text-xs text-text-secondary">{moon.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-text-muted">Diameter</div>
                      <div className="text-sm font-medium text-text-primary">{moon.diameter.toLocaleString()} km</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "missions" && (
            <div className="space-y-3">
              {planet.explorationMissions.map((mission, i) => (
                <div key={i} className="bg-surface-glass rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-plasma-500/20 flex items-center justify-center text-plasma-400 text-sm">
                    🚀
                  </div>
                  <span className="text-sm text-text-primary">{mission}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <FactCard facts={planet.funFacts} />
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-surface-glass rounded-lg p-3">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-xs">{icon}</span>
        <span className="text-[10px] text-text-muted uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-sm font-semibold text-text-primary">{value}</div>
    </div>
  );
}

export { PlanetDetailPanel };
