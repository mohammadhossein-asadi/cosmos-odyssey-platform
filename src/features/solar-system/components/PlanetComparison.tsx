"use client";

import { useState } from "react";
import { planets } from "@/data/planets";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function PlanetComparison() {
  const [planet1, setPlanet1] = useState("earth");
  const [planet2, setPlanet2] = useState("mars");

  const p1 = planets.find((p) => p.id === planet1);
  const p2 = planets.find((p) => p.id === planet2);

  if (!p1 || !p2) return null;

  const maxDiameter = Math.max(p1.diameter, p2.diameter);
  const maxGravity = Math.max(p1.gravity, p2.gravity);
  const maxDistance = Math.max(p1.distanceFromSun, p2.distanceFromSun);

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>⚖️</span> Planet Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <select
            value={planet1}
            onChange={(e) => setPlanet1(e.target.value)}
            className="flex-1 h-8 px-2 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-xs"
          >
            {planets.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <span className="text-text-muted text-xs">vs</span>
          <select
            value={planet2}
            onChange={(e) => setPlanet2(e.target.value)}
            className="flex-1 h-8 px-2 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-xs"
          >
            {planets.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <ComparisonBar label="Diameter" value1={p1.diameter} value2={p2.diameter} max={maxDiameter} color1={p1.color} color2={p2.color} unit="km" />
          <ComparisonBar label="Gravity" value1={p1.gravity} value2={p2.gravity} max={maxGravity} color1={p1.color} color2={p2.color} unit="m/s²" />
          <ComparisonBar label="Distance" value1={p1.distanceFromSun} value2={p2.distanceFromSun} max={maxDistance} color1={p1.color} color2={p2.color} unit="km" />
          <ComparisonBar label="Temperature" value1={Math.abs(p1.temperature.average)} value2={Math.abs(p2.temperature.average)} max={Math.max(Math.abs(p1.temperature.average), Math.abs(p2.temperature.average))} color1={p1.color} color2={p2.color} unit="°C" />
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          <div>
            <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: p1.color }} />
            <div className="text-[10px] text-text-primary">{p1.name}</div>
          </div>
          <div className="text-[10px] text-text-muted self-center">Metric</div>
          <div>
            <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: p2.color }} />
            <div className="text-[10px] text-text-primary">{p2.name}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ComparisonBar({ label, value1, value2, max, color1, color2, unit }: {
  label: string; value1: number; value2: number; max: number; color1: string; color2: string; unit: string;
}) {
  const percent1 = max > 0 ? (value1 / max) * 100 : 0;
  const percent2 = max > 0 ? (value2 / max) * 100 : 0;

  return (
    <div>
      <div className="flex justify-between text-[10px] text-text-muted mb-1">
        <span>{label}</span>
        <span>{unit}</span>
      </div>
      <div className="flex gap-1 items-center">
        <div className="flex-1 h-1.5 bg-surface-secondary rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${percent1}%`, backgroundColor: color1 }} />
        </div>
        <div className="flex-1 h-1.5 bg-surface-secondary rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${percent2}%`, backgroundColor: color2 }} />
        </div>
      </div>
      <div className="flex justify-between text-[9px] text-text-secondary mt-0.5">
        <span>{value1.toLocaleString()}</span>
        <span>{value2.toLocaleString()}</span>
      </div>
    </div>
  );
}

export { PlanetComparison };
