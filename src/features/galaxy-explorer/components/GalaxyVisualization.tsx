"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GalaxyVisualizationProps {
  arms?: number;
  color?: string;
  size?: number;
  spiralTightness?: number;
  rotationSpeed?: number;
  particleCount?: number;
}

function GalaxyVisualization({
  arms = 4,
  color = "#e8d5b7",
  size = 10,
  spiralTightness = 0.5,
  rotationSpeed = 0.02,
  particleCount = 5000,
}: GalaxyVisualizationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const sz = new Float32Array(particleCount);

    const baseColor = new THREE.Color(color);
    const brightColor = new THREE.Color("#ffffff");
    const darkColor = new THREE.Color(color).multiplyScalar(0.3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const arm = Math.floor(Math.random() * arms);
      const armAngle = (arm / arms) * Math.PI * 2;
      const distance = Math.random() * size;
      const angle = armAngle + distance * spiralTightness + (Math.random() - 0.5) * (1 / (1 + distance));

      const spread = distance * 0.15 + 0.1;
      const x = Math.cos(angle) * distance + (Math.random() - 0.5) * spread;
      const z = Math.sin(angle) * distance + (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread * 0.3;

      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      const distFromCenter = Math.sqrt(x * x + z * z);
      const normalizedDist = distFromCenter / size;

      let particleColor: THREE.Color;
      if (normalizedDist < 0.15) {
        particleColor = brightColor.clone().lerp(baseColor, normalizedDist / 0.15);
      } else {
        particleColor = baseColor.clone().lerp(darkColor, (normalizedDist - 0.15) / 0.85);
      }

      col[i3] = particleColor.r;
      col[i3 + 1] = particleColor.g;
      col[i3 + 2] = particleColor.b;

      sz[i] = Math.max(0.02, 0.1 - normalizedDist * 0.08) * (0.5 + Math.random() * 0.5);
    }

    return { positions: pos, colors: col, sizes: sz };
  }, [arms, color, size, spiralTightness, particleCount]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
    }
    if (coreRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={particleCount} itemSize={3} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} count={particleCount} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <mesh ref={coreRef}>
        <sphereGeometry args={[size * 0.08, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>

      <mesh>
        <sphereGeometry args={[size * 0.12, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} side={THREE.BackSide} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>

      <pointLight color={color} intensity={2} distance={size * 2} />
    </group>
  );
}

export { GalaxyVisualization };
