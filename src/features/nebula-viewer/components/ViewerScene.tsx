"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { EnhancedNebulaVisualization } from "./EnhancedNebulaVisualization";
import { VisualNebula, NebulaViewerConfig } from "../types";

interface ViewerSceneProps {
  nebula: VisualNebula;
  config: NebulaViewerConfig;
}

function ViewerScene({ nebula, config }: ViewerSceneProps) {
  return (
    <SceneContainer
      className="w-full h-full"
      camera={{ position: [0, 0, config.cameraDistance], fov: 50 }}
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
      {config.showStars && <Starfield count={2000} radius={200} size={0.1} />}

      <EnhancedNebulaVisualization nebula={nebula} config={config} />
    </SceneContainer>
  );
}

export { ViewerScene };
