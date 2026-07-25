"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Star3DProps {
  radius?: number;
  color?: string;
  position?: [number, number, number];
  intensity?: number;
}

function Star3D({
  radius = 1,
  color = "#ffd93d",
  position = [0, 0, 0],
  intensity = 2,
}: Star3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <pointLight color={color} intensity={intensity} distance={100} />
    </group>
  );
}

export { Star3D, type Star3DProps };
