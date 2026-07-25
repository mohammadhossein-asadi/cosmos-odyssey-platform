"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { VisualNebula, NebulaViewerConfig } from "../types";

interface EnhancedNebulaVisualizationProps {
  nebula: VisualNebula;
  config: NebulaViewerConfig;
}

function EnhancedNebulaVisualization({ nebula, config }: EnhancedNebulaVisualizationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const dustRef = useRef<THREE.Points>(null);
  const gasRef = useRef<THREE.Points>(null);

  const primaryColor = useMemo(() => new THREE.Color(nebula.primaryColor), [nebula]);
  const secondaryColor = useMemo(() => new THREE.Color(nebula.secondaryColor), [nebula]);
  const accentColor = useMemo(() => new THREE.Color(nebula.accentColor), [nebula]);

  const { gasPositions, gasColors, dustPositions, dustColors } = useMemo(() => {
    const gasPos = new Float32Array(config.particleCount * 3);
    const gasCol = new Float32Array(config.particleCount * 3);
    const dustPos = new Float32Array(config.particleCount * 0.3 * 3);
    const dustCol = new Float32Array(config.particleCount * 0.3 * 3);

    for (let i = 0; i < config.particleCount; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.4) * 5 * (config.turbulence + 0.5);

      const turbX = (Math.random() - 0.5) * config.turbulence * 2;
      const turbY = (Math.random() - 0.5) * config.turbulence * 2;
      const turbZ = (Math.random() - 0.5) * config.turbulence * 2;

      gasPos[i3] = r * Math.sin(phi) * Math.cos(theta) + turbX;
      gasPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6 + turbY;
      gasPos[i3 + 2] = r * Math.cos(phi) + turbZ;

      const t = Math.random();
      const color = t < 0.5 ? primaryColor : t < 0.8 ? secondaryColor : accentColor;
      const brightness = (0.5 + Math.random() * 0.5) * config.brightness;

      gasCol[i3] = color.r * brightness;
      gasCol[i3 + 1] = color.g * brightness;
      gasCol[i3 + 2] = color.b * brightness;
    }

    const dustCount = Math.floor(config.particleCount * 0.3);
    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.6) * 4;

      dustPos[i3] = r * Math.sin(phi) * Math.cos(theta);
      dustPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5;
      dustPos[i3 + 2] = r * Math.cos(phi);

      const dustColorObj = new THREE.Color(nebula.dustColor);
      dustCol[i3] = dustColorObj.r * 0.6;
      dustCol[i3 + 1] = dustColorObj.g * 0.6;
      dustCol[i3 + 2] = dustColorObj.b * 0.6;
    }

    return {
      gasPositions: gasPos,
      gasColors: gasCol,
      dustPositions: dustPos,
      dustColors: dustCol,
    };
  }, [nebula, config]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * config.rotationSpeed;
    }
    if (dustRef.current) {
      dustRef.current.rotation.y = state.clock.elapsedTime * config.rotationSpeed * 0.5;
      dustRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {config.showGas && (
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[gasPositions, 3]} count={config.particleCount} itemSize={3} />
            <bufferAttribute attach="attributes-color" args={[gasColors, 3]} count={config.particleCount} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial
            size={0.12 * config.glowIntensity}
            vertexColors
            transparent
            opacity={0.8 * config.contrast}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      )}

      {config.showDust && (
        <points ref={dustRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[dustPositions, 3]} count={Math.floor(config.particleCount * 0.3)} itemSize={3} />
            <bufferAttribute attach="attributes-color" args={[dustColors, 3]} count={Math.floor(config.particleCount * 0.3)} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial
            size={0.08}
            vertexColors
            transparent
            opacity={0.5}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.NormalBlending}
          />
        </points>
      )}

      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color={nebula.primaryColor}
          transparent
          opacity={config.glowIntensity * 0.3}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color={nebula.primaryColor}
          transparent
          opacity={config.glowIntensity * 0.1}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <pointLight color={nebula.primaryColor} intensity={1.5} distance={15} />
      <pointLight color={nebula.secondaryColor} intensity={0.5} distance={10} />
    </group>
  );
}

export { EnhancedNebulaVisualization };
