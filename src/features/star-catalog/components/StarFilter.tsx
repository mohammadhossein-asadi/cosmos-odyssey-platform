"use client";

import { SpectralClass, StarCategory } from "../types";

interface StarFilterProps {
  spectralClass: SpectralClass | "all";
  onSpectralClassChange: (cls: SpectralClass | "all") => void;
  category: StarCategory | "all";
  onCategoryChange: (cat: StarCategory | "all") => void;
  constellation: string;
  onConstellationChange: (c: string) => void;
  search: string;
  onSearchChange: (s: string) => void;
}

const constellations = ["All", "Orion", "Canis Major", "Lyra", "Boötes", "Canis Minor", "Aquila", "Virgo", "Scorpius", "Gemini", "Cygnus", "Auriga", "Ursa Minor", "Centaurus", "Taurus"];

function StarFilter({
  spectralClass,
  onSpectralClassChange,
  category,
  onCategoryChange,
  constellation,
  onConstellationChange,
  search,
  onSearchChange,
}: StarFilterProps) {
  const spectralClasses: (SpectralClass | "all")[] = ["all", "O", "B", "A", "F", "G", "K", "M"];
  const categories: (StarCategory | "all")[] = ["all", "main-sequence", "giant", "supergiant", "binary", "variable"];

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search stars..."
        className="w-full h-9 px-3 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
      />

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Spectral Class</label>
        <div className="flex gap-1 flex-wrap">
          {spectralClasses.map((cls) => (
            <button
              key={cls}
              onClick={() => onSpectralClassChange(cls)}
              className={`w-7 h-7 rounded text-xs font-bold transition-colors ${
                spectralClass === cls
                  ? "text-white"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary"
              }`}
              style={spectralClass === cls ? { backgroundColor: getSpectralColor(cls) } : undefined}
            >
              {cls === "all" ? "★" : cls}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Category</label>
        <div className="flex gap-1 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-2 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                category === cat
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {cat === "all" ? "All" : cat.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5 block">Constellation</label>
        <select
          value={constellation}
          onChange={(e) => onConstellationChange(e.target.value)}
          className="w-full h-8 px-2 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-xs focus:outline-none focus:ring-2 focus:ring-plasma-500"
        >
          {constellations.map((c) => (
            <option key={c} value={c === "All" ? "all" : c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function getSpectralColor(cls: string): string {
  const colors: Record<string, string> = {
    O: "#9bb0ff", B: "#aabfff", A: "#cad7ff", F: "#f8f7ff",
    G: "#fff4ea", K: "#ffd2a1", M: "#ffcc6f",
  };
  return colors[cls] || "#7c5cbf";
}

export { StarFilter };
