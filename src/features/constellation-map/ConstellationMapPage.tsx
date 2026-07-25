"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const constellations = [
  { id: "orion", name: "Orion", abbreviation: "Ori", season: "Winter", hemisphere: "Both", brightestStar: "Rigel", stars: 7, mythology: "The Hunter in Greek mythology, son of Poseidon.", bestMonth: "January" },
  { id: "ursa-major", name: "Ursa Major", abbreviation: "UMa", season: "Spring", hemisphere: "Northern", brightestStar: "Alioth", stars: 7, mythology: "The Great Bear, associated with the nymph Callisto.", bestMonth: "April" },
  { id: "cassiopeia", name: "Cassiopeia", abbreviation: "Cas", season: "Autumn", hemisphere: "Northern", brightestStar: "Schedar", stars: 5, mythology: "The vain queen in Greek mythology.", bestMonth: "November" },
  { id: "leo", name: "Leo", abbreviation: "Leo", season: "Spring", hemisphere: "Both", brightestStar: "Regulus", stars: 9, mythology: "The Nemean Lion slain by Heracles.", bestMonth: "March" },
  { id: "scorpius", name: "Scorpius", abbreviation: "Sco", season: "Summer", hemisphere: "Both", brightestStar: "Antares", stars: 15, mythology: "The scorpion that killed Orion.", bestMonth: "July" },
  { id: "cygnus", name: "Cygnus", abbreviation: "Cyg", season: "Summer", hemisphere: "Northern", brightestStar: "Deneb", stars: 9, mythology: "The Swan in Greek mythology.", bestMonth: "September" },
  { id: "gemini", name: "Gemini", abbreviation: "Gem", season: "Winter", hemisphere: "Both", brightestStar: "Pollux", stars: 8, mythology: "The Twins Castor and Pollux.", bestMonth: "February" },
  { id: "lyra", name: "Lyra", abbreviation: "Lyr", season: "Summer", hemisphere: "Northern", brightestStar: "Vega", stars: 5, mythology: "The lyre of Orpheus.", bestMonth: "August" },
  { id: "aquila", name: "Aquila", abbreviation: "Aql", season: "Summer", hemisphere: "Both", brightestStar: "Altair", stars: 6, mythology: "The eagle that carried Zeus's thunderbolts.", bestMonth: "August" },
  { id: "andromeda", name: "Andromeda", abbreviation: "And", season: "Autumn", hemisphere: "Northern", brightestStar: "Alpheratz", stars: 5, mythology: "The princess chained to a rock.", bestMonth: "October" },
  { id: "pegasus", name: "Pegasus", abbreviation: "Peg", season: "Autumn", hemisphere: "Northern", brightestStar: "Enif", stars: 4, mythology: "The winged horse of Greek mythology.", bestMonth: "October" },
  { id: "canis-major", name: "Canis Major", abbreviation: "CMa", season: "Winter", hemisphere: "Both", brightestStar: "Sirius", stars: 8, mythology: "One of Orion's hunting dogs.", bestMonth: "January" },
];

function ConstellationMapPage() {
  const [search, setSearch] = useState("");
  const [season, setSeason] = useState<string>("all");
  const [selectedConstellation, setSelectedConstellation] = useState<string | null>(null);

  const seasons = ["all", "Winter", "Spring", "Summer", "Autumn"];

  const filtered = useMemo(() => {
    return constellations.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchesSeason = season === "all" || c.season === season;
      return matchesSearch && matchesSeason;
    });
  }, [search, season]);

  const selected = constellations.find((c) => c.id === selectedConstellation);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-plasma-300 to-star-400 bg-clip-text text-transparent">
          Constellation Map
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Explore the patterns of stars that have guided humanity for millennia
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search constellations..."
            className="w-full h-10 px-4 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
          />
        </div>
        <div className="flex gap-1">
          {seasons.map((s) => (
            <button
              key={s}
              onClick={() => setSeason(s)}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-all capitalize",
                season === s
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((constellation) => (
          <Card
            key={constellation.id}
            variant="glass"
            className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
              selectedConstellation === constellation.id ? "border-plasma-500/50" : ""
            }`}
            onClick={() => setSelectedConstellation(constellation.id === selectedConstellation ? null : constellation.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                    {constellation.name}
                  </h3>
                  <p className="text-[10px] text-text-muted">{constellation.abbreviation}</p>
                </div>
                <div className="flex gap-1">
                  <Badge variant="cosmic" size="sm">{constellation.season}</Badge>
                  <Badge variant="default" size="sm">{constellation.hemisphere}</Badge>
                </div>
              </div>
              <p className="text-xs text-text-secondary mb-2 line-clamp-2">{constellation.mythology}</p>
              <div className="flex items-center gap-3 text-[10px] text-text-muted">
                <span>⭐ {constellation.stars} stars</span>
                <span>•</span>
                <span>Best: {constellation.bestMonth}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <div className="mt-6">
          <Card variant="glass">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-plasma-500/20 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selected.name}</h2>
                  <div className="flex gap-1 mt-1">
                    <Badge variant="cosmic">{selected.season}</Badge>
                    <Badge variant="primary">{selected.hemisphere}</Badge>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-4">{selected.mythology}</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Brightest Star</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.brightestStar}</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Stars</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.stars}</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Best Viewing</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.bestMonth}</div>
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

export { ConstellationMapPage };
