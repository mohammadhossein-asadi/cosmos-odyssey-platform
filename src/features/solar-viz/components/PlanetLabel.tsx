"use client";

import { Html } from "@react-three/drei";

interface PlanetLabelProps {
  position: [number, number, number];
  name: string;
  color: string;
  isSelected: boolean;
}

function PlanetLabel({ position, name, color, isSelected }: PlanetLabelProps) {
  return (
    <Html
      position={position}
      center
      distanceFactor={15}
      style={{ pointerEvents: "none" }}
    >
      <div className={`whitespace-nowrap text-center transition-all duration-300 ${isSelected ? "scale-110" : ""}`}>
        <div
          className="px-2 py-0.5 rounded text-[10px] font-medium backdrop-blur-sm"
          style={{
            color: isSelected ? "#fff" : color,
            backgroundColor: isSelected ? `${color}40` : "transparent",
            textShadow: isSelected ? "none" : "0 0 10px rgba(0,0,0,0.8)",
          }}
        >
          {name}
        </div>
      </div>
    </Html>
  );
}

export { PlanetLabel };
