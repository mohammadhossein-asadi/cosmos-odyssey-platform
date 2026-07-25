"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface InteractivePlanetProps {
  name: string;
  radius: number;
  color: string;
  position: [number, number, number];
  rotationSpeed?: number;
  showLabel?: boolean;
  onClick?: () => void;
}

function InteractivePlanet({
  name,
  radius,
  color,
  position,
  rotationSpeed = 0.005,
  showLabel = false,
  onClick,
}: InteractivePlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.7}
          metalness={0.2}
          emissive={hovered ? color : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[radius * 1.15, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.2 : 0.1}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {showLabel && (
        <Html position={[0, radius + 0.5, 0]} center distanceFactor={15} style={{ pointerEvents: "none" }}>
          <div className="whitespace-nowrap text-center">
            <div className="px-2 py-0.5 rounded bg-surface-glass/80 backdrop-blur-sm border border-border-default text-[10px] text-text-primary font-medium">
              {name}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

export { InteractivePlanet };
