"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { StarVisualization } from "./StarVisualization";
import { stars } from "../data/stars";
import { StarData } from "../types";

interface StarSceneProps {
  selectedStar: string | null;
  onStarSelect: (id: string) => void;
}

function StarScene({ selectedStar, onStarSelect }: StarSceneProps) {
  const star = stars.find((s) => s.id === selectedStar);

  if (star) {
    return (
      <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 8], fov: 50 }}>
        <CameraController enableZoom enablePan enableRotate minDistance={3} maxDistance={20} />
        <ambientLight intensity={0.05} />
        <Starfield count={2000} radius={200} size={0.1} />
        <StarVisualization star={star} size={2} />
      </SceneContainer>
    );
  }

  return (
    <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 30], fov: 60 }}>
      <CameraController enableZoom enablePan enableRotate minDistance={10} maxDistance={60} autoRotate autoRotateSpeed={0.05} />
      <ambientLight intensity={0.05} />
      <Starfield count={4000} radius={500} size={0.1} />

      {stars.filter((s) => s.id !== "sun").map((s, i) => {
        const angle = (i / (stars.length - 1)) * Math.PI * 2;
        const radius = 6 + (i % 3) * 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 4;

        return (
          <group key={s.id} position={[x, y, z]}>
            <group onClick={(e) => { e.stopPropagation(); onStarSelect(s.id); }}>
              <StarVisualization star={s} size={0.3 + (s.luminosity / 1000) * 0.2} showCorona={false} />
            </group>
          </group>
        );
      })}
    </SceneContainer>
  );
}

export { StarScene };
