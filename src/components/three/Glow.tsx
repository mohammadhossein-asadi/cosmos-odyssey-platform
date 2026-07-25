"use client";

import * as THREE from "three";

interface GlowProps {
  radius: number;
  color?: string;
  intensity?: number;
  power?: number;
}

function Glow({
  radius,
  color = "#ffd93d",
  intensity = 1,
  power = 2,
}: GlowProps) {
  return (
    <sprite scale={[radius * 4, radius * 4, 1]}>
      <spriteMaterial
        color={color}
        transparent
        opacity={0.3}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  );
}

export { Glow, type GlowProps };
