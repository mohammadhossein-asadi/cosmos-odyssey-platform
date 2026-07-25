"use client";

import { useMemo } from "react";
import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { Html } from "@react-three/drei";
import { GalaxyClusterViz } from "./GalaxyClusterViz";
import { CosmicWebScene } from "./CosmicWebScene";
import { TravelRouteViz } from "./TravelRouteViz";
import { localGroupGalaxies, virgoClusterGalaxies } from "../data/galaxies";
import { galaxyClusters, cosmicStructures } from "../data/clusters";
import { MapState, TravelRoute } from "../types";

interface GalaxyMapperSceneProps {
  state: MapState;
  onGalaxySelect: (id: string) => void;
  onClusterSelect: (id: string) => void;
}

const travelRoutes: TravelRoute[] = [
  { from: "milky-way", to: "andromeda", distance: 2537000, description: "Local Group crossing" },
  { from: "milky-way", to: "lmc", distance: 160000, description: "Satellite galaxy visit" },
  { from: "andromeda", to: "triangulum", distance: 2730000, description: "Andromeda-Triangulum" },
];

function GalaxyMapperScene({ state, onGalaxySelect, onClusterSelect }: GalaxyMapperSceneProps) {
  const scale = state.scale;

  const visibleGalaxies = useMemo(() => {
    if (scale === "local-group" || scale === "virgo-supercluster") {
      return localGroupGalaxies;
    }
    return [...localGroupGalaxies, ...virgoClusterGalaxies];
  }, [scale]);

  const visibleClusters = useMemo(() => {
    if (scale === "local-group") return galaxyClusters.filter((c) => c.type === "group");
    if (scale === "virgo-supercluster") return galaxyClusters.filter((c) => c.type !== "supercluster");
    return galaxyClusters;
  }, [scale]);

  const cameraDistance = scale === "local-group" ? 20 : scale === "virgo-supercluster" ? 60 : 120;

  const galaxyPositions: Record<string, [number, number, number]> = {};
  visibleGalaxies.forEach((g) => {
    const scale_factor = scale === "local-group" ? 0.01 : scale === "virgo-supercluster" ? 0.001 : 0.0001;
    galaxyPositions[g.id] = [g.x * scale_factor, g.y * scale_factor, g.z * scale_factor];
  });

  return (
    <SceneContainer className="w-full h-full" camera={{ position: [cameraDistance * 0.5, cameraDistance * 0.3, cameraDistance], fov: 50 }}>
      <CameraController enableZoom enablePan enableRotate minDistance={5} maxDistance={cameraDistance * 3} autoRotate autoRotateSpeed={state.rotationSpeed} />
      <ambientLight intensity={0.1} />
      <Starfield count={2000} radius={500} size={0.1} />

      {state.showFilaments && <CosmicWebScene structures={cosmicStructures} showFilaments={state.showFilaments} />}

      {visibleClusters.map((cluster) => (
        <GalaxyClusterViz
          key={cluster.id}
          cluster={cluster}
          showLabels={state.showLabels}
          onSelect={onClusterSelect}
        />
      ))}

      {visibleGalaxies.map((galaxy) => {
        const pos = galaxyPositions[galaxy.id];
        if (!pos) return null;

        return (
          <group key={galaxy.id} position={pos}>
            <mesh onClick={(e) => { e.stopPropagation(); onGalaxySelect(galaxy.id); }}>
              <sphereGeometry args={[galaxy.size * 0.5, 16, 16]} />
              <meshBasicMaterial color={galaxy.color} />
            </mesh>
            <mesh>
              <sphereGeometry args={[galaxy.size * 0.8, 16, 16]} />
              <meshBasicMaterial color={galaxy.color} transparent opacity={0.2} depthWrite={false} blending={THREE.AdditiveBlending} />
            </mesh>
            {state.showLabels && (
              <group position={[0, galaxy.size + 0.3, 0]}>
                <Html center distanceFactor={100} style={{ pointerEvents: "none" }}>
                  <div className="whitespace-nowrap text-[8px] text-text-muted">{galaxy.name}</div>
                </Html>
              </group>
            )}
          </group>
        );
      })}

      {state.showRoutes && <TravelRouteViz routes={travelRoutes} galaxyPositions={galaxyPositions} />}
    </SceneContainer>
  );
}

import * as THREE from "three";
export { GalaxyMapperScene };
