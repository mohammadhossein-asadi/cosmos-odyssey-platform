"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitingPlanetProps {
  orbitRadius: number;
  radius: number;
  color: string;
  orbitalSpeed: number;
  rotationSpeed?: number;
  inclination?: number;
  name?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

function OrbitingPlanet({
  orbitRadius,
  radius,
  color,
  orbitalSpeed,
  rotationSpeed = 0.005,
  inclination = 0,
  name,
  onClick,
  isSelected,
}: OrbitingPlanetProps) {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (groupRef.current) {
      angleRef.current += orbitalSpeed * delta;
      const x = Math.cos(angleRef.current) * orbitRadius;
      const z = Math.sin(angleRef.current) * orbitRadius;
      const y = Math.sin(angleRef.current * 0.5) * inclination;
      groupRef.current.position.set(x, y, z);
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        ref={planetRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        name={name}
      >
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.7}
          metalness={0.2}
          emissive={isSelected ? color : "#000000"}
          emissiveIntensity={isSelected ? 0.3 : 0}
        />
      </mesh>
      {isSelected && (
        <mesh>
          <sphereGeometry args={[radius * 1.2, 32, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.15}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

export { OrbitingPlanet };
