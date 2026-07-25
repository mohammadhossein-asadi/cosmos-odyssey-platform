"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";

const planets = [
  { id: "mercury", name: "Mercury", diameter: 4879, distance: 57.9, gravity: 3.7, temperature: 167, moons: 0, color: "#b5b5b5", description: "Smallest planet, closest to Sun." },
  { id: "venus", name: "Venus", diameter: 12104, distance: 108.2, gravity: 8.87, temperature: 462, moons: 0, color: "#e8cda0", description: "Hottest planet with thick atmosphere." },
  { id: "earth", name: "Earth", diameter: 12742, distance: 149.6, gravity: 9.81, temperature: 15, moons: 1, color: "#4a90d9", description: "Our home planet with liquid water." },
  { id: "mars", name: "Mars", diameter: 6779, distance: 227.9, gravity: 3.72, temperature: -65, moons: 2, color: "#c1440e", description: "The Red Planet with Olympus Mons." },
  { id: "jupiter", name: "Jupiter", diameter: 139820, distance: 778.5, gravity: 24.79, temperature: -108, moons: 95, color: "#c88b3a", description: "Largest planet with Great Red Spot." },
  { id: "saturn", name: "Saturn", diameter: 116460, distance: 1434, gravity: 10.44, temperature: -139, moons: 146, color: "#e4c46e", description: "Famous for its ring system." },
  { id: "uranus", name: "Uranus", diameter: 50724, distance: 2871, gravity: 8.69, temperature: -197, moons: 28, color: "#4fd0e7", description: "Rotates on its side." },
  { id: "neptune", name: "Neptune", diameter: 49244, distance: 4495, gravity: 11.15, temperature: -214, moons: 16, color: "#4b70dd", description: "Windiest planet in solar system." },
];

function SolarVizPage() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"table" | "grid">("grid");
  const [sortBy, setSortBy] = useState<"name" | "diameter" | "distance">("distance");

  const sorted = [...planets].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "diameter") return b.diameter - a.diameter;
    return a.distance - b.distance;
  });

  const selected = planets.find((p) => p.id === selectedPlanet);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-plasma-300 via-star-400 to-aurora-400 bg-clip-text text-transparent">
            Solar System Visualization
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Compare and explore planetary data
          </p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              viewMode === "grid"
                ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                : "bg-surface-glass text-text-muted border border-transparent"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              viewMode === "table"
                ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                : "bg-surface-glass text-text-muted border border-transparent"
            }`}
          >
            Table
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <span className="text-xs text-text-muted self-center">Sort by:</span>
        {(["distance", "diameter", "name"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSortBy(s)}
            className={cn(
              "px-2 py-1 rounded text-[10px] font-medium capitalize transition-all",
              sortBy === s
                ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                : "bg-surface-glass text-text-muted border border-transparent"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sorted.map((planet) => (
            <Card
              key={planet.id}
              variant="glass"
              className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
                selectedPlanet === planet.id ? "border-plasma-500/50" : ""
              }`}
              onClick={() => setSelectedPlanet(planet.id === selectedPlanet ? null : planet.id)}
            >
              <CardContent className="p-4 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-3"
                  style={{ backgroundColor: planet.color, boxShadow: `0 0 20px ${planet.color}40` }}
                />
                <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)] mb-1">
                  {planet.name}
                </h3>
                <p className="text-[10px] text-text-muted">{planet.distance} M km from Sun</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border-default">
                <th className="text-left py-2 px-3 text-text-muted font-medium">Planet</th>
                <th className="text-right py-2 px-3 text-text-muted font-medium">Diameter (km)</th>
                <th className="text-right py-2 px-3 text-text-muted font-medium">Distance (M km)</th>
                <th className="text-right py-2 px-3 text-text-muted font-medium">Gravity (m/s²)</th>
                <th className="text-right py-2 px-3 text-text-muted font-medium">Temp (°C)</th>
                <th className="text-right py-2 px-3 text-text-muted font-medium">Moons</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((planet) => (
                <tr
                  key={planet.id}
                  className={cn(
                    "border-b border-border-default/50 cursor-pointer hover:bg-surface-glass transition-colors",
                    selectedPlanet === planet.id && "bg-plasma-500/10"
                  )}
                  onClick={() => setSelectedPlanet(planet.id === selectedPlanet ? null : planet.id)}
                >
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: planet.color }} />
                      <span className="text-text-primary font-medium">{planet.name}</span>
                    </div>
                  </td>
                  <td className="text-right py-2 px-3 text-text-secondary">{planet.diameter.toLocaleString()}</td>
                  <td className="text-right py-2 px-3 text-text-secondary">{planet.distance}</td>
                  <td className="text-right py-2 px-3 text-text-secondary">{planet.gravity}</td>
                  <td className="text-right py-2 px-3 text-text-secondary">{planet.temperature}</td>
                  <td className="text-right py-2 px-3 text-text-secondary">{planet.moons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <div className="mt-6">
          <Card variant="glass">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-20 h-20 rounded-full"
                  style={{ backgroundColor: selected.color, boxShadow: `0 0 30px ${selected.color}50` }}
                />
                <div>
                  <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selected.name}</h2>
                  <p className="text-sm text-text-secondary">{selected.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Diameter</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.diameter.toLocaleString()} km</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Distance from Sun</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.distance} M km</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Surface Gravity</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.gravity} m/s²</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Temperature</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.temperature}°C</div>
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

export { SolarVizPage };
