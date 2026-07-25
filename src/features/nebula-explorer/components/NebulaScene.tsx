"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { NebulaVisualization } from "./NebulaVisualization";
import { nebulae } from "../data/nebulae";
import { NebulaData } from "../types";

interface NebulaSceneProps {
  selectedNebula: string | null;
  onNebulaSelect: (id: string) => void;
}

function NebulaScene({ selectedNebula, onNebulaSelect }: NebulaSceneProps) {
  const nebula = nebulae.find((n) => n.id === selectedNebula);

  if (nebula) {
    return (
      <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 12], fov: 50 }}>
        <CameraController enableZoom enablePan enableRotate minDistance={3} maxDistance={25} />
        <ambientLight intensity={0.05} />
        <Starfield count={2000} radius={200} size={0.1} />
        <NebulaVisualization nebula={nebula} />
      </SceneContainer>
    );
  }

  return (
    <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 30], fov: 60 }}>
      <CameraController enableZoom enablePan enableRotate minDistance={10} maxDistance={60} autoRotate autoRotateSpeed={0.05} />
      <ambientLight intensity={0.05} />
      <Starfield count={3000} radius={400} size={0.12} />

      {nebulae.map((n, i) => {
        const angle = (i / nebulae.length) * Math.PI * 2;
        const radius = 8 + (i % 2) * 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 4;

        return (
          <group key={n.id} position={[x, y, z]}>
            <group onClick={(e) => { e.stopPropagation(); onNebulaSelect(n.id); }}>
              <NebulaVisualization
                nebula={n}
                config={{
                  particleCount: 800,
                  size: 2,
                  turbulence: 0.3,
                  glowIntensity: 0.3,
                  rotationSpeed: 0.02 + i * 0.005,
                }}
              />
            </group>
          </group>
        );
      })}
    </SceneContainer>
  );
}

export { NebulaScene };
