"use client";

import { ViewMode } from "../types";

interface VizControlsProps {
  timeScale: number;
  onTimeScaleChange: (scale: number) => void;
  showOrbits: boolean;
  onShowOrbitsChange: (show: boolean) => void;
  showLabels: boolean;
  onShowLabelsChange: (show: boolean) => void;
  showAsteroids: boolean;
  onShowAsteroidsChange: (show: boolean) => void;
  showDwarfPlanets: boolean;
  onShowDwarfPlanetsChange: (show: boolean) => void;
  showGrid: boolean;
  onShowGridChange: (show: boolean) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

function VizControls({
  timeScale,
  onTimeScaleChange,
  showOrbits,
  onShowOrbitsChange,
  showLabels,
  onShowLabelsChange,
  showAsteroids,
  onShowAsteroidsChange,
  showDwarfPlanets,
  onShowDwarfPlanetsChange,
  showGrid,
  onShowGridChange,
  viewMode,
  onViewModeChange,
}: VizControlsProps) {
  return (
    <div className="absolute left-4 top-4 bottom-4 w-56 bg-surface-glass/80 backdrop-blur-md rounded-xl border border-border-default p-4 overflow-y-auto">
      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Controls</h3>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-text-secondary mb-1.5 block">Time Speed</label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={timeScale}
              onChange={(e) => onTimeScaleChange(Number(e.target.value))}
              className="flex-1 accent-plasma-500"
            />
            <span className="text-xs text-text-muted w-8 text-right">{timeScale.toFixed(1)}x</span>
          </div>
          <div className="flex justify-between mt-1">
            {[0, 0.5, 1, 2, 5].map((v) => (
              <button
                key={v}
                onClick={() => onTimeScaleChange(v)}
                className={`text-[10px] px-1.5 py-0.5 rounded ${
                  Math.abs(timeScale - v) < 0.05
                    ? "bg-plasma-500/20 text-plasma-300"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {v}x
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-border-default" />

        <div>
          <label className="text-xs text-text-secondary mb-2 block">View Mode</label>
          <div className="grid grid-cols-3 gap-1">
            {(["realistic", "schematic", "comparison"] as ViewMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => onViewModeChange(mode)}
                className={`px-2 py-1.5 rounded text-[10px] capitalize transition-colors ${
                  viewMode === mode
                    ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                    : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-border-default" />

        <div className="space-y-2">
          <Toggle label="Orbit Lines" checked={showOrbits} onChange={onShowOrbitsChange} />
          <Toggle label="Planet Labels" checked={showLabels} onChange={onShowLabelsChange} />
          <Toggle label="Asteroid Belt" checked={showAsteroids} onChange={onShowAsteroidsChange} />
          <Toggle label="Dwarf Planets" checked={showDwarfPlanets} onChange={onShowDwarfPlanetsChange} />
          <Toggle label="Grid" checked={showGrid} onChange={onShowGridChange} />
        </div>

        <div className="h-px bg-border-default" />

        <div>
          <label className="text-xs text-text-secondary mb-2 block">Quick Select</label>
          <div className="grid grid-cols-4 gap-1">
            {["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"].map((id) => (
              <button
                key={id}
                className="px-1 py-1 rounded text-[10px] text-text-muted hover:text-text-primary hover:bg-surface-glass capitalize transition-colors"
              >
                {id.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-xs text-text-secondary">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-8 h-4.5 rounded-full transition-colors ${
          checked ? "bg-plasma-500" : "bg-surface-secondary border border-border-default"
        }`}
      >
        <div
          className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}

export { VizControls };
