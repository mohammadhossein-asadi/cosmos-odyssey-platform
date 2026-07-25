"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GalaxyScene } from "./components/GalaxyScene";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const galaxies = [
  { id: "milky-way", name: "Milky Way", type: "Barred Spiral", distance: 0, stars: "200-400 billion", description: "Our home galaxy containing our Solar System.", color: "#e8d5b7", size: 100000 },
  { id: "andromeda", name: "Andromeda (M31)", type: "Spiral", distance: 2537000, stars: "~1 trillion", description: "The nearest large galaxy to the Milky Way.", color: "#b8a0e0", size: 220000 },
  { id: "triangulum", name: "Triangulum (M33)", type: "Spiral", distance: 2730000, stars: "~40 billion", description: "Third-largest galaxy in the Local Group.", color: "#a299f3", size: 60000 },
  { id: "sombrero", name: "Sombrero (M104)", type: "Lenticular", distance: 29350000, stars: "~100 billion", description: "A lenticular galaxy with a prominent dust lane.", color: "#e4c46e", size: 50000 },
  { id: "whirlpool", name: "Whirlpool (M51)", type: "Spiral", distance: 23160000, stars: "~160 billion", description: "A grand-design spiral galaxy interacting with companion.", color: "#4a90d9", size: 76000 },
  { id: "centaurus-a", name: "Centaurus A", type: "Elliptical", distance: 13700000, stars: "~100 billion", description: "The fifth brightest galaxy in the sky.", color: "#ff9500", size: 60000 },
  { id: "lmc", name: "Large Magellanic Cloud", type: "Irregular", distance: 160000, stars: "~30 billion", description: "A satellite galaxy of the Milky Way.", color: "#ff6b8a", size: 14000 },
  { id: "smc", name: "Small Magellanic Cloud", type: "Irregular", distance: 200000, stars: "~3 billion", description: "A small irregular galaxy and satellite of the Milky Way.", color: "#c0c0c0", size: 7000 },
  { id: "m87", name: "M87 (Virgo A)", type: "Elliptical", distance: 53500000, stars: "~1 trillion", description: "A giant elliptical galaxy with supermassive black hole.", color: "#b8a0e0", size: 120000 },
  { id: "ngc-1300", name: "NGC 1300", type: "Barred Spiral", distance: 61000000, stars: "~100 billion", description: "A prominent barred spiral galaxy.", color: "#a299f3", size: 110000 },
];

function GalaxyExplorerPage() {
  const [selectedGalaxy, setSelectedGalaxy] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"3d" | "catalog">("catalog");

  const filtered = useMemo(() => {
    return galaxies.filter((g) =>
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.type.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const selected = galaxies.find((g) => g.id === selectedGalaxy);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-cosmic-200 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
            Galaxy Explorer
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Explore galaxies, nebulae, and deep sky objects
          </p>
        </div>
        <div className="flex gap-1.5">
          {(["catalog", "3d"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                viewMode === mode
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {mode === "3d" ? "3D View" : "Catalog"}
            </button>
          ))}
        </div>
      </div>

      {viewMode === "3d" ? (
        <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
          <GalaxyScene selectedGalaxy={selectedGalaxy} onGalaxySelect={setSelectedGalaxy} />
        </div>
      ) : (
        <>
          <div className="max-w-md mx-auto mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search galaxies..."
              className="w-full h-10 px-4 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((galaxy) => (
              <Card
                key={galaxy.id}
                variant="glass"
                className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
                  selectedGalaxy === galaxy.id ? "border-plasma-500/50" : ""
                }`}
                onClick={() => setSelectedGalaxy(galaxy.id === selectedGalaxy ? null : galaxy.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full"
                        style={{ backgroundColor: galaxy.color, boxShadow: `0 0 15px ${galaxy.color}40` }}
                      />
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                          {galaxy.name}
                        </h3>
                        <Badge variant="cosmic" size="sm">{galaxy.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary mb-3 line-clamp-2">{galaxy.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-surface-glass rounded p-1.5">
                      <div className="text-text-muted">Distance</div>
                      <div className="text-text-primary">{galaxy.distance.toLocaleString()} ly</div>
                    </div>
                    <div className="bg-surface-glass rounded p-1.5">
                      <div className="text-text-muted">Stars</div>
                      <div className="text-text-primary">{galaxy.stars}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

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
                  <Badge variant="cosmic">{selected.type}</Badge>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-4">{selected.description}</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Distance</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.distance.toLocaleString()} ly</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Stars</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.stars}</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Diameter</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.size.toLocaleString()} ly</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </PageContainer>
  );
}

export { GalaxyExplorerPage };
