"use client";

import { MapScale } from "../types";

interface DistanceScaleProps {
  scale: MapScale;
}

const scaleConfig: Record<MapScale, { label: string; unit: string; marks: { value: number; label: string }[] }> = {
  "local-group": {
    label: "Local Group",
    unit: "Mly",
    marks: [
      { value: 0, label: "0" },
      { value: 25, label: "0.25" },
      { value: 50, label: "0.5" },
      { value: 100, label: "1" },
    ],
  },
  "virgo-supercluster": {
    label: "Virgo Supercluster",
    unit: "Mly",
    marks: [
      { value: 0, label: "0" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 100, label: "100" },
    ],
  },
  "cosmic-web": {
    label: "Cosmic Web",
    unit: "Gly",
    marks: [
      { value: 0, label: "0" },
      { value: 25, label: "1" },
      { value: 50, label: "2" },
      { value: 100, label: "4" },
    ],
  },
  "observable-universe": {
    label: "Observable Universe",
    unit: "Gly",
    marks: [
      { value: 0, label: "0" },
      { value: 25, label: "10" },
      { value: 50, label: "25" },
      { value: 100, label: "46.5" },
    ],
  },
};

function DistanceScale({ scale }: DistanceScaleProps) {
  const config = scaleConfig[scale];

  return (
    <div className="absolute bottom-4 left-4 bg-surface-glass/80 backdrop-blur-md rounded-lg px-3 py-2 border border-border-default">
      <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{config.label}</div>
      <div className="flex items-end gap-0.5">
        <div className="w-24 h-1 bg-gradient-to-r from-plasma-500 to-aurora-400 rounded" />
      </div>
      <div className="flex justify-between mt-1">
        {config.marks.map((mark) => (
          <span key={mark.value} className="text-[8px] text-text-muted">{mark.label}</span>
        ))}
      </div>
      <div className="text-[8px] text-text-muted text-center mt-0.5">{config.unit}</div>
    </div>
  );
}

export { DistanceScale };
