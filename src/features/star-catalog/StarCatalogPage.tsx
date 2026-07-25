"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { StarScene } from "./components/StarScene";
import { StarCatalog } from "./components/StarCatalog";
import { StarDetailPanel } from "./components/StarDetailPanel";
import { StarFilter } from "./components/StarFilter";
import { HRDiagram } from "./components/HRDiagram";
import { SpectralClassGuide } from "./components/SpectralClassGuide";
import { StarComparison } from "./components/StarComparison";
import { StellarEvolutionGuide } from "./components/StellarEvolutionGuide";
import { stars } from "./data/stars";
import { SpectralClass, StarCategory } from "./types";

function StarCatalogPage() {
  const [viewMode, setViewMode] = useState<"3d" | "catalog">("catalog");
  const [selectedStar, setSelectedStar] = useState<string | null>(null);
  const [spectralClass, setSpectralClass] = useState<SpectralClass | "all">("all");
  const [category, setCategory] = useState<StarCategory | "all">("all");
  const [constellation, setConstellation] = useState("all");
  const [search, setSearch] = useState("");

  const filteredStars = useMemo(() => {
    return stars.filter((s) => {
      const matchesSpectral = spectralClass === "all" || s.spectralClass === spectralClass;
      const matchesCategory = category === "all" || s.category === category;
      const matchesConstellation = constellation === "all" || s.constellation === constellation;
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      return matchesSpectral && matchesCategory && matchesConstellation && matchesSearch;
    });
  }, [spectralClass, category, constellation, search]);

  const selectedStarData = stars.find((s) => s.id === selectedStar);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-star-400 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
            Star Catalog
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Explore the stars of our galaxy and beyond
          </p>
        </div>
        <div className="flex gap-1.5">
          {(["3d", "catalog"] as const).map((mode) => (
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

      <SpectralClassGuide />
      <StellarEvolutionGuide />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <StarFilter
            spectralClass={spectralClass}
            onSpectralClassChange={setSpectralClass}
            category={category}
            onCategoryChange={setCategory}
            constellation={constellation}
            onConstellationChange={setConstellation}
            search={search}
            onSearchChange={setSearch}
          />

          {viewMode === "catalog" && (
            <StarCatalog
              stars={filteredStars}
              onSelect={setSelectedStar}
              selectedStar={selectedStar}
            />
          )}
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="relative">
            <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
              <StarScene
                selectedStar={selectedStar}
                onStarSelect={setSelectedStar}
              />
            </div>

            {selectedStarData && (
              <div className="absolute top-4 right-4 max-h-[calc(100%-2rem)] overflow-y-auto">
                <StarDetailPanel
                  star={selectedStarData}
                  onClose={() => setSelectedStar(null)}
                />
              </div>
            )}

            <div className="absolute bottom-4 left-4">
              <button
                onClick={() => setSelectedStar(null)}
                className="px-3 py-1.5 rounded-lg bg-surface-glass/80 backdrop-blur-md border border-border-default text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                {selectedStar ? "View All Stars" : `${filteredStars.length} stars found`}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HRDiagram onSelectStar={setSelectedStar} selectedStar={selectedStar} />
            <StarComparison />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export { StarCatalogPage };
