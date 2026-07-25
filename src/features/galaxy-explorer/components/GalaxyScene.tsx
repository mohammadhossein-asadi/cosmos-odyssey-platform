"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { GalaxyVisualization } from "./GalaxyVisualization";
import { GalacticCore } from "./GalacticCore";
import { NebulaCloud } from "./NebulaCloud";
import { galaxies } from "../data/galaxies";

interface GalaxySceneProps {
  selectedGalaxy: string | null;
  onGalaxySelect: (id: string) => void;
}

function GalaxyScene({ selectedGalaxy, onGalaxySelect }: GalaxySceneProps) {
  const galaxy = galaxies.find((g) => g.id === selectedGalaxy);

  if (galaxy) {
    return (
      <SceneContainer className="w-full h-full" camera={{ position: [0, 15, 25], fov: 50 }}>
        <CameraController enableZoom enablePan enableRotate minDistance={5} maxDistance={50} />
        <ambientLight intensity={0.05} />
        <Starfield count={3000} radius={500} size={0.15} />
        <GalaxyVisualization
          arms={galaxy.arms || 2}
          color={galaxy.color}
          size={12}
          spiralTightness={0.4}
          particleCount={6000}
        />
        <GalacticCore size={12} color={galaxy.color} hasBlackHole={galaxy.hasActiveNucleus} />
      </SceneContainer>
    );
  }

  return (
    <SceneContainer className="w-full h-full" camera={{ position: [0, 30, 40], fov: 50 }}>
      <CameraController enableZoom enablePan enableRotate minDistance={10} maxDistance={80} />
      <ambientLight intensity={0.05} />
      <Starfield count={5000} radius={800} size={0.12} />

      {galaxies.map((g, i) => {
        const angle = (i / galaxies.length) * Math.PI * 2;
        const radius = 15 + (i % 2) * 8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={g.id} position={[x, 0, z]}>
            <group
              onClick={(e) => {
                e.stopPropagation();
                onGalaxySelect(g.id);
              }}
            >
              <GalaxyVisualization
                arms={g.arms || 2}
                color={g.color}
                size={4}
                spiralTightness={0.3}
                particleCount={1500}
                rotationSpeed={0.01 + i * 0.002}
              />
              <GalacticCore size={4} color={g.color} hasBlackHole={g.hasActiveNucleus} />
            </group>
          </group>
        );
      })}

      <NebulaCloud color="#ff6b8a" size={8} opacity={0.1} />
      <NebulaCloud color="#4a90d9" size={6} opacity={0.08} />
    </SceneContainer>
  );
}

export { GalaxyScene };
