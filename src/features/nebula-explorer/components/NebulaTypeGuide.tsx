"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { NebulaType } from "../types";

const nebulaTypes: { type: NebulaType; name: string; description: string; color: string; example: string }[] = [
  {
    type: "emission",
    name: "Emission Nebulae",
    description: "Clouds of ionized gas that emit their own light. Powered by ultraviolet radiation from hot young stars.",
    color: "#ff6b8a",
    example: "Orion Nebula",
  },
  {
    type: "reflection",
    name: "Reflection Nebulae",
    description: "Clouds that reflect light from nearby stars. The dust scatters blue light more effectively.",
    color: "#4169e1",
    example: "Pleiades Nebulosity",
  },
  {
    type: "planetary",
    name: "Planetary Nebulae",
    description: "Shells of gas expelled by dying stars. Despite the name, unrelated to planets.",
    color: "#6c5ce7",
    example: "Ring Nebula",
  },
  {
    type: "supernova",
    name: "Supernova Remnants",
    description: "Expanding debris from stellar explosions. Rich in heavy elements forged in the explosion.",
    color: "#ff9500",
    example: "Crab Nebula",
  },
  {
    type: "dark",
    name: "Dark Nebulae",
    description: "Dense clouds that block light from behind them. Sites of future star formation.",
    color: "#1a0a00",
    example: "Horsehead Nebula",
  },
];

function NebulaTypeGuide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {nebulaTypes.map((nt) => (
        <Card key={nt.type} variant="glass">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${nt.color}80, ${nt.color}40)`,
                  border: `1px solid ${nt.color}60`,
                }}
              />
              <h3 className="text-xs font-semibold text-text-primary font-[family-name:var(--font-display)]">
                {nt.name}
              </h3>
            </div>
            <p className="text-[11px] text-text-secondary mb-2">{nt.description}</p>
            <div className="text-[10px] text-text-muted">Example: {nt.example}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export { NebulaTypeGuide };
