"use client";

import { Card, CardContent } from "@/components/ui/Card";

const seasonalInfo = [
  { season: "Winter", icon: "❄️", stars: "Sirius, Betelgeuse, Rigel, Aldebaran, Capella", constellations: "Orion, Taurus, Gemini, Canis Major", color: "#aaccff" },
  { season: "Spring", icon: "🌸", stars: "Arcturus, Spica, Regulus, Denebola", constellations: "Leo, Virgo, Boötes, Ursa Major", color: "#ffd93d" },
  { season: "Summer", icon: "☀️", stars: "Vega, Altair, Deneb, Antares", constellations: "Cygnus, Lyra, Aquila, Scorpius", color: "#ff6b8a" },
  { season: "Autumn", icon: "🍂", stars: "Alpheratz, Schedar, Mirach, Enif", constellations: "Andromeda, Cassiopeia, Pegasus", color: "#ffa500" },
];

function SeasonalGuide() {
  return (
    <Card variant="glass">
      <CardContent className="p-3">
        <h3 className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Seasonal Sky Guide</h3>
        <div className="space-y-2">
          {seasonalInfo.map((s) => (
            <div key={s.season} className="p-2 bg-surface-glass rounded">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm">{s.icon}</span>
                <span className="text-[10px] font-semibold" style={{ color: s.color }}>{s.season}</span>
              </div>
              <div className="text-[9px] text-text-secondary">Stars: {s.stars}</div>
              <div className="text-[9px] text-text-muted">Constellations: {s.constellations}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { SeasonalGuide };
