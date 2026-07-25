"use client";

import { Html } from "@react-three/drei";

interface ConstellationLabelProps {
  position: [number, number, number];
  name: string;
  abbreviation: string;
  size?: "small" | "large";
}

function ConstellationLabel({ position, name, abbreviation, size = "small" }: ConstellationLabelProps) {
  return (
    <Html position={position} center distanceFactor={15} style={{ pointerEvents: "none" }}>
      <div className="whitespace-nowrap text-center">
        <div className={`font-[family-name:var(--font-display)] font-bold text-plasma-300 ${
          size === "large" ? "text-lg" : "text-xs"
        }`}>
          {name}
        </div>
        <div className="text-[10px] text-text-muted">({abbreviation})</div>
      </div>
    </Html>
  );
}

export { ConstellationLabel };
