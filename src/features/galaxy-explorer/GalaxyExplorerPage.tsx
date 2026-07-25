"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GalaxyScene } from "./components/GalaxyScene";
import { GalaxyCatalog } from "./components/GalaxyCatalog";
import { GalaxyDetailPanel } from "./components/GalaxyDetailPanel";
import { GalaxyFilter } from "./components/GalaxyFilter";
import { GalaxyComparison } from "./components/GalaxyComparison";
import { DeepSkyObjectsPanel } from "./components/DeepSkyObjectsPanel";
import { galaxies } from "./data/galaxies";
import { GalaxyType } from "./types";

function GalaxyExplorerPage() {
  const [selectedGalaxy, setSelectedGalaxy] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "catalog" | "deep-sky">("catalog");
  const [typeFilter, setTypeFilter] = useState<GalaxyType | "all">("all");
  const [search, setSearch] = useState("");

  const filteredGalaxies = useMemo(() => {
    return galaxies.filter((g) => {
      const matchesType = typeFilter === "all" || g.type === typeFilter;
      const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase()) ||
        g.description.toLowerCase().includes(search.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [typeFilter, search]);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-cosmic-200 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
            Galaxy Explorer
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Explore galaxies, nebulae, and deep sky objects across the universe
          </p>
        </div>
        <div className="flex gap-1.5">
          {(["3d", "catalog", "deep-sky"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                viewMode === mode
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {mode === "3d" ? "3D View" : mode === "catalog" ? "Catalog" : "Deep Sky"}
            </button>
          ))}
        </div>
      </div>

      {viewMode === "3d" && (
        <div className="relative">
          <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
            <GalaxyScene selectedGalaxy={selectedGalaxy} onGalaxySelect={setSelectedGalaxy} />
          </div>
          {selectedGalaxy && (
            <div className="absolute top-4 right-4">
              <GalaxyDetailPanel galaxyId={selectedGalaxy} onClose={() => setSelectedGalaxy(null)} />
            </div>
          )}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setSelectedGalaxy(null)}
              className="px-4 py-2 rounded-lg bg-surface-glass border border-border-default text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              {selectedGalaxy ? "View All Galaxies" : "Select a galaxy to explore"}
            </button>
          </div>
        </div>
      )}

      {viewMode === "catalog" && (
        <div className="space-y-6">
          <GalaxyFilter
            typeFilter={typeFilter}
            onTypeFilterChange={setTypeFilter}
            search={search}
            onSearchChange={setSearch}
          />
          <GalaxyCatalog
            galaxies={filteredGalaxies}
            onSelect={setSelectedGalaxy}
            selectedGalaxy={selectedGalaxy}
          />
          {selectedGalaxy && (
            <GalaxyDetailPanel galaxyId={selectedGalaxy} onClose={() => setSelectedGalaxy(null)} />
          )}
          <GalaxyComparison />
        </div>
      )}

      {viewMode === "deep-sky" && (
        <div className="space-y-6">
          <DeepSkyObjectsPanel />
        </div>
      )}
    </PageContainer>
  );
}

export { GalaxyExplorerPage };
