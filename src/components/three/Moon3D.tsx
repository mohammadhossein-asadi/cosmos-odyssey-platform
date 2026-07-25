"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Moon3DProps {
  radius?: number;
  color?: string;
  orbitRadius?: number;
  orbitSpeed?: number;
  position?: [number, number, number];
}

function Moon3D({
  radius = 0.3,
  color = "#c0c0c0",
  orbitRadius = 2,
  orbitSpeed = 0.01,
  position = [0, 0, 0],
}: Moon3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += orbitSpeed;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh position={[orbitRadius, 0, 0]}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
    </group>
  );
}

export { Moon3D, type Moon3DProps };
