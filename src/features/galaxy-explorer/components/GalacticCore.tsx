"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GalacticCoreProps {
  size?: number;
  color?: string;
  hasBlackHole?: boolean;
}

function GalacticCore({ size = 1, color = "#ffd93d", hasBlackHole = false }: GalacticCoreProps) {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
      coreRef.current.scale.setScalar(pulse);
    }
    if (glowRef.current) {
      glowRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <sphereGeometry args={[size * 0.1, 32, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 0.2, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {hasBlackHole && (
        <>
          <mesh>
            <sphereGeometry args={[size * 0.02, 32, 32]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[size * 0.03, size * 0.06, 64]} />
            <meshBasicMaterial
              color="#ff6b00"
              transparent
              opacity={0.6}
              side={THREE.DoubleSide}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

export { GalacticCore };
