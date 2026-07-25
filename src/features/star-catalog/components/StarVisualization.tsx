"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { StarData } from "../types";

interface StarVisualizationProps {
  star: StarData;
  size?: number;
  showCorona?: boolean;
}

function StarVisualization({ star, size = 1, showCorona = true }: StarVisualizationProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);

  const starSize = size * (0.5 + (star.radius / 100) * 0.5);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      meshRef.current.scale.setScalar(pulse);
    }
    if (coronaRef.current) {
      const coronaPulse = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      coronaRef.current.scale.setScalar(coronaPulse);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[starSize, 64, 64]} />
        <meshBasicMaterial color={star.color} />
      </mesh>

      {showCorona && (
        <mesh ref={coronaRef}>
          <sphereGeometry args={[starSize * 1.2, 32, 32]} />
          <meshBasicMaterial
            color={star.color}
            transparent
            opacity={0.2}
            side={THREE.BackSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {showCorona && (
        <mesh>
          <sphereGeometry args={[starSize * 1.5, 32, 32]} />
          <meshBasicMaterial
            color={star.color}
            transparent
            opacity={0.08}
            side={THREE.BackSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      <pointLight color={star.color} intensity={2} distance={50} />
    </group>
  );
}

export { StarVisualization };
