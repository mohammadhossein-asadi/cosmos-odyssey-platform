"use client";

import { NebulaViewerConfig, NebulaStyle } from "../types";

interface ViewerControlsProps {
  config: NebulaViewerConfig;
  onConfigChange: (config: Partial<NebulaViewerConfig>) => void;
}

function ViewerControls({ config, onConfigChange }: ViewerControlsProps) {
  const styles: { id: NebulaStyle; label: string }[] = [
    { id: "realistic", label: "Realistic" },
    { id: "enhanced", label: "Enhanced" },
    { id: "artistic", label: "Artistic" },
    { id: "infrared", label: "Infrared" },
  ];

  return (
    <div className="absolute left-4 top-4 w-52 bg-surface-glass/80 backdrop-blur-md rounded-xl border border-border-default p-3 overflow-y-auto max-h-[calc(100%-2rem)]">
      <h3 className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Viewer Controls</h3>

      <div className="space-y-3">
        <div>
          <label className="text-[10px] text-text-secondary mb-1 block">Style</label>
          <div className="grid grid-cols-2 gap-1">
            {styles.map((s) => (
              <button
                key={s.id}
                onClick={() => onConfigChange({ style: s.id })}
                className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${
                  config.style === s.id
                    ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                    : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <Slider label="Particles" value={config.particleCount} min={500} max={5000} step={500} onChange={(v) => onConfigChange({ particleCount: v })} />
        <Slider label="Glow" value={config.glowIntensity} min={0} max={2} step={0.1} onChange={(v) => onConfigChange({ glowIntensity: v })} />
        <Slider label="Turbulence" value={config.turbulence} min={0} max={2} step={0.1} onChange={(v) => onConfigChange({ turbulence: v })} />
        <Slider label="Brightness" value={config.brightness} min={0.1} max={2} step={0.1} onChange={(v) => onConfigChange({ brightness: v })} />
        <Slider label="Contrast" value={config.contrast} min={0.5} max={2} step={0.1} onChange={(v) => onConfigChange({ contrast: v })} />
        <Slider label="Rotation" value={config.rotationSpeed} min={0} max={0.1} step={0.005} onChange={(v) => onConfigChange({ rotationSpeed: v })} />

        <div className="h-px bg-border-default" />

        <div className="space-y-1.5">
          <Toggle label="Gas Clouds" checked={config.showGas} onChange={(v) => onConfigChange({ showGas: v })} />
          <Toggle label="Dust Lanes" checked={config.showDust} onChange={(v) => onConfigChange({ showDust: v })} />
          <Toggle label="Stars" checked={config.showStars} onChange={(v) => onConfigChange({ showStars: v })} />
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }: {
  label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between mb-0.5">
        <label className="text-[10px] text-text-secondary">{label}</label>
        <span className="text-[10px] text-text-muted">{typeof value === "number" ? (Number.isInteger(value) ? value : value.toFixed(1)) : value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-plasma-500"
      />
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-[10px] text-text-secondary">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-7 h-4 rounded-full transition-colors ${
          checked ? "bg-plasma-500" : "bg-surface-secondary border border-border-default"
        }`}
      >
        <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${checked ? "translate-x-3.5" : "translate-x-0.5"}`} />
      </button>
    </label>
  );
}

export { ViewerControls };
