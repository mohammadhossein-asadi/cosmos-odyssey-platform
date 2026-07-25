"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { NebulaData, NebulaVisualizationConfig } from "../types";

interface NebulaVisualizationProps {
  nebula: NebulaData;
  config?: Partial<NebulaVisualizationConfig>;
}

const defaultConfig: NebulaVisualizationConfig = {
  particleCount: 3000,
  size: 5,
  turbulence: 0.5,
  glowIntensity: 0.4,
  rotationSpeed: 0.01,
};

function NebulaVisualization({ nebula, config: userConfig }: NebulaVisualizationProps) {
  const config = { ...defaultConfig, ...userConfig };
  const groupRef = useRef<THREE.Group>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(config.particleCount * 3);
    const col = new Float32Array(config.particleCount * 3);
    const sz = new Float32Array(config.particleCount);

    const baseColor = new THREE.Color(nebula.color);
    const secondaryColor = new THREE.Color(nebula.secondaryColor);

    for (let i = 0; i < config.particleCount; i++) {
      const i3 = i * 3;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.5) * config.size;

      const turbulenceX = (Math.random() - 0.5) * config.turbulence;
      const turbulenceY = (Math.random() - 0.5) * config.turbulence;
      const turbulenceZ = (Math.random() - 0.5) * config.turbulence;

      pos[i3] = r * Math.sin(phi) * Math.cos(theta) + turbulenceX;
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6 + turbulenceY;
      pos[i3 + 2] = r * Math.cos(phi) + turbulenceZ;

      const t = Math.random();
      const color = t < 0.7 ? baseColor : secondaryColor;
      const brightness = 0.6 + Math.random() * 0.4;

      col[i3] = color.r * brightness;
      col[i3 + 1] = color.g * brightness;
      col[i3 + 2] = color.b * brightness;

      sz[i] = (0.05 + Math.random() * 0.15) * (1 - r / config.size * 0.5);
    }

    return { positions: pos, colors: col, sizes: sz };
  }, [nebula, config]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * config.rotationSpeed;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={config.particleCount} itemSize={3} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} count={config.particleCount} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <mesh>
        <sphereGeometry args={[config.size * 0.3, 32, 32]} />
        <meshBasicMaterial
          color={nebula.color}
          transparent
          opacity={config.glowIntensity * 0.5}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[config.size * 0.5, 32, 32]} />
        <meshBasicMaterial
          color={nebula.color}
          transparent
          opacity={config.glowIntensity * 0.2}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <pointLight color={nebula.color} intensity={1} distance={config.size * 3} />
    </group>
  );
}

export { NebulaVisualization };
