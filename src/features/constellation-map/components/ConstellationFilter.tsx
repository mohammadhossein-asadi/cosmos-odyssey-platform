"use client";

import { Season, Hemisphere } from "../types";

interface ConstellationFilterProps {
  season: Season | "all";
  onSeasonChange: (season: Season | "all") => void;
  hemisphere: Hemisphere | "all";
  onHemisphereChange: (hemisphere: Hemisphere | "all") => void;
  search: string;
  onSearchChange: (search: string) => void;
  showLines: boolean;
  onShowLinesChange: (show: boolean) => void;
  showLabels: boolean;
  onShowLabelsChange: (show: boolean) => void;
  showGrid: boolean;
  onShowGridChange: (show: boolean) => void;
}

function ConstellationFilter({
  season,
  onSeasonChange,
  hemisphere,
  onHemisphereChange,
  search,
  onSearchChange,
  showLines,
  onShowLinesChange,
  showLabels,
  onShowLabelsChange,
  showGrid,
  onShowGridChange,
}: ConstellationFilterProps) {
  const seasons: (Season | "all")[] = ["all", "spring", "summer", "autumn", "winter"];
  const hemispheres: (Hemisphere | "all")[] = ["all", "northern", "southern", "both"];

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search constellations..."
        className="w-full h-9 px-3 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
      />

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Season</label>
        <div className="flex gap-1 flex-wrap">
          {seasons.map((s) => (
            <button
              key={s}
              onClick={() => onSeasonChange(s)}
              className={`px-2.5 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                season === s
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Hemisphere</label>
        <div className="flex gap-1 flex-wrap">
          {hemispheres.map((h) => (
            <button
              key={h}
              onClick={() => onHemisphereChange(h)}
              className={`px-2.5 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                hemisphere === h
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Display</label>
        <div className="space-y-1.5">
          <Toggle label="Constellation Lines" checked={showLines} onChange={onShowLinesChange} />
          <Toggle label="Star Labels" checked={showLabels} onChange={onShowLabelsChange} />
          <Toggle label="Sky Grid" checked={showGrid} onChange={onShowGridChange} />
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
        <div
          className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4.5" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}

export { ConstellationFilter };
