"use client";

import { SpectralClass } from "../types";

const spectralData: { class: SpectralClass; color: string; temperature: string; description: string; examples: string }[] = [
  { class: "O", color: "#9bb0ff", temperature: "> 30,000 K", description: "Blue, extremely hot, massive, rare", examples: "Naos, Alnitak Aa" },
  { class: "B", color: "#aabfff", temperature: "10,000-30,000 K", description: "Blue-white, very luminous", examples: "Rigel, Spica, Antares" },
  { class: "A", color: "#cad7ff", temperature: "7,500-10,000 K", description: "White, strong hydrogen lines", examples: "Sirius, Vega, Altair" },
  { class: "F", color: "#f8f7ff", temperature: "6,000-7,500 K", description: "Yellow-white, moderate mass", examples: "Polaris, Procyon" },
  { class: "G", color: "#fff4ea", temperature: "5,200-6,000 K", description: "Yellow, solar-type stars", examples: "Sun, Alpha Centauri, Capella" },
  { class: "K", color: "#ffd2a1", temperature: "3,700-5,200 K", description: "Orange, cooler giants", examples: "Arcturus, Aldebaran, Pollux" },
  { class: "M", color: "#ffcc6f", temperature: "< 3,700 K", description: "Red, cool and common", examples: "Betelgeuse, Antares, Proxima" },
];

function SpectralClassGuide() {
  return (
    <div className="grid grid-cols-7 gap-1">
      {spectralData.map((sd) => (
        <div
          key={sd.class}
          className="p-2 rounded-lg text-center"
          style={{
            backgroundColor: `${sd.color}15`,
            border: `1px solid ${sd.color}30`,
          }}
        >
          <div
            className="w-6 h-6 rounded-full mx-auto mb-1"
            style={{ backgroundColor: sd.color, boxShadow: `0 0 8px ${sd.color}60` }}
          />
          <div className="text-xs font-bold" style={{ color: sd.color }}>{sd.class}</div>
          <div className="text-[8px] text-text-muted mt-0.5">{sd.temperature}</div>
        </div>
      ))}
    </div>
  );
}

export { SpectralClassGuide };
