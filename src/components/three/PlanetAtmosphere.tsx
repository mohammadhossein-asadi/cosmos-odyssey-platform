"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PlanetAtmosphereProps {
  radius: number;
  color?: string;
  intensity?: number;
}

function PlanetAtmosphere({ radius, color = "#4a90d9", intensity = 0.3 }: PlanetAtmosphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      meshRef.current.scale.setScalar(1.15 + pulse);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 64, 64]} />
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

export { PlanetAtmosphere };
