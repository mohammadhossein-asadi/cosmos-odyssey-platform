"use client";

import { useState, useCallback } from "react";
import { SolarSystemScene } from "@/components/space/SolarSystemScene";
import { PlanetSelector } from "@/components/space/PlanetSelector";
import { PlanetDetailPanel } from "@/components/space/PlanetDetailPanel";
import { PageContainer } from "@/components/layout/PageContainer";
import { DwarfPlanetPanel } from "./components/DwarfPlanetPanel";
import { PlanetComparison } from "./components/PlanetComparison";
import { PlanetFacts } from "./components/PlanetFacts";
import { MissionTracker } from "./components/MissionTracker";
import { usePlanetData } from "./hooks/usePlanetData";

function SolarSystemPage() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [orbitSpeed, setOrbitSpeed] = useState(1);
  const [showOrbits, setShowOrbits] = useState(true);
  const [showLabels, setShowLabels] = useState(false);
  const { planets, getNextPlanet, getPrevPlanet, totalMoons } = usePlanetData();

  const handleSelect = useCallback((id: string) => {
    setSelectedPlanet((prev) => (prev === id ? null : id));
  }, []);

  const handleNext = useCallback(() => {
    if (selectedPlanet) {
      const next = getNextPlanet(selectedPlanet);
      if (next) setSelectedPlanet(next.id);
    }
  }, [selectedPlanet, getNextPlanet]);

  const handlePrev = useCallback(() => {
    if (selectedPlanet) {
      const prev = getPrevPlanet(selectedPlanet);
      if (prev) setSelectedPlanet(prev.id);
    }
  }, [selectedPlanet, getPrevPlanet]);

  const currentIndex = selectedPlanet ? planets.findIndex((p) => p.id === selectedPlanet) : -1;

  return (
    <PageContainer>
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-3 bg-gradient-to-r from-plasma-300 via-star-400 to-aurora-400 bg-clip-text text-transparent">
          Solar System Explorer
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto text-sm">
          Navigate through our cosmic neighborhood. Click any planet to explore.
        </p>
      </div>

      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-xs text-text-muted">Speed</label>
            <input
              type="range"
              min="0"
              max="3"
              step="0.1"
              value={orbitSpeed}
              onChange={(e) => setOrbitSpeed(Number(e.target.value))}
              className="w-20 accent-plasma-500"
            />
            <span className="text-xs text-text-muted w-8">{orbitSpeed.toFixed(1)}x</span>
          </div>
          <button
            onClick={() => setShowOrbits(!showOrbits)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
              showOrbits
                ? "bg-plasma-500/20 border-plasma-500/30 text-plasma-300"
                : "bg-surface-glass border-border-default text-text-muted"
            }`}
          >
            Orbits {showOrbits ? "ON" : "OFF"}
          </button>
          <button
            onClick={() => setShowLabels(!showLabels)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
              showLabels
                ? "bg-plasma-500/20 border-plasma-500/30 text-plasma-300"
                : "bg-surface-glass border-border-default text-text-muted"
            }`}
          >
            Labels {showLabels ? "ON" : "OFF"}
          </button>
        </div>
        <div className="text-xs text-text-muted">
          {planets.length} planets • {totalMoons} moons • Click to explore
        </div>
      </div>

      <div className="relative">
        <div className="h-[450px] md:h-[550px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
          <SolarSystemScene
            selectedPlanet={selectedPlanet}
            onPlanetSelect={handleSelect}
            orbitSpeed={orbitSpeed}
            showOrbits={showOrbits}
            showLabels={showLabels}
          />
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <PlanetSelector selectedPlanet={selectedPlanet} onSelect={handleSelect} />
        </div>
      </div>

      {selectedPlanet && (
        <div className="mt-6 flex justify-center">
          <PlanetDetailPanel
            planetId={selectedPlanet}
            onClose={() => setSelectedPlanet(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={currentIndex < planets.length - 1}
            hasPrev={currentIndex > 0}
          />
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanetComparison />
        <DwarfPlanetPanel />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanetFacts />
        <MissionTracker />
      </div>
    </PageContainer>
  );
}

export { SolarSystemPage };
