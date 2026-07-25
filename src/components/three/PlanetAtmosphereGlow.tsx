"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PlanetAtmosphereGlowProps {
  radius: number;
  color: string;
  intensity?: number;
}

function PlanetAtmosphereGlow({ radius, color, intensity = 0.2 }: PlanetAtmosphereGlowProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 0.8) * 0.05 + 1.15;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={intensity}
        side={THREE.BackSide}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export { PlanetAtmosphereGlow };
