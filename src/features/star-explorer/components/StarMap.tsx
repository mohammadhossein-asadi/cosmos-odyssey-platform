"use client";

import { cn } from "@/lib/utils";
import { Star } from "@/types/celestial";

interface StarMapProps {
  stars: Star[];
  onSelect: (id: string) => void;
  selectedStar: string | null;
}

function StarMap({ stars, onSelect, selectedStar }: StarMapProps) {
  return (
    <div className="relative bg-cosmic-900 rounded-xl border border-border-default overflow-hidden" style={{ height: "500px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-800 to-cosmic-900" />

      {stars.map((star, i) => {
        const x = 10 + (i * 73 % 80);
        const y = 10 + ((i * 37 + 13) % 80);
        const size = Math.max(2, 8 - star.magnitude);

        return (
          <button
            key={star.id}
            onClick={() => onSelect(star.id)}
            className={cn(
              "absolute rounded-full transition-all duration-200 hover:scale-150",
              selectedStar === star.id ? "ring-2 ring-plasma-400 ring-offset-2 ring-offset-cosmic-900" : ""
            )}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: star.color,
              boxShadow: `0 0 ${size * 2}px ${star.color}`,
            }}
            title={star.name}
          />
        );
      })}

      <div className="absolute bottom-4 left-4 text-xs text-text-muted bg-surface-glass backdrop-blur-sm rounded px-2 py-1">
        {stars.length} stars visible
      </div>
    </div>
  );
}

export { StarMap };
