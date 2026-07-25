"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const exoplanets = [
  { id: "kepler-442b", name: "Kepler-442b", hostStar: "Kepler-442", distance: 1206, radius: 1.34, mass: 2.34, habitable: true, type: "Super-Earth", year: 2015, description: "One of the most Earth-like exoplanets ever discovered." },
  { id: "kepler-22b", name: "Kepler-22b", hostStar: "Kepler-22", distance: 638, radius: 2.38, mass: 36, habitable: true, type: "Sub-Neptune", year: 2011, description: "First planet confirmed in the habitable zone of a Sun-like star." },
  { id: "proxima-b", name: "Proxima Centauri b", hostStar: "Proxima Centauri", distance: 4.24, radius: 1.1, mass: 1.27, habitable: true, type: "Terrestrial", year: 2016, description: "Closest known exoplanet to Earth." },
  { id: "trappist-1e", name: "TRAPPIST-1e", hostStar: "TRAPPIST-1", distance: 40.7, radius: 0.92, mass: 0.692, habitable: true, type: "Terrestrial", year: 2017, description: "Most likely to have liquid water in TRAPPIST system." },
  { id: "kepler-186f", name: "Kepler-186f", hostStar: "Kepler-186", distance: 582, radius: 1.17, mass: 1.71, habitable: true, type: "Super-Earth", year: 2014, description: "First Earth-sized planet in habitable zone." },
  { id: "hd-209458b", name: "HD 209458 b (Osiris)", hostStar: "HD 209458", distance: 159, radius: 15.2, mass: 220, habitable: false, type: "Hot Jupiter", year: 1999, description: "First exoplanet observed transiting its star." },
  { id: "51-pegasi-b", name: "51 Pegasi b (Dimidium)", hostStar: "51 Pegasi", distance: 50.9, radius: 14.6, mass: 150, habitable: false, type: "Hot Jupiter", year: 1995, description: "First exoplanet discovered around a Sun-like star." },
  { id: "k2-18b", name: "K2-18 b", hostStar: "K2-18", distance: 124, radius: 2.61, mass: 8.63, habitable: true, type: "Sub-Neptune", year: 2015, description: "First exoplanet with water vapor in atmosphere." },
  { id: "kepler-452b", name: "Kepler-452b", hostStar: "Kepler-452", distance: 1402, radius: 1.63, mass: 5, habitable: true, type: "Super-Earth", year: 2015, description: "Called Earth 2.0 - orbits a Sun-like star." },
  { id: "toi-700d", name: "TOI-700 d", hostStar: "TOI-700", distance: 101, radius: 1.19, mass: 1.57, habitable: true, type: "Terrestrial", year: 2020, description: "TESS's first habitable zone discovery." },
  { id: "hd-189733b", name: "HD 189733 b", hostStar: "HD 189733", distance: 63, radius: 14.9, mass: 385, habitable: false, type: "Hot Jupiter", year: 2005, description: "First exoplanet atmosphere analyzed. Rains glass sideways." },
  { id: "trappist-1f", name: "TRAPPIST-1f", hostStar: "TRAPPIST-1", distance: 40.7, radius: 1.045, mass: 1.017, habitable: true, type: "Terrestrial", year: 2017, description: "Sixth planet in TRAPPIST-1 system." },
];

function ExoplanetExplorerPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filters = ["all", "habitable", "terrestrial", "hot-jupiter", "sub-neptune"];

  const filtered = useMemo(() => {
    return exoplanets.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.hostStar.toLowerCase().includes(search.toLowerCase());
      let matchesFilter = true;
      if (filter === "habitable") matchesFilter = p.habitable;
      else if (filter === "terrestrial") matchesFilter = p.type === "Terrestrial";
      else if (filter === "hot-jupiter") matchesFilter = p.type === "Hot Jupiter";
      else if (filter === "sub-neptune") matchesFilter = p.type === "Sub-Neptune";
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const selected = exoplanets.find((p) => p.id === selectedPlanet);
  const habitableCount = exoplanets.filter((p) => p.habitable).length;

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-aurora-400 via-plasma-300 to-star-400 bg-clip-text text-transparent">
            Exoplanet Explorer
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Discover worlds beyond our solar system • {habitableCount} potentially habitable
          </p>
        </div>
        <div className="flex gap-1.5">
          {(["grid", "list"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                viewMode === mode
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted border border-transparent"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
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
          {filters.map((f) => (
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
              {f === "all" ? "All" : f === "habitable" ? "🌍 Habitable" : f.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                      {planet.name}
                    </h3>
                    <p className="text-[10px] text-text-muted">{planet.hostStar} • {planet.distance} ly</p>
                  </div>
                  <div className="flex gap-1">
                    {planet.habitable && <Badge variant="success" size="sm">Habitable</Badge>}
                    <Badge variant="cosmic" size="sm">{planet.type}</Badge>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mb-3 line-clamp-2">{planet.description}</p>
                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  <div className="bg-surface-glass rounded p-1.5">
                    <div className="text-text-muted">Radius</div>
                    <div className="text-text-primary">{planet.radius} R⊕</div>
                  </div>
                  <div className="bg-surface-glass rounded p-1.5">
                    <div className="text-text-muted">Mass</div>
                    <div className="text-text-primary">{planet.mass} M⊕</div>
                  </div>
                  <div className="bg-surface-glass rounded p-1.5">
                    <div className="text-text-muted">Year</div>
                    <div className="text-text-primary">{planet.year}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((planet) => (
            <Card
              key={planet.id}
              variant="glass"
              className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
                selectedPlanet === planet.id ? "border-plasma-500/50" : ""
              }`}
              onClick={() => setSelectedPlanet(planet.id === selectedPlanet ? null : planet.id)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{planet.name}</h3>
                    <p className="text-[10px] text-text-muted">{planet.hostStar} • {planet.distance} ly</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {planet.habitable && <Badge variant="success" size="sm">Habitable</Badge>}
                  <Badge variant="cosmic" size="sm">{planet.type}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selected && (
        <div className="mt-6">
          <Card variant="glass">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-500 to-plasma-500 flex items-center justify-center text-2xl">
                  🌍
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selected.name}</h2>
                  <div className="flex gap-1 mt-1">
                    <Badge variant="cosmic">{selected.type}</Badge>
                    {selected.habitable && <Badge variant="success">Habitable</Badge>}
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
                  <div className="text-xs text-text-muted">Mass</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.mass} M⊕</div>
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
