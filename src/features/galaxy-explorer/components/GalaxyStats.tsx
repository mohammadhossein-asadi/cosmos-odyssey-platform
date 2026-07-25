"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const stats = [
  { label: "Milky Way", type: "Barred Spiral", diameter: "100,000 ly", stars: "200-400 billion", age: "13.61 billion years", color: "#e8d5b7" },
  { label: "Andromeda", type: "Spiral", diameter: "220,000 ly", stars: "~1 trillion", age: "10.01 billion years", color: "#b8a0e0" },
  { label: "Triangulum", type: "Spiral", diameter: "60,000 ly", stars: "~40 billion", age: "12 billion years", color: "#a299f3" },
  { label: "Sombrero", type: "Lenticular", diameter: "50,000 ly", stars: "~100 billion", age: "13.25 billion years", color: "#e4c46e" },
];

function GalaxyStats() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>📊</span> Galaxy Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 p-2 bg-surface-glass rounded-lg">
              <div className="w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: stat.color, boxShadow: `0 0 10px ${stat.color}40` }} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-primary">{stat.label}</span>
                  <span className="text-[10px] text-text-muted">{stat.type}</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-text-muted">
                  <span>{stat.diameter}</span>
                  <span>•</span>
                  <span>{stat.stars}</span>
                  <span>•</span>
                  <span>{stat.age}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { GalaxyStats };
