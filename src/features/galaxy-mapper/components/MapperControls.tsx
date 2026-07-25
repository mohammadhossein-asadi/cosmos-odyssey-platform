"use client";

import { MapState, MapScale } from "../types";

interface MapperControlsProps {
  state: MapState;
  onStateChange: (state: Partial<MapState>) => void;
}

function MapperControls({ state, onStateChange }: MapperControlsProps) {
  const scales: { id: MapScale; label: string; description: string }[] = [
    { id: "local-group", label: "Local Group", description: "10 Mly" },
    { id: "virgo-supercluster", label: "Virgo Supercluster", description: "100 Mly" },
    { id: "cosmic-web", label: "Cosmic Web", description: "1 Gly" },
    { id: "observable-universe", label: "Observable Universe", description: "46.5 Gly" },
  ];

  return (
    <div className="absolute left-4 top-4 w-56 bg-surface-glass/80 backdrop-blur-md rounded-xl border border-border-default p-4 overflow-y-auto max-h-[calc(100%-2rem)]">
      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Map Controls</h3>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-text-secondary mb-2 block">Scale</label>
          <div className="space-y-1">
            {scales.map((s) => (
              <button
                key={s.id}
                onClick={() => onStateChange({ scale: s.id })}
                className={`w-full px-3 py-2 rounded-lg text-left transition-all ${
                  state.scale === s.id
                    ? "bg-plasma-500/20 border border-plasma-500/30 text-plasma-300"
                    : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
                }`}
              >
                <div className="text-xs font-medium">{s.label}</div>
                <div className="text-[10px] text-text-muted">{s.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-border-default" />

        <div className="space-y-2">
          <Toggle label="Galaxy Clusters" checked={state.showClusters} onChange={(v) => onStateChange({ showClusters: v })} />
          <Toggle label="Cosmic Filaments" checked={state.showFilaments} onChange={(v) => onStateChange({ showFilaments: v })} />
          <Toggle label="Travel Routes" checked={state.showRoutes} onChange={(v) => onStateChange({ showRoutes: v })} />
          <Toggle label="Labels" checked={state.showLabels} onChange={(v) => onStateChange({ showLabels: v })} />
        </div>

        <div className="h-px bg-border-default" />

        <div>
          <label className="text-xs text-text-secondary mb-2 block">Rotation Speed</label>
          <input
            type="range"
            min="0"
            max="0.1"
            step="0.005"
            value={state.rotationSpeed}
            onChange={(e) => onStateChange({ rotationSpeed: Number(e.target.value) })}
            className="w-full accent-plasma-500"
          />
          <div className="text-[10px] text-text-muted text-center mt-1">{(state.rotationSpeed * 1000).toFixed(0)}</div>
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
        className={`relative w-8 h-4 rounded-full transition-colors ${
          checked ? "bg-plasma-500" : "bg-surface-secondary border border-border-default"
        }`}
      >
        <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${checked ? "translate-x-4" : "translate-x-0.5"}`} />
      </button>
    </label>
  );
}

export { MapperControls };
