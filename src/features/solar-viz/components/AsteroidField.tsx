"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { AsteroidConfig } from "../types";

interface AsteroidFieldProps {
  asteroids: AsteroidConfig[];
  timeScale: number;
}

function AsteroidField({ asteroids, timeScale }: AsteroidFieldProps) {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    return asteroids.map((a) => ({
      orbit: a.orbit,
      angle: Math.random() * Math.PI * 2,
      size: a.size,
      speed: (0.3 + Math.random() * 0.2) * timeScale,
    }));
  }, [asteroids, timeScale]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const pos = positions[i];
        if (pos) {
          pos.angle += pos.speed * delta;
          child.position.set(
            Math.cos(pos.angle) * pos.orbit,
            (Math.random() - 0.5) * 0.5,
            Math.sin(pos.angle) * pos.orbit
          );
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={[Math.cos(pos.angle) * pos.orbit, 0, Math.sin(pos.angle) * pos.orbit]}>
          <icosahedronGeometry args={[pos.size, 0]} />
          <meshStandardMaterial color="#8b7355" roughness={0.9} flatShading />
        </mesh>
      ))}
    </group>
  );
}

export { AsteroidField };
