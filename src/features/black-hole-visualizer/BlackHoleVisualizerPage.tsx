"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const blackHoles = [
  { id: "sagittarius-a", name: "Sagittarius A*", type: "Supermassive", mass: "4 million M☉", distance: 26000, constellation: "Sagittarius", description: "The supermassive black hole at the center of our Milky Way.", color: "#ff6b00", spin: "High" },
  { id: "m87", name: "M87*", type: "Supermassive", mass: "6.5 billion M☉", distance: 53500000, constellation: "Virgo", description: "The first black hole ever directly imaged.", color: "#ff4500", spin: "High" },
  { id: "cygnus-x1", name: "Cygnus X-1", type: "Stellar", mass: "21 M☉", distance: 6070, constellation: "Cygnus", description: "One of the first black hole candidates discovered.", color: "#4a90d9", spin: "Very High" },
  { id: "ton-618", name: "TON 618", type: "Supermassive", mass: "66 billion M☉", distance: 10400000000, constellation: "Canes Venatici", description: "One of the most massive black holes ever discovered.", color: "#ff1493", spin: "High" },
  { id: "gaia-bh1", name: "Gaia BH1", type: "Stellar", mass: "10 M☉", distance: 1560, constellation: "Ophiuchus", description: "The closest known black hole to Earth.", color: "#666666", spin: "Moderate" },
  { id: "phoenix-a", name: "Phoenix A", type: "Supermassive", mass: "100 billion M☉", distance: 8000000000, constellation: "Phoenix", description: "The most massive black hole discovered to date.", color: "#ff6b8a", spin: "High" },
];

const physicsConcepts = [
  { title: "Event Horizon", icon: "⚫", description: "The point of no return where nothing can escape.", formula: "R = 2GM/c²" },
  { title: "Hawking Radiation", icon: "🌡️", description: "Thermal radiation predicted by Stephen Hawking.", formula: "T = ℏc³/(8πGMk)" },
  { title: "Time Dilation", icon: "⏱️", description: "Time passes slower near a massive object.", formula: "t' = t√(1-R/r)" },
  { title: "Spaghettification", icon: "🍝", description: "Tidal stretching of objects falling into a black hole.", formula: "F ∝ M/r³" },
];

function BlackHoleVisualizerPage() {
  const [selectedBH, setSelectedBH] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"catalog" | "physics">("catalog");

  const selected = blackHoles.find((bh) => bh.id === selectedBH);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-cosmic-200 via-plasma-300 to-nebula-500 bg-clip-text text-transparent">
            Black Hole Visualizer
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Explore the most extreme objects in the universe
          </p>
        </div>
        <div className="flex gap-1.5">
          {(["catalog", "physics"] as const).map((mode) => (
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

      {viewMode === "catalog" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {blackHoles.map((bh) => (
              <Card
                key={bh.id}
                variant="glass"
                className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
                  selectedBH === bh.id ? "border-plasma-500/50" : ""
                }`}
                onClick={() => setSelectedBH(bh.id === selectedBH ? null : bh.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                        {bh.name}
                      </h3>
                      <Badge variant="cosmic" size="sm">{bh.type}</Badge>
                    </div>
                    <div className="text-2xl">🕳️</div>
                  </div>
                  <p className="text-xs text-text-secondary mb-3 line-clamp-2">{bh.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-surface-glass rounded p-1.5">
                      <div className="text-text-muted">Mass</div>
                      <div className="text-text-primary">{bh.mass}</div>
                    </div>
                    <div className="bg-surface-glass rounded p-1.5">
                      <div className="text-text-muted">Distance</div>
                      <div className="text-text-primary">{bh.distance.toLocaleString()} ly</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selected && (
            <Card variant="glass">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center" style={{ boxShadow: `0 0 30px ${selected.color}60` }}>
                    <span className="text-2xl">🕳️</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selected.name}</h2>
                    <div className="flex gap-1 mt-1">
                      <Badge variant="cosmic">{selected.type}</Badge>
                      <Badge variant="primary">Spin: {selected.spin}</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary mb-4">{selected.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-surface-glass rounded-lg p-3">
                    <div className="text-xs text-text-muted">Mass</div>
                    <div className="text-sm font-semibold text-text-primary">{selected.mass}</div>
                  </div>
                  <div className="bg-surface-glass rounded-lg p-3">
                    <div className="text-xs text-text-muted">Distance</div>
                    <div className="text-sm font-semibold text-text-primary">{selected.distance.toLocaleString()} ly</div>
                  </div>
                  <div className="bg-surface-glass rounded-lg p-3">
                    <div className="text-xs text-text-muted">Constellation</div>
                    <div className="text-sm font-semibold text-text-primary">{selected.constellation}</div>
                  </div>
                  <div className="bg-surface-glass rounded-lg p-3">
                    <div className="text-xs text-text-muted">Spin</div>
                    <div className="text-sm font-semibold text-text-primary">{selected.spin}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {physicsConcepts.map((concept) => (
            <Card key={concept.title} variant="glass">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{concept.icon}</span>
                  <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                    {concept.title}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary mb-3">{concept.description}</p>
                <div className="px-3 py-2 bg-surface-glass rounded-lg">
                  <div className="text-[10px] text-text-muted mb-1">Formula</div>
                  <div className="text-sm font-mono text-plasma-300">{concept.formula}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </PageContainer>
  );
}

export { BlackHoleVisualizerPage };
