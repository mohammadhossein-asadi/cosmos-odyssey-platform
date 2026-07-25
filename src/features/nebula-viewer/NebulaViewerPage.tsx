"use client";

import { useState, useCallback } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ViewerScene } from "./components/ViewerScene";
import { ViewerControls } from "./components/ViewerControls";
import { NebulaInfoPanel } from "./components/NebulaInfoPanel";
import { NebulaSelector } from "./components/NebulaSelector";
import { FactsPanel } from "./components/FactsPanel";
import { visualNebulae } from "./data/nebulae";
import { NebulaViewerConfig } from "./types";

const defaultConfig: NebulaViewerConfig = {
  style: "realistic",
  particleCount: 3000,
  glowIntensity: 0.8,
  turbulence: 0.5,
  rotationSpeed: 0.01,
  colorShift: 0,
  brightness: 1,
  contrast: 1,
  showStars: true,
  showDust: true,
  showGas: true,
  cameraDistance: 10,
};

function NebulaViewerPage() {
  const [selectedNebula, setSelectedNebula] = useState("orion");
  const [config, setConfig] = useState<NebulaViewerConfig>(defaultConfig);
  const [showInfo, setShowInfo] = useState(true);
  const [showFacts, setShowFacts] = useState(true);

  const handleConfigChange = useCallback((partial: Partial<NebulaViewerConfig>) => {
    setConfig((prev) => ({ ...prev, ...partial }));
  }, []);

  const currentNebula = visualNebulae.find((n) => n.id === selectedNebula) || visualNebulae[0];

  return (
    <div className="min-h-screen bg-cosmic-900 relative">
      <div className="fixed top-0 left-0 right-0 z-30 bg-cosmic-900/80 backdrop-blur-md border-b border-border-default">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-nebula-500 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
              Nebula Viewer
            </h1>
            <p className="text-[10px] text-text-muted">Immersive 3D nebula visualization</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className={`px-2 py-1 rounded text-[10px] transition-colors ${
                showInfo ? "bg-plasma-500/20 text-plasma-300" : "text-text-muted hover:text-text-secondary"
              }`}
            >
              Info
            </button>
            <button
              onClick={() => setShowFacts(!showFacts)}
              className={`px-2 py-1 rounded text-[10px] transition-colors ${
                showFacts ? "bg-plasma-500/20 text-plasma-300" : "text-text-muted hover:text-text-secondary"
              }`}
            >
              Facts
            </button>
            <Link href="/nebula-explorer" className="px-2 py-1 rounded text-[10px] text-text-muted hover:text-text-secondary">
              Full Explorer →
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen pt-14">
        <ViewerScene nebula={currentNebula} config={config} />
      </div>

      <ViewerControls config={config} onConfigChange={handleConfigChange} />

      {showInfo && <NebulaInfoPanel nebula={currentNebula} />}
      {showFacts && <FactsPanel nebula={currentNebula} />}

      <NebulaSelector
        nebulae={visualNebulae}
        selected={selectedNebula}
        onSelect={setSelectedNebula}
      />
    </div>
  );
}

import Link from "next/link";

export { NebulaViewerPage };
