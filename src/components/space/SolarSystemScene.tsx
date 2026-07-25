"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { Planet } from "@/components/three/Planet";
import { OrbitLine } from "@/components/three/OrbitLine";
import { Star3D } from "@/components/three/Star3D";
import { planets } from "@/data/planets";

interface SolarSystemSceneProps {
  selectedPlanet?: string | null;
  onPlanetSelect?: (id: string) => void;
}

const planetScale: Record<string, number> = {
  mercury: 0.3,
  venus: 0.5,
  earth: 0.5,
  mars: 0.4,
  jupiter: 1.2,
  saturn: 1.0,
  uranus: 0.7,
  neptune: 0.7,
};

const orbitScale: Record<string, number> = {
  mercury: 4,
  venus: 6,
  earth: 8,
  mars: 10,
  jupiter: 14,
  saturn: 18,
  uranus: 22,
  neptune: 26,
};

function SolarSystemScene({ selectedPlanet, onPlanetSelect }: SolarSystemSceneProps) {
  return (
    <SceneContainer
      className="w-full h-full"
      camera={{ position: [0, 15, 30], fov: 50 }}
    >
      <CameraController
        enableZoom
        enablePan
        enableRotate
        minDistance={3}
        maxDistance={60}
        autoRotate={false}
      />
      <Starfield count={3000} radius={500} size={0.3} />
      <Star3D position={[0, 0, 0]} radius={1.5} color="#ffd93d" intensity={3} />

      {planets.map((planet) => {
        const orbitRadius = orbitScale[planet.id] || 10;
        const radius = planetScale[planet.id] || 0.5;

        return (
          <group key={planet.id}>
            <OrbitLine radius={orbitRadius} />
            <Planet
              radius={radius}
              color={planet.color}
              position={[orbitRadius, 0, 0]}
              rotationSpeed={0.002 + Math.random() * 0.003}
              name={planet.id}
            />
          </group>
        );
      })}
    </SceneContainer>
  );
}

export { SolarSystemScene };
