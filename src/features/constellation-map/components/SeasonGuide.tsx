"use client";

import { constellations } from "../data/constellations";
import { Season } from "../types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function SeasonGuide() {
  const seasons: { id: Season; label: string; icon: string; description: string }[] = [
    { id: "spring", label: "Spring", icon: "🌸", description: "Leo and Virgo dominate the evening sky" },
    { id: "summer", label: "Summer", icon: "☀️", description: "The Summer Triangle rises high" },
    { id: "autumn", label: "Autumn", icon: "🍂", description: "Andromeda and Pegasus appear" },
    { id: "winter", label: "Winter", icon: "❄️", description: "Orion and the winter hexagon" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {seasons.map((season) => {
        const seasonConstellations = constellations.filter((c) => c.season === season.id);
        return (
          <Card key={season.id} variant="glass">
            <CardContent className="p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{season.icon}</span>
                <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                  {season.label}
                </h3>
              </div>
              <p className="text-[10px] text-text-secondary mb-2">{season.description}</p>
              <div className="flex flex-wrap gap-1">
                {seasonConstellations.map((c) => (
                  <span key={c.id} className="text-[9px] px-1.5 py-0.5 rounded bg-surface-glass text-text-muted">
                    {c.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export { SeasonGuide };
