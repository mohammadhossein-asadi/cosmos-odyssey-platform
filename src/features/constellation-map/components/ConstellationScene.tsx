"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { ConstellationStarPoint } from "./ConstellationStarPoint";
import { ConstellationLines3D } from "./ConstellationLines3D";
import { ConstellationLabel } from "./ConstellationLabel";
import { GridSphere } from "./GridSphere";
import { constellations } from "../data/constellations";
import { ConstellationData } from "../types";

interface ConstellationSceneProps {
  selectedConstellation: string | null;
  onConstellationSelect: (id: string) => void;
  showLines: boolean;
  showLabels: boolean;
  showGrid: boolean;
  highlightedStar: string | null;
}

function ConstellationScene({
  selectedConstellation,
  onConstellationSelect,
  showLines,
  showLabels,
  showGrid,
  highlightedStar,
}: ConstellationSceneProps) {
  const constellation = constellations.find((c) => c.id === selectedConstellation);

  if (constellation) {
    return (
      <ConstellationDetailView
        constellation={constellation}
        showLines={showLines}
        showLabels={showLabels}
        highlightedStar={highlightedStar}
      />
    );
  }

  return (
    <ConstellationOverview
      constellations={constellations}
      onConstellationSelect={onConstellationSelect}
      showLines={showLines}
      showLabels={showLabels}
      showGrid={showGrid}
    />
  );
}

function ConstellationOverview({
  constellations: consts,
  onConstellationSelect,
  showLines,
  showLabels,
  showGrid,
}: {
  constellations: ConstellationData[];
  onConstellationSelect: (id: string) => void;
  showLines: boolean;
  showLabels: boolean;
  showGrid: boolean;
}) {
  return (
    <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 30], fov: 60 }}>
      <CameraController enableZoom enablePan enableRotate minDistance={10} maxDistance={60} autoRotate autoRotateSpeed={0.1} />
      <ambientLight intensity={0.1} />
      <Starfield count={3000} radius={500} size={0.15} />

      {showGrid && <GridSphere radius={25} />}

      {consts.map((c, ci) => {
        const offsetX = ((ci % 3) - 1) * 12;
        const offsetY = (Math.floor(ci / 3) - 1) * 10;

        return (
          <group key={c.id} position={[offsetX, offsetY, 0]}>
            <group onClick={(e) => { e.stopPropagation(); onConstellationSelect(c.id); }}>
              {showLines && <ConstellationLines3D stars={c.stars} lines={c.lines} />}

              {c.stars.map((star) => (
                <ConstellationStarPoint
                  key={star.id}
                  star={star}
                  allStars={c.stars}
                  isHighlighted={false}
                />
              ))}

              {showLabels && (
                <ConstellationLabel
                  position={[0, Math.max(...c.stars.map((s) => s.dec)) * 0.08 + 1.5, 0]}
                  name={c.name}
                  abbreviation={c.abbreviation}
                />
              )}
            </group>
          </group>
        );
      })}
    </SceneContainer>
  );
}

function ConstellationDetailView({
  constellation,
  showLines,
  showLabels,
  highlightedStar,
}: {
  constellation: ConstellationData;
  showLines: boolean;
  showLabels: boolean;
  highlightedStar: string | null;
}) {
  return (
    <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 15], fov: 50 }}>
      <CameraController enableZoom enablePan enableRotate minDistance={5} maxDistance={30} />
      <ambientLight intensity={0.1} />
      <Starfield count={2000} radius={300} size={0.12} />

      {showLines && <ConstellationLines3D stars={constellation.stars} lines={constellation.lines} color="#6c5ce7" />}

      {constellation.stars.map((star) => (
        <ConstellationStarPoint
          key={star.id}
          star={star}
          allStars={constellation.stars}
          isHighlighted={highlightedStar === star.id}
          showInfo={true}
        />
      ))}

      {showLabels && (
        <ConstellationLabel
          position={[0, Math.max(...constellation.stars.map((s) => s.dec)) * 0.08 + 2, 0]}
          name={constellation.name}
          abbreviation={constellation.abbreviation}
          size="large"
        />
      )}
    </SceneContainer>
  );
}

export { ConstellationScene };
