"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ExoplanetData } from "../types";

interface ExoplanetVisualizationProps {
  planet: ExoplanetData;
  size?: number;
  showAtmosphere?: boolean;
}

function ExoplanetVisualization({ planet, size = 1, showAtmosphere = true }: ExoplanetVisualizationProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const planetSize = size * (0.3 + (planet.radius / 20) * 0.7);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (atmosphereRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      atmosphereRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[planetSize, 64, 64]} />
        <meshStandardMaterial
          color={planet.color}
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {showAtmosphere && planet.atmosphere.length > 0 && (
        <mesh ref={atmosphereRef}>
          <sphereGeometry args={[planetSize * 1.1, 32, 32]} />
          <meshBasicMaterial
            color={planet.color}
            transparent
            opacity={0.15}
            side={THREE.BackSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {planet.habitable && (
        <mesh>
          <sphereGeometry args={[planetSize * 1.3, 32, 32]} />
          <meshBasicMaterial
            color="#00d4aa"
            transparent
            opacity={0.05}
            side={THREE.BackSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      <pointLight color={planet.color} intensity={0.5} distance={10} />
    </group>
  );
}

export { ExoplanetVisualization };
