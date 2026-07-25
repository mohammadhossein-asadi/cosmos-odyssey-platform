"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { BlackHoleVisualization } from "./BlackHoleVisualization";
import { GravitationalLensing } from "./GravitationalLensing";
import { BlackHoleConfig } from "../types";

interface BlackHoleSceneProps {
  config: BlackHoleConfig;
  accretionColor: string;
}

function BlackHoleScene({ config, accretionColor }: BlackHoleSceneProps) {
  return (
    <SceneContainer
      className="w-full h-full"
      camera={{ position: [0, 3, 8], fov: 60 }}
    >
      <CameraController
        enableZoom
        enablePan
        enableRotate
        minDistance={3}
        maxDistance={20}
        autoRotate={false}
      />
      <ambientLight intensity={0.05} />
      <Starfield count={3000} radius={300} size={0.15} />

      <BlackHoleVisualization config={config} accretionColor={accretionColor} />

      {config.showEventHorizon && (
        <GravitationalLensing radius={1.5} intensity={0.5} />
      )}
    </SceneContainer>
  );
}

export { BlackHoleScene };
