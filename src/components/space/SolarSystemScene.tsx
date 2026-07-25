"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { Star3D } from "@/components/three/Star3D";
import { OrbitLine } from "@/components/three/OrbitLine";
import { OrbitingPlanet } from "@/components/three/OrbitingPlanet";
import { PlanetRing } from "@/components/three/PlanetRing";
import { PlanetAtmosphereGlow } from "@/components/three/PlanetAtmosphereGlow";
import { MoonOrbit } from "@/components/three/MoonOrbit";
import { planets } from "@/data/planets";
import { orbits } from "@/data/orbits";

interface SolarSystemSceneProps {
  selectedPlanet?: string | null;
  onPlanetSelect?: (id: string) => void;
  orbitSpeed?: number;
  showOrbits?: boolean;
  showLabels?: boolean;
}

const planetScale: Record<string, number> = {
  mercury: 0.25,
  venus: 0.45,
  earth: 0.5,
  mars: 0.35,
  jupiter: 1.4,
  saturn: 1.1,
  uranus: 0.65,
  neptune: 0.6,
};

const orbitScale: Record<string, number> = {
  mercury: 5,
  venus: 7,
  earth: 9,
  mars: 11.5,
  jupiter: 16,
  saturn: 21,
  uranus: 26,
  neptune: 31,
};

const orbitalSpeeds: Record<string, number> = {
  mercury: 0.8,
  venus: 0.6,
  earth: 0.5,
  mars: 0.4,
  jupiter: 0.25,
  saturn: 0.18,
  uranus: 0.12,
  neptune: 0.08,
};

function SolarSystemScene({
  selectedPlanet,
  onPlanetSelect,
  orbitSpeed = 1,
  showOrbits = true,
}: SolarSystemSceneProps) {
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
      <ambientLight intensity={0.15} />
      <Starfield count={4000} radius={600} size={0.25} />

      <Star3D position={[0, 0, 0]} radius={1.8} color="#ffd93d" intensity={4} />

      {planets.map((planet) => {
        const orbitRadius = orbitScale[planet.id] || 10;
        const radius = planetScale[planet.id] || 0.5;
        const speed = (orbitalSpeeds[planet.id] || 0.3) * orbitSpeed;
        const orbitData = orbits.find((o) => o.planetId === planet.id);
        const inclination = orbitData ? orbitData.inclination * 0.1 : 0;

        return (
          <group key={planet.id}>
            {showOrbits && <OrbitLine radius={orbitRadius} opacity={selectedPlanet === planet.id ? 0.5 : 0.2} />}

            <OrbitingPlanet
              orbitRadius={orbitRadius}
              radius={radius}
              color={planet.color}
              orbitalSpeed={speed}
              inclination={inclination}
              name={planet.id}
              onClick={() => onPlanetSelect?.(planet.id)}
              isSelected={selectedPlanet === planet.id}
            />

            {planet.id === "earth" && (
              <PlanetAtmosphereGlow radius={radius} color="#4a90d9" intensity={0.15} />
            )}

            {planet.id === "venus" && (
              <PlanetAtmosphereGlow radius={radius} color="#e8cda0" intensity={0.25} />
            )}

            {planet.id === "saturn" && (
              <PlanetRing
                innerRadius={radius * 1.3}
                outerRadius={radius * 2.4}
                color="#e4c46e"
                opacity={0.35}
              />
            )}

            {planet.id === "uranus" && (
              <group rotation={[0, 0, Math.PI / 2]}>
                <PlanetRing
                  innerRadius={radius * 1.2}
                  outerRadius={radius * 1.8}
                  color="#4fd0e7"
                  opacity={0.25}
                />
              </group>
            )}

            {planet.moons.slice(0, 3).map((moon, i) => (
              <MoonOrbit
                key={moon.id}
                orbitRadius={radius + 0.8 + i * 0.5}
                radius={Math.max(0.08, moon.diameter / 20000)}
                color={moon.color}
                speed={0.5 + i * 0.3}
              />
            ))}
          </group>
        );
      })}
    </SceneContainer>
  );
}

export { SolarSystemScene };
