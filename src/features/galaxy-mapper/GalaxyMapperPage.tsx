"use client";

import { useState, useCallback } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GalaxyMapperScene } from "./components/GalaxyMapperScene";
import { MapperControls } from "./components/MapperControls";
import { ClusterInfoPanel } from "./components/ClusterInfoPanel";
import { DistanceScale } from "./components/DistanceScale";
import { ScaleInfo } from "./components/ScaleInfo";
import { MapState, MapScale } from "./types";

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
  });

  const handleStateChange = useCallback((partial: Partial<MapState>) => {
    setState((prev) => ({ ...prev, ...partial }));
  }, []);

  const handleGalaxySelect = useCallback((id: string) => {
    setState((prev) => ({ ...prev, selectedGalaxy: prev.selectedGalaxy === id ? null : id }));
  }, []);

  const handleClusterSelect = useCallback((id: string) => {
    setState((prev) => ({ ...prev, selectedCluster: prev.selectedCluster === id ? null : id }));
  }, []);

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

        {state.selectedCluster && (
          <div className="absolute bottom-4 right-4">
            <ClusterInfoPanel
              clusterId={state.selectedCluster}
              onClose={() => handleStateChange({ selectedCluster: null })}
            />
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {(["local-group", "virgo-supercluster", "cosmic-web", "observable-universe"] as MapScale[]).map((s) => (
          <button
            key={s}
            onClick={() => handleStateChange({ scale: s })}
            className={`p-3 rounded-xl border text-left transition-all ${
              state.scale === s
                ? "bg-plasma-500/10 border-plasma-500/30"
                : "bg-surface-primary border-border-default hover:border-plasma-500/20"
            }`}
          >
            <div className="text-xs font-semibold text-text-primary capitalize font-[family-name:var(--font-display)]">
              {s.replace("-", " ")}
            </div>
            <div className="text-[10px] text-text-muted mt-0.5">
              {s === "local-group" && "10 Mly • 50+ galaxies"}
              {s === "virgo-supercluster" && "110 Mly • 100,000+ galaxies"}
              {s === "cosmic-web" && "Billions of ly • Billions of galaxies"}
              {s === "observable-universe" && "93 Gly • 2 trillion+ galaxies"}
            </div>
          </button>
        ))}
      </div>
    </PageContainer>
  );
}

export { GalaxyMapperPage };
