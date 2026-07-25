"use client";

import { useState, useCallback } from "react";
import { SolarVizScene } from "./components/SolarVizScene";
import { VizControls } from "./components/VizControls";
import { VizInfoPanel } from "./components/VizInfoPanel";
import { PlanetComparison } from "./components/PlanetComparison";
import { ScaleIndicator } from "./components/ScaleIndicator";
import { PageContainer } from "@/components/layout/PageContainer";
import { useVizState } from "./hooks/useVizState";

function SolarVizPage() {
  const {
    selectedPlanet,
    timeScale,
    showOrbits,
    showLabels,
    showAsteroids,
    showDwarfPlanets,
    showGrid,
    viewMode,
    setSelectedPlanet,
    setTimeScale,
    setShowOrbits,
    setShowLabels,
    setShowAsteroids,
    setShowDwarfPlanets,
    setShowGrid,
    setViewMode,
  } = useVizState();

  const [showComparison, setShowComparison] = useState(false);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-plasma-300 via-star-400 to-aurora-400 bg-clip-text text-transparent">
            Solar System Visualization
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Interactive 3D visualization of our cosmic neighborhood
          </p>
        </div>
        <button
          onClick={() => setShowComparison(!showComparison)}
          className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
            showComparison
              ? "bg-plasma-500/20 border-plasma-500/30 text-plasma-300"
              : "bg-surface-glass border-border-default text-text-secondary hover:text-text-primary"
          }`}
        >
          {showComparison ? "Hide Comparison" : "Compare Planets"}
        </button>
      </div>

      <div className="relative">
        <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
          <SolarVizScene
            selectedPlanet={selectedPlanet}
            onPlanetSelect={setSelectedPlanet}
            timeScale={timeScale}
            showOrbits={showOrbits}
            showLabels={showLabels}
            showAsteroids={showAsteroids}
            showDwarfPlanets={showDwarfPlanets}
            showGrid={showGrid}
            viewMode={viewMode}
          />
        </div>

        <VizControls
          timeScale={timeScale}
          onTimeScaleChange={setTimeScale}
          showOrbits={showOrbits}
          onShowOrbitsChange={setShowOrbits}
          showLabels={showLabels}
          onShowLabelsChange={setShowLabels}
          showAsteroids={showAsteroids}
          onShowAsteroidsChange={setShowAsteroids}
          showDwarfPlanets={showDwarfPlanets}
          onShowDwarfPlanetsChange={setShowDwarfPlanets}
          showGrid={showGrid}
          onShowGridChange={setShowGrid}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {selectedPlanet && (
          <VizInfoPanel
            planetId={selectedPlanet}
            onClose={() => setSelectedPlanet(null)}
          />
        )}

        <ScaleIndicator />
      </div>

      {showComparison && (
        <div className="mt-6">
          <PlanetComparison />
        </div>
      )}
    </PageContainer>
  );
}

export { SolarVizPage };
