"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const stars = [
  { id: "sun", name: "Sun", spectralClass: "G2V", temperature: 5778, luminosity: 1, radius: 1, mass: 1, distance: 0, magnitude: -26.74, constellation: "N/A", color: "#ffd93d", description: "Our star, a G-type main-sequence star." },
  { id: "sirius", name: "Sirius", spectralClass: "A1V", temperature: 9940, luminosity: 25.4, radius: 1.71, mass: 2.06, distance: 8.6, magnitude: -1.46, constellation: "Canis Major", color: "#aaccff", description: "The brightest star in the night sky." },
  { id: "betelgeuse", name: "Betelgeuse", spectralClass: "M1-2", temperature: 3500, luminosity: 126000, radius: 887, mass: 11.6, distance: 700, magnitude: 0.5, constellation: "Orion", color: "#ff6347", description: "A red supergiant, one of the largest visible stars." },
  { id: "rigel", name: "Rigel", spectralClass: "B8Ia", temperature: 12100, luminosity: 120000, radius: 78.9, mass: 21, distance: 860, magnitude: 0.13, constellation: "Orion", color: "#aaccff", description: "A blue supergiant, the brightest star in Orion." },
  { id: "polaris", name: "Polaris", spectralClass: "F7Ib", temperature: 6015, luminosity: 1260, radius: 46, mass: 5.4, distance: 433, magnitude: 1.98, constellation: "Ursa Minor", color: "#fff4e0", description: "The North Star, used for navigation." },
  { id: "vega", name: "Vega", spectralClass: "A0V", temperature: 9602, luminosity: 40.12, radius: 2.36, mass: 2.14, distance: 25, magnitude: 0.03, constellation: "Lyra", color: "#aaccff", description: "One of the brightest stars, former pole star." },
  { id: "arcturus", name: "Arcturus", spectralClass: "K1.5III", temperature: 4286, luminosity: 170, radius: 25.4, mass: 1.08, distance: 36.7, magnitude: -0.05, constellation: "Boötes", color: "#ffa500", description: "The brightest star in the northern hemisphere." },
  { id: "altair", name: "Altair", spectralClass: "A7V", temperature: 8590, luminosity: 10.6, radius: 1.63, mass: 1.79, distance: 16.7, magnitude: 0.76, constellation: "Aquila", color: "#aaccff", description: "One of the closest bright stars to Earth." },
];

function StarExplorerPage() {
  const [search, setSearch] = useState("");
  const [selectedStar, setSelectedStar] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "magnitude" | "temperature">("magnitude");

  const filtered = useMemo(() => {
    return stars
      .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "magnitude") return a.magnitude - b.magnitude;
        return b.temperature - a.temperature;
      });
  }, [search, sortBy]);

  const selected = stars.find((s) => s.id === selectedStar);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-star-400 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
          Star Explorer
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Discover the stars that light up our night sky
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stars..."
            className="w-full h-10 px-4 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
          />
        </div>
        <div className="flex gap-1">
          {(["magnitude", "temperature", "name"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-all capitalize",
                sortBy === s
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted border border-transparent"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((star) => (
          <Card
            key={star.id}
            variant="glass"
            className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
              selectedStar === star.id ? "border-plasma-500/50" : ""
            }`}
            onClick={() => setSelectedStar(star.id === selectedStar ? null : star.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: star.color, boxShadow: `0 0 15px ${star.color}60` }}
                />
                <div>
                  <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                    {star.name}
                  </h3>
                  <Badge variant="cosmic" size="sm">{star.spectralClass}</Badge>
                </div>
              </div>
              <p className="text-xs text-text-secondary mb-2 line-clamp-2">{star.description}</p>
              <div className="flex items-center gap-2 text-[10px] text-text-muted">
                <span>{star.constellation}</span>
                <span>•</span>
                <span>{star.distance} ly</span>
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
                <div
                  className="w-20 h-20 rounded-full"
                  style={{ backgroundColor: selected.color, boxShadow: `0 0 30px ${selected.color}60` }}
                />
                <div>
                  <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selected.name}</h2>
                  <Badge variant="cosmic">{selected.spectralClass}</Badge>
                  <p className="text-sm text-text-secondary mt-1">{selected.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Temperature</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.temperature.toLocaleString()} K</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Luminosity</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.luminosity} L☉</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Radius</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.radius} R☉</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Distance</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.distance} ly</div>
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

export { StarExplorerPage };
