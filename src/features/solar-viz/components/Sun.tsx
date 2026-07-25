"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SunProps {
  config: {
    size: number;
    color: string;
    emissiveColor: string;
    intensity: number;
  };
}

function Sun({ config }: SunProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[config.size, 64, 64]} />
        <meshBasicMaterial color={config.color} />
      </mesh>

      <mesh ref={glowRef}>
        <sphereGeometry args={[config.size * 1.2, 32, 32]} />
        <meshBasicMaterial
          color={config.color}
          transparent
          opacity={0.2}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[config.size * 1.5, 32, 32]} />
        <meshBasicMaterial
          color={config.emissiveColor}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <pointLight color={config.color} intensity={config.intensity} distance={200} />
      <pointLight color={config.color} intensity={config.intensity * 0.3} distance={100} />
    </group>
  );
}

export { Sun };
