"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const exoplanets = [
  { id: "kepler-442b", name: "Kepler-442b", hostStar: "Kepler-442", distance: 1206, habitable: true, type: "Super-Earth", radius: 1.34, mass: 2.34, temperature: 233, color: "#4a90d9", description: "One of the most Earth-like exoplanets ever discovered." },
  { id: "proxima-b", name: "Proxima Centauri b", hostStar: "Proxima Centauri", distance: 4.24, habitable: true, type: "Terrestrial", radius: 1.1, mass: 1.27, temperature: 234, color: "#c1440e", description: "The closest known exoplanet to Earth." },
  { id: "trappist-1e", name: "TRAPPIST-1e", hostStar: "TRAPPIST-1", distance: 40.7, habitable: true, type: "Terrestrial", radius: 0.92, mass: 0.692, temperature: 251, color: "#ff6b8a", description: "One of seven Earth-sized planets in the TRAPPIST-1 system." },
  { id: "kepler-186f", name: "Kepler-186f", hostStar: "Kepler-186", distance: 582, habitable: true, type: "Super-Earth", radius: 1.17, mass: 1.71, temperature: 188, color: "#8b4513", description: "The first Earth-sized planet in the habitable zone." },
  { id: "hd-209458b", name: "HD 209458 b", hostStar: "HD 209458", distance: 159, habitable: false, type: "Hot Jupiter", radius: 15.2, mass: 220, temperature: 1320, color: "#c88b3a", description: "The first exoplanet observed to transit its star." },
  { id: "51-pegasi-b", name: "51 Pegasi b", hostStar: "51 Pegasi", distance: 50.9, habitable: false, type: "Hot Jupiter", radius: 14.6, mass: 150, temperature: 1264, color: "#e8cda0", description: "The first exoplanet discovered orbiting a Sun-like star." },
  { id: "k2-18b", name: "K2-18 b", hostStar: "K2-18", distance: 124, habitable: true, type: "Sub-Neptune", radius: 2.61, mass: 8.63, temperature: 255, color: "#4fd0e7", description: "First exoplanet found to have water vapor in its atmosphere." },
  { id: "kepler-452b", name: "Kepler-452b", hostStar: "Kepler-452", distance: 1402, habitable: true, type: "Super-Earth", radius: 1.63, mass: 5, temperature: 265, color: "#4a90d9", description: "Called 'Earth 2.0' - orbits a Sun-like star." },
];

function ExoplanetExplorerPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return exoplanets.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "all" || (filter === "habitable" ? p.habitable : p.type === filter);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const selected = exoplanets.find((p) => p.id === selectedPlanet);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-aurora-400 via-plasma-300 to-star-400 bg-clip-text text-transparent">
          Exoplanet Explorer
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Discover worlds beyond our solar system
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search exoplanets..."
            className="w-full h-10 px-4 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
          />
        </div>
        <div className="flex gap-1 flex-wrap">
          {["all", "habitable", "Terrestrial", "Super-Earth", "Hot Jupiter"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-all capitalize",
                filter === f
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted border border-transparent"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((planet) => (
          <Card
            key={planet.id}
            variant="glass"
            className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
              selectedPlanet === planet.id ? "border-plasma-500/50" : ""
            }`}
            onClick={() => setSelectedPlanet(planet.id === selectedPlanet ? null : planet.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: planet.color, boxShadow: `0 0 15px ${planet.color}40` }}
                />
                <div>
                  <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                    {planet.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Badge variant="cosmic" size="sm">{planet.type}</Badge>
                    {planet.habitable && <Badge variant="success" size="sm">Habitable</Badge>}
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-secondary mb-2 line-clamp-2">{planet.description}</p>
              <div className="flex items-center gap-2 text-[10px] text-text-muted">
                <span>{planet.hostStar}</span>
                <span>•</span>
                <span>{planet.distance} ly</span>
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
                  className="w-16 h-16 rounded-full"
                  style={{ backgroundColor: selected.color, boxShadow: `0 0 30px ${selected.color}50` }}
                />
                <div>
                  <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selected.name}</h2>
                  <div className="flex gap-1 mt-1">
                    <Badge variant="cosmic">{selected.type}</Badge>
                    {selected.habitable && <Badge variant="success">Habitable Zone</Badge>}
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-4">{selected.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Host Star</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.hostStar}</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Distance</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.distance} ly</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Radius</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.radius} R⊕</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Temperature</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.temperature} K</div>
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

export { ExoplanetExplorerPage };
