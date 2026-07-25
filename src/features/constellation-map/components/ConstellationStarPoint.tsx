"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { ConstellationStar } from "../types";

interface ConstellationStarPointProps {
  star: ConstellationStar;
  allStars: ConstellationStar[];
  isHighlighted: boolean;
  showInfo?: boolean;
}

function ConstellationStarPoint({
  star,
  allStars,
  isHighlighted,
  showInfo = false,
}: ConstellationStarPointProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const x = (star.ra / 360 - 0.5) * 20;
  const y = (star.dec / 180) * 10;
  const z = 0;

  const size = Math.max(0.08, 0.3 - star.magnitude * 0.04);

  useFrame((state) => {
    if (meshRef.current && isHighlighted) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={[x, y, z]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={star.color} />
      </mesh>

      <mesh>
        <sphereGeometry args={[size * 1.5, 16, 16]} />
        <meshBasicMaterial
          color={star.color}
          transparent
          opacity={isHighlighted ? 0.3 : 0.1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {(showInfo || isHighlighted) && (
        <Html
          position={[0, size + 0.3, 0]}
          center
          distanceFactor={10}
          style={{ pointerEvents: "none" }}
        >
          <div className="whitespace-nowrap text-center">
            <div className="px-2 py-0.5 rounded bg-surface-glass/80 backdrop-blur-sm border border-border-default text-[10px] text-text-primary font-medium">
              {star.name}
            </div>
            <div className="text-[9px] text-text-muted mt-0.5">
              Mag: {star.magnitude.toFixed(1)}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

export { ConstellationStarPoint };
