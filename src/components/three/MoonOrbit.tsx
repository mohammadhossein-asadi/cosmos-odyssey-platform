"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MoonOrbitProps {
  orbitRadius: number;
  radius: number;
  color: string;
  speed: number;
}

function MoonOrbit({ orbitRadius, radius, color, speed }: MoonOrbitProps) {
  const groupRef = useRef<THREE.Group>(null);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (groupRef.current) {
      angleRef.current += speed * delta;
      groupRef.current.position.set(
        Math.cos(angleRef.current) * orbitRadius,
        0,
        Math.sin(angleRef.current) * orbitRadius
      );
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
    </group>
  );
}

export { MoonOrbit };
