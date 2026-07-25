"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const constellations = [
  { id: "orion", name: "Orion", season: "Winter", stars: 7, brightestStar: "Rigel", mythology: "The Hunter in Greek mythology.", bestMonth: "January", color: "#aaccff" },
  { id: "ursa-major", name: "Ursa Major", season: "Spring", stars: 7, brightestStar: "Alioth", mythology: "The Great Bear, home of the Big Dipper.", bestMonth: "April", color: "#ffd93d" },
  { id: "cassiopeia", name: "Cassiopeia", season: "Autumn", stars: 5, brightestStar: "Schedar", mythology: "The vain queen in Greek mythology.", bestMonth: "November", color: "#ffa500" },
  { id: "leo", name: "Leo", season: "Spring", stars: 9, brightestStar: "Regulus", mythology: "The Nemean Lion slain by Heracles.", bestMonth: "March", color: "#ffd93d" },
  { id: "scorpius", name: "Scorpius", season: "Summer", stars: 15, brightestStar: "Antares", mythology: "The scorpion that killed Orion.", bestMonth: "July", color: "#ff4500" },
  { id: "cygnus", name: "Cygnus", season: "Summer", stars: 9, brightestStar: "Deneb", mythology: "The Swan in Greek mythology.", bestMonth: "September", color: "#aaccff" },
  { id: "gemini", name: "Gemini", season: "Winter", stars: 8, brightestStar: "Pollux", mythology: "The Twins Castor and Pollux.", bestMonth: "February", color: "#ffa500" },
  { id: "lyra", name: "Lyra", season: "Summer", stars: 5, brightestStar: "Vega", mythology: "The lyre of Orpheus.", bestMonth: "August", color: "#aaccff" },
  { id: "aquila", name: "Aquila", season: "Summer", stars: 6, brightestStar: "Altair", mythology: "The eagle that carried Zeus's thunderbolts.", bestMonth: "August", color: "#aaccff" },
  { id: "andromeda", name: "Andromeda", season: "Autumn", stars: 5, brightestStar: "Alpheratz", mythology: "The princess chained to a rock.", bestMonth: "October", color: "#aaccff" },
  { id: "pegasus", name: "Pegasus", season: "Autumn", stars: 4, brightestStar: "Enif", mythology: "The winged horse of Greek mythology.", bestMonth: "October", color: "#ffa500" },
  { id: "canis-major", name: "Canis Major", season: "Winter", stars: 8, brightestStar: "Sirius", mythology: "One of Orion's hunting dogs.", bestMonth: "January", color: "#aaccff" },
];

const seasons = ["all", "Winter", "Spring", "Summer", "Autumn"];

function StarChartPage() {
  const [season, setSeason] = useState("all");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = season === "all" ? constellations : constellations.filter((c) => c.season === season);
  const selectedConstellation = constellations.find((c) => c.id === selected);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-plasma-300 to-star-400 bg-clip-text text-transparent">
          Star Chart
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Interactive night sky map with constellations and stars
        </p>
      </div>

      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {seasons.map((s) => (
          <button
            key={s}
            onClick={() => setSeason(s)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize",
              season === s
                ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                : "bg-surface-glass text-text-muted border border-transparent"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((constellation) => (
          <Card
            key={constellation.id}
            variant="glass"
            className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
              selected === constellation.id ? "border-plasma-500/50" : ""
            }`}
            onClick={() => setSelected(constellation.id === selected ? null : constellation.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: `${constellation.color}30` }}>
                    <svg viewBox="0 0 32 32" className="w-full h-full">
                      <circle cx="8" cy="8" r="2" fill={constellation.color} />
                      <circle cx="24" cy="8" r="2" fill={constellation.color} />
                      <circle cx="16" cy="20" r="2" fill={constellation.color} />
                      <line x1="8" y1="8" x2="24" y2="8" stroke={constellation.color} strokeWidth="0.5" opacity="0.5" />
                      <line x1="8" y1="8" x2="16" y2="20" stroke={constellation.color} strokeWidth="0.5" opacity="0.5" />
                      <line x1="24" y1="8" x2="16" y2="20" stroke={constellation.color} strokeWidth="0.5" opacity="0.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                      {constellation.name}
                    </h3>
                    <Badge variant="cosmic" size="sm">{constellation.season}</Badge>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-text-secondary mb-2 line-clamp-2">{constellation.mythology}</p>
              <div className="flex items-center gap-2 text-[10px] text-text-muted">
                <span>⭐ {constellation.stars} stars</span>
                <span>•</span>
                <span>{constellation.bestMonth}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedConstellation && (
        <div className="mt-6">
          <Card variant="glass">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full" style={{ backgroundColor: `${selectedConstellation.color}30` }}>
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <circle cx="16" cy="16" r="4" fill={selectedConstellation.color} />
                    <circle cx="48" cy="16" r="4" fill={selectedConstellation.color} />
                    <circle cx="32" cy="48" r="4" fill={selectedConstellation.color} />
                    <line x1="16" y1="16" x2="48" y2="16" stroke={selectedConstellation.color} strokeWidth="1" opacity="0.5" />
                    <line x1="16" y1="16" x2="32" y2="48" stroke={selectedConstellation.color} strokeWidth="1" opacity="0.5" />
                    <line x1="48" y1="16" x2="32" y2="48" stroke={selectedConstellation.color} strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selectedConstellation.name}</h2>
                  <Badge variant="cosmic">{selectedConstellation.season}</Badge>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-4">{selectedConstellation.mythology}</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Brightest Star</div>
                  <div className="text-sm font-semibold text-text-primary">{selectedConstellation.brightestStar}</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Stars</div>
                  <div className="text-sm font-semibold text-text-primary">{selectedConstellation.stars}</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Best Viewing</div>
                  <div className="text-sm font-semibold text-text-primary">{selectedConstellation.bestMonth}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </PageContainer>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export { StarChartPage };
