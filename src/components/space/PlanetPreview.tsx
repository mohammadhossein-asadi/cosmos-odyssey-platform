"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { Planet } from "@/components/three/Planet";
import { Star3D } from "@/components/three/Star3D";

interface PlanetPreviewProps {
  color: string;
  size?: number;
  showStar?: boolean;
}

function PlanetPreview({ color, size = 1, showStar = false }: PlanetPreviewProps) {
  return (
    <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 4], fov: 45 }}>
      <Planet radius={size} color={color} rotationSpeed={0.005} />
      {showStar && <Star3D position={[3, 2, 2]} radius={0.3} />}
    </SceneContainer>
  );
}

export { PlanetPreview };
