"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { DetectionMethod } from "../types";

const methods: { method: DetectionMethod; name: string; description: string; color: string; icon: string }[] = [
  { method: "transit", name: "Transit", description: "Detects dimming when a planet crosses in front of its star.", color: "#ffd93d", icon: "🌑" },
  { method: "radial-velocity", name: "Radial Velocity", description: "Measures star wobble caused by a planet's gravity.", color: "#4a90d9", icon: "〰️" },
  { method: "direct-imaging", name: "Direct Imaging", description: "Takes pictures of the planet directly.", color: "#ff6b8a", icon: "📸" },
  { method: "microlensing", name: "Microlensing", description: "Uses gravitational lensing to detect planets.", color: "#00d4aa", icon: "🔍" },
  { method: "astrometry", name: "Astrometry", description: "Measures precise star position changes.", color: "#6c5ce7", icon: "📐" },
  { method: "transit-timing", name: "Transit Timing", description: "Detects planets through timing variations.", color: "#e4c46e", icon: "⏱️" },
];

function DetectionMethodsGuide() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {methods.map((m) => (
        <Card key={m.method} variant="glass">
          <CardContent className="p-3 text-center">
            <div className="text-2xl mb-2">{m.icon}</div>
            <h3 className="text-xs font-semibold text-text-primary font-[family-name:var(--font-display)] mb-1">
              {m.name}
            </h3>
            <p className="text-[9px] text-text-secondary">{m.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export { DetectionMethodsGuide };
