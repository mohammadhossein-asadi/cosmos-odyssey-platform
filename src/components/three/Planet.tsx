"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PlanetProps {
  radius?: number;
  color?: string;
  position?: [number, number, number];
  rotationSpeed?: number;
  name?: string;
}

function Planet({
  radius = 1,
  color = "#4a90d9",
  position = [0, 0, 0],
  rotationSpeed = 0.001,
  name,
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} name={name}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial
        color={color}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

export { Planet, type PlanetProps };
