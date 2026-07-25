"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const galaxyTypes = [
  { type: "Spiral", description: "Flat, rotating disk with spiral arms. Examples: Milky Way, Andromeda.", color: "#aaccff", icon: "🌀" },
  { type: "Elliptical", description: "Smooth, featureless light distribution. Can be massive.", color: "#ffa500", icon: "🟠" },
  { type: "Irregular", description: "No defined shape. Often result of galactic collisions.", color: "#ff6b8a", icon: "☁️" },
  { type: "Lenticular", description: "Intermediate between spiral and elliptical. Has a disk but no arms.", color: "#e4c46e", icon: "🔘" },
];

function GalaxyTypes() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>📚</span> Galaxy Types
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {galaxyTypes.map((type) => (
            <div key={type.type} className="p-3 rounded-lg" style={{ backgroundColor: `${type.color}10` }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{type.icon}</span>
                <span className="text-xs font-semibold text-text-primary">{type.type}</span>
              </div>
              <p className="text-[10px] text-text-secondary">{type.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { GalaxyTypes };
