"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const missions = [
  { name: "Voyager 1", destination: "Interstellar", year: 1977, status: "active", distance: "24.1 billion km" },
  { name: "Voyager 2", destination: "Interstellar", year: 1977, status: "active", distance: "20.5 billion km" },
  { name: "New Horizons", destination: "Pluto/Kuiper Belt", year: 2006, status: "active", distance: "8.4 billion km" },
  { name: "Juno", destination: "Jupiter", year: 2011, status: "active", distance: "780 million km" },
  { name: "Cassini", destination: "Saturn", year: 1997, status: "completed", distance: "Final mission" },
  { name: "Perseverance", destination: "Mars", year: 2020, status: "active", distance: "225 million km" },
];

function MissionTracker() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>🚀</span> Active Missions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {missions.map((mission) => (
            <div key={mission.name} className="flex items-center justify-between p-2 bg-surface-glass rounded-lg">
              <div>
                <div className="text-xs font-semibold text-text-primary">{mission.name}</div>
                <div className="text-[10px] text-text-muted">{mission.destination} • {mission.year}</div>
              </div>
              <div className="text-right">
                <Badge variant={mission.status === "active" ? "success" : "default"} size="sm">
                  {mission.status}
                </Badge>
                <div className="text-[9px] text-text-muted mt-0.5">{mission.distance}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { MissionTracker };
