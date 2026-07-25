"use client";

import { useState } from "react";
import { stars } from "../data/stars";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function StarComparison() {
  const [star1, setStar1] = useState("sun");
  const [star2, setStar2] = useState("sirius");

  const s1 = stars.find((s) => s.id === star1);
  const s2 = stars.find((s) => s.id === star2);

  if (!s1 || !s2) return null;

  const maxRadius = Math.max(s1.radius, s2.radius);
  const maxLuminosity = Math.max(s1.luminosity, s2.luminosity);
  const maxMass = Math.max(s1.mass, s2.mass);

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>⚖️</span> Star Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <select
            value={star1}
            onChange={(e) => setStar1(e.target.value)}
            className="flex-1 h-8 px-2 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-xs"
          >
            {stars.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          <span className="text-text-muted text-xs">vs</span>
          <select
            value={star2}
            onChange={(e) => setStar2(e.target.value)}
            className="flex-1 h-8 px-2 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-xs"
          >
            {stars.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <ComparisonBar label="Radius" value1={s1.radius} value2={s2.radius} max={maxRadius} color1={s1.color} color2={s2.color} unit="R☉" />
          <ComparisonBar label="Luminosity" value1={s1.luminosity} value2={s2.luminosity} max={maxLuminosity} color1={s1.color} color2={s2.color} unit="L☉" />
          <ComparisonBar label="Mass" value1={s1.mass} value2={s2.mass} max={maxMass} color1={s1.color} color2={s2.color} unit="M☉" />
          <ComparisonBar label="Temperature" value1={s1.temperature} value2={s2.temperature} max={Math.max(s1.temperature, s2.temperature)} color1={s1.color} color2={s2.color} unit="K" />
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          <div>
            <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: s1.color }} />
            <div className="text-[10px] text-text-primary">{s1.name}</div>
          </div>
          <div className="text-[10px] text-text-muted self-center">Metric</div>
          <div>
            <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: s2.color }} />
            <div className="text-[10px] text-text-primary">{s2.name}</div>
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

export { StarComparison };
