"use client";

import { ChartConfig, SkyHemisphere, SkySeason } from "../types";

interface ChartControlsProps {
  config: ChartConfig;
  onConfigChange: (config: Partial<ChartConfig>) => void;
}

function ChartControls({ config, onConfigChange }: ChartControlsProps) {
  const hemispheres: { id: SkyHemisphere; label: string }[] = [
    { id: "northern", label: "Northern" },
    { id: "southern", label: "Southern" },
  ];

  const seasons: { id: SkySeason; label: string; icon: string }[] = [
    { id: "spring", label: "Spring", icon: "🌸" },
    { id: "summer", label: "Summer", icon: "☀️" },
    { id: "autumn", label: "Autumn", icon: "🍂" },
    { id: "winter", label: "Winter", icon: "❄️" },
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Hemisphere</label>
        <div className="flex gap-1">
          {hemispheres.map((h) => (
            <button
              key={h.id}
              onClick={() => onConfigChange({ hemisphere: h.id })}
              className={`flex-1 px-2 py-1.5 rounded text-[10px] font-medium transition-colors ${
                config.hemisphere === h.id
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {h.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Season</label>
        <div className="grid grid-cols-2 gap-1">
          {seasons.map((s) => (
            <button
              key={s.id}
              onClick={() => onConfigChange({ season: s.id })}
              className={`px-2 py-1.5 rounded text-[10px] font-medium transition-colors ${
                config.season === s.id
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-border-default" />

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Magnitude Limit</label>
        <input
          type="range"
          min="1"
          max="6"
          step="0.5"
          value={config.magnitudeLimit}
          onChange={(e) => onConfigChange({ magnitudeLimit: Number(e.target.value) })}
          className="w-full accent-plasma-500"
        />
        <div className="text-[10px] text-text-muted text-center mt-1">Showing stars brighter than {config.magnitudeLimit}</div>
      </div>

      <div className="space-y-1.5">
        <Toggle label="Constellation Lines" checked={config.showConstellations} onChange={(v) => onConfigChange({ showConstellations: v })} />
        <Toggle label="Star Labels" checked={config.showLabels} onChange={(v) => onConfigChange({ showLabels: v })} />
        <Toggle label="Deep Sky Objects" checked={config.showDeepSky} onChange={(v) => onConfigChange({ showDeepSky: v })} />
        <Toggle label="Grid Lines" checked={config.gridLines} onChange={(v) => onConfigChange({ gridLines: v })} />
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

export { ChartControls };
