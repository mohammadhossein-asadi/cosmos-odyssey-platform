"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AtmosphereProps {
  radius: number;
  color?: string;
  opacity?: number;
  intensity?: number;
}

function Atmosphere({
  radius,
  color = "#4a90d9",
  opacity = 0.15,
  intensity = 1,
}: AtmosphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius * 1.15, 64, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export { Atmosphere, type AtmosphereProps };
