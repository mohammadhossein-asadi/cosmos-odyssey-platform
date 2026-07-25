"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const stars = [
  { name: "Sun", temperature: 5778, luminosity: 1, radius: 1, mass: 1, color: "#ffd93d" },
  { name: "Sirius", temperature: 9940, luminosity: 25.4, radius: 1.71, mass: 2.06, color: "#aaccff" },
  { name: "Betelgeuse", temperature: 3500, luminosity: 126000, radius: 887, mass: 11.6, color: "#ff6347" },
  { name: "Rigel", temperature: 12100, luminosity: 120000, radius: 78.9, mass: 21, color: "#aaccff" },
  { name: "Vega", temperature: 9602, luminosity: 40.12, radius: 2.36, mass: 2.14, color: "#aaccff" },
  { name: "Arcturus", temperature: 4286, luminosity: 170, radius: 25.4, mass: 1.08, color: "#ffa500" },
];

function StarComparison() {
  const [star1, setStar1] = useState(0);
  const [star2, setStar2] = useState(1);

  const s1 = stars[star1];
  const s2 = stars[star2];

  const maxTemp = Math.max(s1.temperature, s2.temperature);
  const maxLum = Math.max(Math.log10(s1.luminosity + 1), Math.log10(s2.luminosity + 1));
  const maxRadius = Math.max(s1.radius, s2.radius);
  const maxMass = Math.max(s1.mass, s2.mass);

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>⚖️</span> Star Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <select
            value={star1}
            onChange={(e) => setStar1(Number(e.target.value))}
            className="flex-1 h-8 px-2 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-xs"
          >
            {stars.map((s, i) => (
              <option key={i} value={i}>{s.name}</option>
            ))}
          </select>
          <span className="text-text-muted text-xs">vs</span>
          <select
            value={star2}
            onChange={(e) => setStar2(Number(e.target.value))}
            className="flex-1 h-8 px-2 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-xs"
          >
            {stars.map((s, i) => (
              <option key={i} value={i}>{s.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <ComparisonBar label="Temperature" value1={s1.temperature} value2={s2.temperature} max={maxTemp} color1={s1.color} color2={s2.color} unit="K" />
          <ComparisonBar label="Luminosity" value1={Math.log10(s1.luminosity + 1)} value2={Math.log10(s2.luminosity + 1)} max={maxLum} color1={s1.color} color2={s2.color} unit="L☉ (log)" />
          <ComparisonBar label="Radius" value1={s1.radius} value2={s2.radius} max={maxRadius} color1={s1.color} color2={s2.color} unit="R☉" />
          <ComparisonBar label="Mass" value1={s1.mass} value2={s2.mass} max={maxMass} color1={s1.color} color2={s2.color} unit="M☉" />
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
          <div className="h-full rounded-full" style={{ width: `${Math.min(100, percent1)}%`, backgroundColor: color1 }} />
        </div>
        <div className="flex-1 h-1.5 bg-surface-secondary rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${Math.min(100, percent2)}%`, backgroundColor: color2 }} />
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
