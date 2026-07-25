"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface EnhancedStarfieldProps {
  count?: number;
  radius?: number;
  size?: number;
  color?: string;
  speed?: number;
  twinkle?: boolean;
}

function EnhancedStarfield({
  count = 3000,
  radius = 500,
  size = 0.3,
  color = "#ffffff",
  speed = 0.005,
  twinkle = true,
}: EnhancedStarfieldProps) {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    const baseColor = new THREE.Color(color);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      const brightness = 0.5 + Math.random() * 0.5;
      col[i3] = baseColor.r * brightness;
      col[i3 + 1] = baseColor.g * brightness;
      col[i3 + 2] = baseColor.b * brightness;

      sz[i] = size * (0.5 + Math.random() * 0.5);
    }

    return { positions: pos, colors: col, sizes: sz };
  }, [count, radius, size, color]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed;
      if (twinkle) {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
      }
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export { EnhancedStarfield };
