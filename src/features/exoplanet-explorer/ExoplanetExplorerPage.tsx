"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ExoplanetScene } from "./components/ExoplanetScene";
import { ExoplanetCatalog } from "./components/ExoplanetCatalog";
import { ExoplanetDetailPanel } from "./components/ExoplanetDetailPanel";
import { ExoplanetFilter } from "./components/ExoplanetFilter";
import { DetectionMethodsGuide } from "./components/DetectionMethodsGuide";
import { HabitabilityZonesGuide } from "./components/HabitabilityZonesGuide";
import { exoplanets } from "./data/exoplanets";
import { ExoplanetType, DetectionMethod } from "./types";

function ExoplanetExplorerPage() {
  const [viewMode, setViewMode] = useState<"3d" | "catalog">("catalog");
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [type, setType] = useState<ExoplanetType | "all">("all");
  const [habitable, setHabitable] = useState<boolean | "all">("all");
  const [detectionMethod, setDetectionMethod] = useState<DetectionMethod | "all">("all");
  const [search, setSearch] = useState("");
  const [showHabitableZone, setShowHabitableZone] = useState(true);

  const filteredPlanets = useMemo(() => {
    return exoplanets.filter((p) => {
      const matchesType = type === "all" || p.type === type;
      const matchesHabitable = habitable === "all" || p.habitable === habitable;
      const matchesMethod = detectionMethod === "all" || p.discoveryMethod === detectionMethod;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.hostStar.toLowerCase().includes(search.toLowerCase());
      return matchesType && matchesHabitable && matchesMethod && matchesSearch;
    });
  }, [type, habitable, detectionMethod, search]);

  const selectedPlanetData = exoplanets.find((p) => p.id === selectedPlanet);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-aurora-400 via-plasma-300 to-star-400 bg-clip-text text-transparent">
            Exoplanet Explorer
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Discover worlds beyond our solar system
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

      <DetectionMethodsGuide />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <ExoplanetFilter
            type={type}
            onTypeChange={setType}
            habitable={habitable}
            onHabitableChange={setHabitable}
            detectionMethod={detectionMethod}
            onDetectionMethodChange={setDetectionMethod}
            search={search}
            onSearchChange={setSearch}
          />

          {viewMode === "catalog" && (
            <ExoplanetCatalog
              planets={filteredPlanets}
              onSelect={setSelectedPlanet}
              selectedPlanet={selectedPlanet}
            />
          )}
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="relative">
            <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
              <ExoplanetScene
                selectedPlanet={selectedPlanet}
                onPlanetSelect={setSelectedPlanet}
                showHabitableZone={showHabitableZone}
              />
            </div>

            {selectedPlanetData && (
              <div className="absolute top-4 right-4 max-h-[calc(100%-2rem)] overflow-y-auto">
                <ExoplanetDetailPanel
                  planet={selectedPlanetData}
                  onClose={() => setSelectedPlanet(null)}
                />
              </div>
            )}

            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                onClick={() => setSelectedPlanet(null)}
                className="px-3 py-1.5 rounded-lg bg-surface-glass/80 backdrop-blur-md border border-border-default text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                {selectedPlanet ? "View System" : `${filteredPlanets.length} exoplanets`}
              </button>
              <button
                onClick={() => setShowHabitableZone(!showHabitableZone)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                  showHabitableZone
                    ? "bg-aurora-500/20 text-aurora-400 border border-aurora-500/30"
                    : "bg-surface-glass/80 text-text-muted border border-border-default"
                }`}
              >
                Habitable Zone
              </button>
            </div>
          </div>

          <HabitabilityZonesGuide />

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-surface-primary rounded-xl border border-border-default p-4 text-center">
              <div className="text-2xl font-bold text-aurora-400 font-[family-name:var(--font-display)]">
                {exoplanets.filter((p) => p.habitable).length}
              </div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider">Habitable Zone</div>
            </div>
            <div className="bg-surface-primary rounded-xl border border-border-default p-4 text-center">
              <div className="text-2xl font-bold text-plasma-300 font-[family-name:var(--font-display)]">
                {exoplanets.filter((p) => p.type === "terrestrial").length}
              </div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider">Terrestrial</div>
            </div>
            <div className="bg-surface-primary rounded-xl border border-border-default p-4 text-center">
              <div className="text-2xl font-bold text-star-400 font-[family-name:var(--font-display)]">
                {exoplanets.filter((p) => p.type === "hot-jupiter").length}
              </div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider">Hot Jupiters</div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export { ExoplanetExplorerPage };
