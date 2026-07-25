"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const messengers = [
  { name: "Electromagnetic", icon: "📡", description: "Light, radio, X-rays, gamma rays from accretion disks and jets.", example: "M87* image by EHT", color: "#ffd93d" },
  { name: "Gravitational", icon: "🌊", description: "Ripples in spacetime from merging black holes.", example: "LIGO detection GW150914", color: "#6c5ce7" },
  { name: "Neutrinos", icon: "⚛️", description: "Nearly massless particles that pass through matter.", example: "SNe 1987A neutrinos", color: "#00d4aa" },
  { name: "Cosmic Rays", icon: "⚡", description: "High-energy particles accelerated near black holes.", example: "Ultra-high-energy cosmic rays", color: "#ff6b8a" },
];

function MultiMessengerGuide() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>🔭</span> Multi-Messenger Astronomy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[10px] text-text-secondary mb-3">
          Scientists study black holes using multiple types of signals, each revealing different aspects.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {messengers.map((m) => (
            <div key={m.name} className="p-2 rounded-lg bg-surface-glass">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm">{m.icon}</span>
                <span className="text-[10px] font-semibold text-text-primary">{m.name}</span>
              </div>
              <p className="text-[9px] text-text-secondary mb-1">{m.description}</p>
              <p className="text-[8px] text-text-muted italic">{m.example}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { MultiMessengerGuide };
