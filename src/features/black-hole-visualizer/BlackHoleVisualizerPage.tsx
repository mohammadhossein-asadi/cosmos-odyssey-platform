"use client";

import { useState, useCallback } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { BlackHoleScene } from "./components/BlackHoleScene";
import { BlackHoleControls } from "./components/BlackHoleControls";
import { BlackHoleCatalog } from "./components/BlackHoleCatalog";
import { BlackHoleDetailPanel } from "./components/BlackHoleDetailPanel";
import { TimeDilationCalculator } from "./components/TimeDilationCalculator";
import { BlackHoleTypesGuide } from "./components/BlackHoleTypesGuide";
import { SpaghettificationGuide } from "./components/SpaghettificationGuide";
import { blackHoles } from "./data/black-holes";
import { BlackHoleConfig } from "./types";

function BlackHoleVisualizerPage() {
  const [selectedBlackHole, setSelectedBlackHole] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "catalog">("catalog");
  const [config, setConfig] = useState<BlackHoleConfig>({
    mass: 10,
    spin: 0.5,
    showAccretionDisk: true,
    showEventHorizon: true,
    showRelativisticJets: false,
    showPhotonSphere: true,
    showErgosphere: false,
    accretionRate: 0.5,
    viewingAngle: 30,
  });

  const handleConfigChange = useCallback((partial: Partial<BlackHoleConfig>) => {
    setConfig((prev) => ({ ...prev, ...partial }));
  }, []);

  const selectedBH = blackHoles.find((bh) => bh.id === selectedBlackHole);

  const handleSelectBH = useCallback((id: string) => {
    setSelectedBlackHole(id);
    const bh = blackHoles.find((b) => b.id === id);
    if (bh) {
      setConfig((prev) => ({
        ...prev,
        mass: Math.min(100, Math.max(1, Math.log10(bh.mass) * 10)),
        showRelativisticJets: bh.state === "quasar" || bh.state === "feeding",
      }));
    }
  }, []);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-cosmic-200 via-plasma-300 to-nebula-500 bg-clip-text text-transparent">
            Black Hole Visualizer
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Explore the most extreme objects in the universe where gravity warps space and time
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

      <BlackHoleTypesGuide />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          {viewMode === "3d" && (
            <BlackHoleControls config={config} onConfigChange={handleConfigChange} />
          )}

          {viewMode === "catalog" && (
            <BlackHoleCatalog
              blackHoles={blackHoles}
              onSelect={handleSelectBH}
              selectedBlackHole={selectedBlackHole}
            />
          )}
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="relative">
            <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
              <BlackHoleScene
                config={config}
                accretionColor={selectedBH?.accretionColor || "#ff6b00"}
              />
            </div>

            {selectedBH && (
              <div className="absolute top-4 right-4 max-h-[calc(100%-2rem)] overflow-y-auto">
                <BlackHoleDetailPanel
                  blackHole={selectedBH}
                  onClose={() => setSelectedBlackHole(null)}
                />
              </div>
            )}

            <div className="absolute bottom-4 left-4">
              <button
                onClick={() => setSelectedBlackHole(null)}
                className="px-3 py-1.5 rounded-lg bg-surface-glass/80 backdrop-blur-md border border-border-default text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                {selectedBlackHole ? "View Custom" : `${blackHoles.length} black holes cataloged`}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TimeDilationCalculator />
            <SpaghettificationGuide />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export { BlackHoleVisualizerPage };
