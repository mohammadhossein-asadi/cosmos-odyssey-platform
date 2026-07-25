"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { ExoplanetVisualization } from "./ExoplanetVisualization";
import { HabitableZone } from "./HabitableZone";
import { exoplanets } from "../data/exoplanets";
import { ExoplanetData } from "../types";

interface ExoplanetSceneProps {
  selectedPlanet: string | null;
  onPlanetSelect: (id: string) => void;
  showHabitableZone: boolean;
}

function ExoplanetScene({ selectedPlanet, onPlanetSelect, showHabitableZone }: ExoplanetSceneProps) {
  const planet = exoplanets.find((p) => p.id === selectedPlanet);

  if (planet) {
    return (
      <SceneContainer className="w-full h-full" camera={{ position: [0, 2, 6], fov: 50 }}>
        <CameraController enableZoom enablePan enableRotate minDistance={2} maxDistance={15} />
        <ambientLight intensity={0.1} />
        <Starfield count={2000} radius={200} size={0.1} />
        <ExoplanetVisualization planet={planet} size={2} />
      </SceneContainer>
    );
  }

  return (
    <SceneContainer className="w-full h-full" camera={{ position: [0, 20, 30], fov: 50 }}>
      <CameraController enableZoom enablePan enableRotate minDistance={10} maxDistance={60} autoRotate autoRotateSpeed={0.05} />
      <ambientLight intensity={0.1} />
      <Starfield count={3000} radius={400} size={0.1} />

      {/* Central star */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#ffd93d" />
      </mesh>
      <pointLight color="#ffd93d" intensity={3} distance={50} />

      {showHabitableZone && <HabitableZone innerRadius={5} outerRadius={9} />}

      {exoplanets.map((p, i) => {
        const orbitRadius = 4 + (i % 6) * 3;
        const angle = (i / exoplanets.length) * Math.PI * 2;
        const x = Math.cos(angle) * orbitRadius;
        const z = Math.sin(angle) * orbitRadius;

        return (
          <group key={p.id} position={[x, 0, z]}>
            <group onClick={(e) => { e.stopPropagation(); onPlanetSelect(p.id); }}>
              <ExoplanetVisualization planet={p} size={0.4} showAtmosphere={false} />
            </group>
          </group>
        );
      })}
    </SceneContainer>
  );
}

export { ExoplanetScene };
