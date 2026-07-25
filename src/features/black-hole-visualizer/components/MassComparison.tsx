"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const comparisons = [
  { name: "Earth", mass: "1 M⊕", bhEquivalent: "N/A", visual: "🌍" },
  { name: "Jupiter", mass: "318 M⊕", bhEquivalent: "0.003 M☉", visual: "🪐" },
  { name: "Sun", mass: "1 M☉", bhEquivalent: "1 M☉", visual: "☀️" },
  { name: "Stellar BH", mass: "10 M☉", bhEquivalent: "10 M☉", visual: "⚫" },
  { name: "Sgr A*", mass: "4M M☉", bhEquivalent: "4,000,000 M☉", visual: "🕳️" },
  { name: "M87*", mass: "6.5B M☉", bhEquivalent: "6,500,000,000 M☉", visual: "🌀" },
];

function MassComparison() {
  const maxMass = 6.5e9;

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>⚖️</span> Mass Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {comparisons.map((item) => {
            const massNum = item.name === "Earth" ? 0.000003 :
              item.name === "Jupiter" ? 0.001 :
              item.name === "Sun" ? 1 :
              item.name === "Stellar BH" ? 10 :
              item.name === "Sgr A*" ? 4000000 : 6500000000;
            const width = Math.max(1, (Math.log10(massNum + 1) / Math.log10(maxMass)) * 100);

            return (
              <div key={item.name} className="flex items-center gap-2">
                <span className="text-sm w-6">{item.visual}</span>
                <div className="w-20">
                  <div className="text-[10px] text-text-primary">{item.name}</div>
                  <div className="text-[8px] text-text-muted">{item.mass}</div>
                </div>
                <div className="flex-1 h-2 bg-surface-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-plasma-500 to-nebula-500 rounded-full" style={{ width: `${width}%` }} />
                </div>
                <div className="w-24 text-right">
                  <div className="text-[9px] text-text-muted">{item.bhEquivalent}</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export { MassComparison };
