"use client";

import { useState, useCallback, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GalaxyMapperScene } from "./components/GalaxyMapperScene";
import { MapperControls } from "./components/MapperControls";
import { ClusterInfoPanel } from "./components/ClusterInfoPanel";
import { GalaxyInfoPanel } from "./components/GalaxyInfoPanel";
import { GalaxySearch } from "./components/GalaxySearch";
import { ClusterStats } from "./components/ClusterStats";
import { DistanceScale } from "./components/DistanceScale";
import { ScaleInfo } from "./components/ScaleInfo";
import { localGroupGalaxies, virgoClusterGalaxies, comaClusterGalaxies } from "./data/galaxies";
import { MapState, MapScale, GalaxyPosition } from "./types";

function GalaxyMapperPage() {
  const [state, setState] = useState<MapState>({
    scale: "local-group",
    selectedGalaxy: null,
    selectedCluster: null,
    showRoutes: true,
    showClusters: true,
    showFilaments: true,
    showLabels: true,
    rotationSpeed: 0.02,
    search: "",
    filterType: "all",
  });

  const allGalaxies = useMemo(() => [...localGroupGalaxies, ...virgoClusterGalaxies, ...comaClusterGalaxies], []);
  const selectedGalaxyData = useMemo(() => allGalaxies.find((g) => g.id === state.selectedGalaxy), [allGalaxies, state.selectedGalaxy]);

  const handleStateChange = useCallback((partial: Partial<MapState>) => {
    setState((prev) => ({ ...prev, ...partial }));
  }, []);

  const handleGalaxySelect = useCallback((id: string) => {
    setState((prev) => ({ ...prev, selectedGalaxy: prev.selectedGalaxy === id ? null : id }));
  }, []);

  const handleClusterSelect = useCallback((id: string) => {
    setState((prev) => ({ ...prev, selectedCluster: prev.selectedCluster === id ? null : id }));
  }, []);

  const scales: { id: MapScale; label: string; description: string; icon: string }[] = [
    { id: "local-group", label: "Local Group", description: "10 Mly • 50+ galaxies", icon: "🌍" },
    { id: "virgo-supercluster", label: "Virgo Supercluster", description: "110 Mly • 100,000+ galaxies", icon: "🌌" },
    { id: "cosmic-web", label: "Cosmic Web", description: "Billions of ly • Billions of galaxies", icon: "🕸️" },
    { id: "observable-universe", label: "Observable Universe", description: "93 Gly • 2 trillion+ galaxies", icon: "🔭" },
  ];

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-cosmic-200 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
            Galaxy Mapper
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Navigate the cosmic web from local groups to the observable universe
          </p>
        </div>
        <div className="w-48">
          <GalaxySearch onSelect={handleGalaxySelect} selectedGalaxy={state.selectedGalaxy} />
        </div>
      </div>

      <div className="relative">
        <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
          <GalaxyMapperScene
            state={state}
            onGalaxySelect={handleGalaxySelect}
            onClusterSelect={handleClusterSelect}
          />
        </div>

        <MapperControls state={state} onStateChange={handleStateChange} />
        <DistanceScale scale={state.scale} />
        <ScaleInfo scale={state.scale} />

        {selectedGalaxyData && (
          <div className="absolute top-4 right-4">
            <GalaxyInfoPanel galaxy={selectedGalaxyData} onClose={() => handleStateChange({ selectedGalaxy: null })} />
          </div>
        )}

        {state.selectedCluster && !selectedGalaxyData && (
          <div className="absolute bottom-4 right-4">
            <ClusterInfoPanel clusterId={state.selectedCluster} onClose={() => handleStateChange({ selectedCluster: null })} />
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-3">
        {scales.map((s) => (
          <button
            key={s.id}
            onClick={() => handleStateChange({ scale: s.id })}
            className={`p-3 rounded-xl border text-left transition-all ${
              state.scale === s.id
                ? "bg-plasma-500/10 border-plasma-500/30"
                : "bg-surface-primary border-border-default hover:border-plasma-500/20"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{s.icon}</span>
              <div>
                <div className="text-xs font-semibold text-text-primary font-[family-name:var(--font-display)]">{s.label}</div>
                <div className="text-[10px] text-text-muted">{s.description}</div>
              </div>
            </div>
          </button>
        ))}
        <div className="hidden md:block">
          <ClusterStats />
        </div>
      </div>
    </PageContainer>
  );
}

export { GalaxyMapperPage };
