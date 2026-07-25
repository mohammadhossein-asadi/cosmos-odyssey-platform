"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const evolutionStages = [
  { stage: "Protostar", description: "Cloud of gas collapsing under gravity", color: "#ff6b8a", icon: "☁️" },
  { stage: "Main Sequence", description: "Fusing hydrogen into helium", color: "#ffd93d", icon: "⭐" },
  { stage: "Red Giant", description: "Hydrogen exhausted, expanding", color: "#ff4500", icon: "🔴" },
  { stage: "Supergiant", description: "Massive stars reaching end of life", color: "#ff6347", icon: "💥" },
  { stage: "White Dwarf", description: "Small, dense remnant", color: "#e0e0ff", icon: "💎" },
  { stage: "Neutron Star", description: "Ultra-dense collapsed core", color: "#4169e1", icon: "🌀" },
  { stage: "Black Hole", description: "Gravity so strong nothing escapes", color: "#000000", icon: "🕳️" },
];

function StellarEvolutionGuide() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>🔄</span> Stellar Evolution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 overflow-x-auto pb-2">
          {evolutionStages.map((stage, i) => (
            <div key={stage.stage} className="flex items-center shrink-0">
              <div
                className="p-2 rounded-lg text-center min-w-[80px]"
                style={{
                  backgroundColor: `${stage.color}15`,
                  border: `1px solid ${stage.color}30`,
                }}
              >
                <div className="text-lg mb-1">{stage.icon}</div>
                <div className="text-[10px] font-semibold text-text-primary">{stage.stage}</div>
                <div className="text-[8px] text-text-muted mt-0.5">{stage.description}</div>
              </div>
              {i < evolutionStages.length - 1 && (
                <div className="text-text-muted px-1 shrink-0">→</div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { StellarEvolutionGuide };
