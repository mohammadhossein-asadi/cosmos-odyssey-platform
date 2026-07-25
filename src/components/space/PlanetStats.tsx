"use client";

import { Planet } from "@/types/celestial";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { formatDistance } from "@/lib/formatters";

interface PlanetStatsProps {
  planet: Planet;
}

function PlanetStats({ planet }: PlanetStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <StatCard label="Distance from Sun" value={planet.distanceFromSun} unit="km" />
      <StatCard label="Diameter" value={planet.diameter} unit="km" />
      <StatCard label="Gravity" value={planet.gravity} unit="m/s²" />
      <StatCard label="Day Length" value={planet.dayLength} unit="hours" />
      <StatCard label="Year Length" value={planet.yearLength} unit="days" />
      <StatCard label="Average Temperature" value={planet.temperature.average} unit="°C" />
    </div>
  );
}

function StatCard({ label, value, unit }: { label: string; value: number; unit: string }) {
  return (
    <div className="bg-surface-glass rounded-lg p-4 border border-border-default">
      <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{label}</div>
      <div className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">
        <AnimatedCounter target={value} />
        <span className="text-xs text-text-muted ml-1">{unit}</span>
      </div>
    </div>
  );
}

export { PlanetStats };
