"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const nebulae = [
  { id: "orion", name: "Orion Nebula", type: "Emission", constellation: "Orion", distance: 1344, diameter: 24, color: "#ff6b8a", description: "One of the brightest nebulae, visible to the naked eye.", magnitude: 4.0 },
  { id: "eagle", name: "Eagle Nebula", type: "Emission", constellation: "Serpens", distance: 7000, diameter: 70, color: "#4a90d9", description: "Home to the famous Pillars of Creation.", magnitude: 6.0 },
  { id: "crab", name: "Crab Nebula", type: "Supernova Remnant", constellation: "Taurus", distance: 6523, diameter: 11, color: "#ff9500", description: "Remnant of a supernova observed in 1054 CE.", magnitude: 8.4 },
  { id: "ring", name: "Ring Nebula", type: "Planetary", constellation: "Lyra", distance: 2283, diameter: 1.3, color: "#6c5ce7", description: "A classic example of a planetary nebula.", magnitude: 8.8 },
  { id: "helix", name: "Helix Nebula", type: "Planetary", constellation: "Aquarius", distance: 655, diameter: 5.74, color: "#00d4aa", description: "One of the closest planetary nebulae to Earth.", magnitude: 7.6 },
  { id: "lagoon", name: "Lagoon Nebula", type: "Emission", constellation: "Sagittarius", distance: 4100, diameter: 110, color: "#ff4500", description: "A large emission nebula in Sagittarius.", magnitude: 6.0 },
  { id: "horsehead", name: "Horsehead Nebula", type: "Dark", constellation: "Orion", distance: 1375, diameter: 3.5, color: "#1a0a00", description: "One of the most famous dark nebulae.", magnitude: null },
  { id: "pleiades", name: "Pleiades Nebulosity", type: "Reflection", constellation: "Taurus", distance: 444, diameter: 12, color: "#4169e1", description: "Reflection nebulae surrounding the Pleiades cluster.", magnitude: 1.6 },
];

function NebulaExplorerPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [selectedNebula, setSelectedNebula] = useState<string | null>(null);

  const types = ["all", "Emission", "Planetary", "Supernova Remnant", "Dark", "Reflection"];

  const filtered = useMemo(() => {
    return nebulae.filter((n) => {
      const matchesSearch = n.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "all" || n.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  const selected = nebulae.find((n) => n.id === selectedNebula);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-nebula-500 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
          Nebula Explorer
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Discover stellar nurseries and cosmic clouds
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search nebulae..."
            className="w-full h-10 px-4 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
          />
        </div>
        <div className="flex gap-1 flex-wrap">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-all",
                typeFilter === t
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted border border-transparent"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((nebula) => (
          <Card
            key={nebula.id}
            variant="glass"
            className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
              selectedNebula === nebula.id ? "border-plasma-500/50" : ""
            }`}
            onClick={() => setSelectedNebula(nebula.id === selectedNebula ? null : nebula.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg"
                    style={{ background: `radial-gradient(circle, ${nebula.color}60 0%, ${nebula.color}20 70%)`, border: `1px solid ${nebula.color}40` }}
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                      {nebula.name}
                    </h3>
                    <Badge variant="cosmic" size="sm">{nebula.type}</Badge>
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-secondary mb-3 line-clamp-2">{nebula.description}</p>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="bg-surface-glass rounded p-1.5">
                  <div className="text-text-muted">Distance</div>
                  <div className="text-text-primary">{nebula.distance.toLocaleString()} ly</div>
                </div>
                <div className="bg-surface-glass rounded p-1.5">
                  <div className="text-text-muted">Diameter</div>
                  <div className="text-text-primary">{nebula.diameter} ly</div>
                </div>
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
                  className="w-16 h-16 rounded-xl"
                  style={{ background: `radial-gradient(circle, ${selected.color}80 0%, ${selected.color}30 70%)`, border: `2px solid ${selected.color}50` }}
                />
                <div>
                  <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{selected.name}</h2>
                  <div className="flex gap-1 mt-1">
                    <Badge variant="cosmic">{selected.type}</Badge>
                    <Badge variant="primary">{selected.constellation}</Badge>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-4">{selected.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Distance</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.distance.toLocaleString()} ly</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Diameter</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.diameter} ly</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Constellation</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.constellation}</div>
                </div>
                <div className="bg-surface-glass rounded-lg p-3">
                  <div className="text-xs text-text-muted">Magnitude</div>
                  <div className="text-sm font-semibold text-text-primary">{selected.magnitude || "N/A"}</div>
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

export { NebulaExplorerPage };
