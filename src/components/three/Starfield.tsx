"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StarfieldProps {
  count?: number;
  radius?: number;
  size?: number;
  color?: string;
}

function Starfield({
  count = 2000,
  radius = 500,
  size = 0.5,
  color = "#ffffff",
}: StarfieldProps) {
  const meshRef = useRef<THREE.Points>();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      const brightness = 0.5 + Math.random() * 0.5;
      col[i3] = brightness;
      col[i3 + 1] = brightness;
      col[i3 + 2] = brightness;
    }

    return [pos, col];
  }, [count, radius]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <points ref={meshRef as any}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={false}
        depthWrite={false}
      />
    </points>
  );
}

export { Starfield, type StarfieldProps };
