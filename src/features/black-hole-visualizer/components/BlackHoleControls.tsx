"use client";

import { BlackHoleConfig } from "../types";

interface BlackHoleControlsProps {
  config: BlackHoleConfig;
  onConfigChange: (config: Partial<BlackHoleConfig>) => void;
}

function BlackHoleControls({ config, onConfigChange }: BlackHoleControlsProps) {
  return (
    <div className="absolute left-4 top-4 w-56 bg-surface-glass/80 backdrop-blur-md rounded-xl border border-border-default p-4 overflow-y-auto max-h-[calc(100%-2rem)]">
      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Controls</h3>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-text-secondary mb-1.5 block">Mass</label>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            value={config.mass}
            onChange={(e) => onConfigChange({ mass: Number(e.target.value) })}
            className="w-full accent-plasma-500"
          />
          <div className="text-[10px] text-text-muted text-center mt-1">{config.mass} M☉</div>
        </div>

        <div>
          <label className="text-xs text-text-secondary mb-1.5 block">Spin</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={config.spin}
            onChange={(e) => onConfigChange({ spin: Number(e.target.value) })}
            className="w-full accent-plasma-500"
          />
          <div className="text-[10px] text-text-muted text-center mt-1">{(config.spin * 100).toFixed(0)}%</div>
        </div>

        <div className="h-px bg-border-default" />

        <div className="space-y-2">
          <Toggle label="Accretion Disk" checked={config.showAccretionDisk} onChange={(v) => onConfigChange({ showAccretionDisk: v })} />
          <Toggle label="Event Horizon" checked={config.showEventHorizon} onChange={(v) => onConfigChange({ showEventHorizon: v })} />
          <Toggle label="Relativistic Jets" checked={config.showRelativisticJets} onChange={(v) => onConfigChange({ showRelativisticJets: v })} />
          <Toggle label="Photon Sphere" checked={config.showPhotonSphere} onChange={(v) => onConfigChange({ showPhotonSphere: v })} />
          <Toggle label="Ergosphere" checked={config.showErgosphere} onChange={(v) => onConfigChange({ showErgosphere: v })} />
        </div>

        <div className="h-px bg-border-default" />

        <div>
          <label className="text-xs text-text-secondary mb-1.5 block">Accretion Rate</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={config.accretionRate}
            onChange={(e) => onConfigChange({ accretionRate: Number(e.target.value) })}
            className="w-full accent-plasma-500"
          />
        </div>

        <div>
          <label className="text-xs text-text-secondary mb-1.5 block">Viewing Angle</label>
          <input
            type="range"
            min="0"
            max="90"
            step="5"
            value={config.viewingAngle}
            onChange={(e) => onConfigChange({ viewingAngle: Number(e.target.value) })}
            className="w-full accent-plasma-500"
          />
          <div className="text-[10px] text-text-muted text-center mt-1">{config.viewingAngle}°</div>
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

export { BlackHoleControls };
