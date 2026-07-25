"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const nebulae = [
  { name: "Orion Nebula", type: "Emission", distance: "1,344 ly", color: "#ff6b8a", description: "Visible to the naked eye, a stellar nursery." },
  { name: "Eagle Nebula", type: "Emission", distance: "7,000 ly", color: "#4a90d9", description: "Home to the Pillars of Creation." },
  { name: "Crab Nebula", type: "Supernova Remnant", distance: "6,523 ly", color: "#ff9500", description: "Remnant of a supernova from 1054 CE." },
  { name: "Ring Nebula", type: "Planetary", distance: "2,283 ly", color: "#6c5ce7", description: "A dying star's final exhalation." },
  { name: "Helix Nebula", type: "Planetary", distance: "655 ly", color: "#00d4aa", description: "The Eye of God nebula." },
  { name: "Horsehead Nebula", type: "Dark", distance: "1,375 ly", color: "#1a0a00", description: "Iconic dark silhouette against glowing gas." },
];

function NebulaGallery() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>🖼️</span> Nebula Gallery
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {nebulae.map((nebula) => (
            <div key={nebula.name} className="p-2 rounded-lg" style={{ background: `radial-gradient(circle, ${nebula.color}20 0%, transparent 70%)` }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: nebula.color }} />
                <span className="text-[10px] font-semibold text-text-primary">{nebula.name}</span>
              </div>
              <p className="text-[9px] text-text-secondary line-clamp-2">{nebula.description}</p>
              <div className="text-[8px] text-text-muted mt-1">{nebula.distance} • {nebula.type}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { NebulaGallery };
