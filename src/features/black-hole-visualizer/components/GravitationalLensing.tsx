"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GravitationalLensingProps {
  radius: number;
  intensity?: number;
}

function GravitationalLensing({ radius, intensity = 0.5 }: GravitationalLensingProps) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
      ringRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 1.5, radius * 1.8, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={intensity * 0.3}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 2, radius * 2.3, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={intensity * 0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export { GravitationalLensing };
