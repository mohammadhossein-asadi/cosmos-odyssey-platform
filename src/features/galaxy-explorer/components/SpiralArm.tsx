"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SpiralArmProps {
  startAngle: number;
  length: number;
  tightness: number;
  color: string;
  particleCount?: number;
}

function SpiralArm({
  startAngle,
  length,
  tightness,
  color,
  particleCount = 500,
}: SpiralArmProps) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const baseColor = new THREE.Color(color);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const t = Math.random();
      const distance = t * length;
      const angle = startAngle + distance * tightness;
      const spread = distance * 0.12 + 0.05;

      pos[i3] = Math.cos(angle) * distance + (Math.random() - 0.5) * spread;
      pos[i3 + 1] = (Math.random() - 0.5) * spread * 0.2;
      pos[i3 + 2] = Math.sin(angle) * distance + (Math.random() - 0.5) * spread;

      const brightness = 0.7 + Math.random() * 0.3;
      col[i3] = baseColor.r * brightness;
      col[i3 + 1] = baseColor.g * brightness;
      col[i3 + 2] = baseColor.b * brightness;
    }

    return { positions: pos, colors: col };
  }, [startAngle, length, tightness, color, particleCount]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={particleCount} itemSize={3} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={particleCount} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export { SpiralArm };
