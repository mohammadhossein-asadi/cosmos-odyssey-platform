"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const concepts = [
  {
    title: "Event Horizon",
    icon: "⚫",
    description: "The boundary around a black hole beyond which nothing can escape. It's not a physical surface but a point of no return.",
    formula: "R_s = 2GM/c²",
    color: "#000000",
  },
  {
    title: "Schwarzschild Radius",
    icon: "📏",
    description: "The radius of the event horizon for a non-rotating black hole. Named after Karl Schwarzschild.",
    formula: "R_s = 2GM/c² ≈ 3 km × (M/M☉)",
    color: "#4a90d9",
  },
  {
    title: "Hawking Radiation",
    icon: "🌡️",
    description: "Thermal radiation predicted by Stephen Hawking. Black holes slowly evaporate over immense timescales.",
    formula: "T = ℏc³/(8πGMk_B)",
    color: "#ffd93d",
  },
  {
    title: "Spaghettification",
    icon: "🍝",
    description: "The tidal stretching of objects falling into a black hole. The difference in gravitational pull across an object tears it apart.",
    formula: "F_tidal ∝ M/r³",
    color: "#ff6b8a",
  },
  {
    title: "Time Dilation",
    icon: "⏱️",
    description: "Time passes slower near a massive object. At the event horizon, time effectively stops from an outside perspective.",
    formula: "t' = t√(1 - R_s/r)",
    color: "#00d4aa",
  },
  {
    title: "Accretion Disk",
    icon: "💫",
    description: "A disk of superheated matter spiraling into a black hole. Friction heats the gas to millions of degrees, emitting X-rays.",
    formula: "T ∝ M^(-1/4) × (r)^(-3/4)",
    color: "#ff9500",
  },
];

function BlackHolePhysics() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>📚</span> Black Hole Physics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {concepts.map((concept) => (
            <div key={concept.title} className="p-3 bg-surface-glass rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">{concept.icon}</span>
                <h4 className="text-xs font-semibold text-text-primary">{concept.title}</h4>
              </div>
              <p className="text-[10px] text-text-secondary mb-2">{concept.description}</p>
              <div className="px-2 py-1 bg-surface-secondary rounded text-[10px] font-mono text-plasma-300">
                {concept.formula}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { BlackHolePhysics };
