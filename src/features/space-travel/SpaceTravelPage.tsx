"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const destinations = [
  { id: "moon", name: "The Moon", distance: 384400, travelTime: "3 days", color: "#c0c0c0", icon: "🌙", description: "Earth's closest companion. Walk where Neil Armstrong first set foot.", facts: ["384,400 km from Earth", "No atmosphere", "Footprints last millions of years"] },
  { id: "mars", name: "Mars", distance: 225000000, travelTime: "7 months", color: "#c1440e", icon: "🔴", description: "The Red Planet, our next frontier for human colonization.", facts: ["225 million km away", "Olympus Mons is 3x Everest", "2 moons: Phobos and Deimos"] },
  { id: "venus", name: "Venus", distance: 108200000, travelTime: "4 months", color: "#e8cda0", icon: "🟡", description: "Earth's toxic twin with crushing atmospheric pressure.", facts: ["462°C surface temperature", "Rotates backwards", "Day longer than year"] },
  { id: "jupiter", name: "Jupiter", distance: 628730000, travelTime: "2.7 years", color: "#c88b3a", icon: "🟠", description: "The gas giant king with its Great Red Spot storm.", facts: ["Largest planet", "95 known moons", "Great Red Spot larger than Earth"] },
  { id: "saturn", name: "Saturn", distance: 1200000000, travelTime: "7 years", color: "#e4c46e", icon: "🪐", description: "Famous for its stunning ring system.", facts: ["Rings made of ice and rock", "Less dense than water", "146 known moons"] },
  { id: "uranus", name: "Uranus", distance: 2871000000, travelTime: "12 years", color: "#4fd0e7", icon: "🔵", description: "The sideways ice giant with extreme axial tilt.", facts: ["Rotates on its side (97.77°)", "First planet discovered by telescope", "28 known moons"] },
  { id: "neptune", name: "Neptune", distance: 4495000000, travelTime: "12 years", color: "#4b70dd", icon: "💎", description: "The windiest planet in the solar system.", facts: ["Winds up to 2,100 km/h", "Predicted mathematically before observed", "16 known moons"] },
  { id: "pluto", name: "Pluto", distance: 5906000000, travelTime: "15 years", color: "#c4a882", icon: "💔", description: "The dwarf planet at the edge of the solar system.", facts: ["Heart-shaped nitrogen glacier", "248 years to orbit Sun", "5 known moons"] },
];

function SpaceTravelPage() {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [isTraveling, setIsTraveling] = useState(false);
  const [progress, setProgress] = useState(0);

  const selected = destinations.find((d) => d.id === selectedDestination);

  const handleStartTravel = () => {
    if (!selectedDestination) return;
    setIsTraveling(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const handleReset = () => {
    setIsTraveling(false);
    setProgress(0);
    setSelectedDestination(null);
  };

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-aurora-400 via-plasma-300 to-star-400 bg-clip-text text-transparent">
          Space Travel
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Choose your destination and begin your journey through the cosmos
        </p>
      </div>

      {!isTraveling ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Destinations", value: "8", icon: "🌍" },
              { label: "Min Distance", value: "384K km", icon: "📏" },
              { label: "Max Distance", value: "5.9B km", icon: "📐" },
              { label: "Travel Routes", value: "24", icon: "🚀" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 rounded-xl bg-surface-primary border border-border-default">
                <div className="text-lg mb-1">{stat.icon}</div>
                <div className="text-sm font-bold text-text-primary">{stat.value}</div>
                <div className="text-[10px] text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <Card
                key={dest.id}
                variant="glass"
                className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
                  selectedDestination === dest.id ? "border-plasma-500/50" : ""
                }`}
                onClick={() => setSelectedDestination(dest.id === selectedDestination ? null : dest.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${dest.color}20`, border: `2px solid ${dest.color}40` }}
                    >
                      {dest.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                        {dest.name}
                      </h3>
                      <p className="text-[10px] text-text-muted">{dest.travelTime}</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary mb-3 line-clamp-2">{dest.description}</p>
                  <div className="text-[10px] text-text-muted">
                    {(dest.distance / 1000000).toFixed(0)} million km
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
                      className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                      style={{ backgroundColor: `${selected.color}20`, border: `2px solid ${selected.color}40` }}
                    >
                      {selected.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selected.name}</h2>
                      <p className="text-sm text-text-secondary">{selected.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-surface-glass rounded-lg p-3">
                      <div className="text-xs text-text-muted">Distance</div>
                      <div className="text-sm font-semibold text-text-primary">{(selected.distance / 1000000).toFixed(0)}M km</div>
                    </div>
                    <div className="bg-surface-glass rounded-lg p-3">
                      <div className="text-xs text-text-muted">Travel Time</div>
                      <div className="text-sm font-semibold text-text-primary">{selected.travelTime}</div>
                    </div>
                    <div className="bg-surface-glass rounded-lg p-3">
                      <div className="text-xs text-text-muted">Light Speed</div>
                      <div className="text-sm font-semibold text-text-primary">{(selected.distance / 300000 / 86400).toFixed(0)} days</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Quick Facts</h4>
                    <ul className="space-y-1">
                      {selected.facts.map((fact, i) => (
                        <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                          <span className="text-plasma-400 shrink-0">★</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleStartTravel}
                    className="w-full py-3 rounded-lg bg-plasma-500 hover:bg-plasma-400 text-white font-medium transition-all"
                  >
                    Launch Mission to {selected.name}
                  </button>
                </CardContent>
              </Card>
            </div>
          )}
        </>
      ) : (
        <div className="max-w-2xl mx-auto">
          <Card variant="glass">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4 animate-bounce">🚀</div>
              <h2 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-display)] mb-2">
                {progress < 100 ? `Traveling to ${selected?.name}` : `Arrived at ${selected?.name}!`}
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                {progress < 100 ? "Journey in progress..." : "Welcome to your destination!"}
              </p>

              <div className="mb-6">
                <div className="h-3 bg-surface-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-plasma-500 to-aurora-400 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-xs text-text-muted mt-2">{Math.round(progress)}% complete</div>
              </div>

              {progress >= 100 && (
                <div className="space-y-4">
                  <div className="text-4xl">{selected?.icon}</div>
                  <p className="text-sm text-text-secondary">{selected?.description}</p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 rounded-lg bg-surface-glass border border-border-default text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Return to Hub
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </PageContainer>
  );
}

export { SpaceTravelPage };
