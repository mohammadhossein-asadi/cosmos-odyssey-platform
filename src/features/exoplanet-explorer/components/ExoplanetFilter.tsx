"use client";

import { ExoplanetType, DetectionMethod } from "../types";

interface ExoplanetFilterProps {
  type: ExoplanetType | "all";
  onTypeChange: (type: ExoplanetType | "all") => void;
  habitable: boolean | "all";
  onHabitableChange: (habitable: boolean | "all") => void;
  detectionMethod: DetectionMethod | "all";
  onDetectionMethodChange: (method: DetectionMethod | "all") => void;
  search: string;
  onSearchChange: (search: string) => void;
}

function ExoplanetFilter({
  type,
  onTypeChange,
  habitable,
  onHabitableChange,
  detectionMethod,
  onDetectionMethodChange,
  search,
  onSearchChange,
}: ExoplanetFilterProps) {
  const types: (ExoplanetType | "all")[] = ["all", "terrestrial", "super-earth", "sub-neptune", "hot-jupiter"];
  const methods: (DetectionMethod | "all")[] = ["all", "transit", "radial-velocity", "direct-imaging"];
  const habitability: { value: boolean | "all"; label: string }[] = [
    { value: "all", label: "All" },
    { value: true, label: "Habitable" },
    { value: false, label: "Non-habitable" },
  ];

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search exoplanets..."
        className="w-full h-9 px-3 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
      />

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Type</label>
        <div className="flex gap-1 flex-wrap">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => onTypeChange(t)}
              className={`px-2 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                type === t
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {t === "all" ? "All" : t.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Habitability</label>
        <div className="flex gap-1">
          {habitability.map((h) => (
            <button
              key={String(h.value)}
              onClick={() => onHabitableChange(h.value)}
              className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${
                habitable === h.value
                  ? "bg-aurora-500/20 text-aurora-400 border border-aurora-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {h.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Detection Method</label>
        <div className="flex gap-1 flex-wrap">
          {methods.map((m) => (
            <button
              key={m}
              onClick={() => onDetectionMethodChange(m)}
              className={`px-2 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                detectionMethod === m
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {m === "all" ? "All" : m.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ExoplanetFilter };
