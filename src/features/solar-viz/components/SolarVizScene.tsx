"use client";

import { SceneContainer } from "@/components/three/SceneContainer";
import { CameraController } from "@/components/three/CameraController";
import { Starfield } from "@/components/three/Starfield";
import { OrbitingPlanet } from "@/components/three/OrbitingPlanet";
import { PlanetRing } from "@/components/three/PlanetRing";
import { PlanetAtmosphereGlow } from "@/components/three/PlanetAtmosphereGlow";
import { MoonOrbit } from "@/components/three/MoonOrbit";
import { OrbitLine } from "@/components/three/OrbitLine";
import { Sun } from "./Sun";
import { AsteroidField } from "./AsteroidField";
import { PlanetLabel } from "./PlanetLabel";
import { OrbitGrid } from "./OrbitGrid";
import { planetConfigs, dwarfPlanets, asteroidBelt, SUN_CONFIG } from "../data/planet-configs";
import { ViewMode } from "../types";

interface SolarVizSceneProps {
  selectedPlanet: string | null;
  onPlanetSelect: (id: string) => void;
  timeScale: number;
  showOrbits: boolean;
  showLabels: boolean;
  showAsteroids: boolean;
  showDwarfPlanets: boolean;
  showGrid: boolean;
  viewMode: ViewMode;
}

function SolarVizScene({
  selectedPlanet,
  onPlanetSelect,
  timeScale,
  showOrbits,
  showLabels,
  showAsteroids,
  showDwarfPlanets,
  showGrid,
  viewMode,
}: SolarVizSceneProps) {
  const allPlanets = showDwarfPlanets ? [...planetConfigs, ...dwarfPlanets] : planetConfigs;

  return (
    <SceneContainer
      className="w-full h-full"
      camera={{ position: [0, 20, 35], fov: 50 }}
    >
      <CameraController
        enableZoom
        enablePan
        enableRotate
        minDistance={3}
        maxDistance={80}
        autoRotate={false}
      />

      <ambientLight intensity={0.1} />
      <Starfield count={5000} radius={800} size={0.2} />

      <Sun config={SUN_CONFIG} />

      {showGrid && <OrbitGrid radius={40} />}

      {allPlanets.map((planet) => {
        const isSelected = selectedPlanet === planet.id;
        const speed = planet.orbitalSpeed * timeScale;

        return (
          <group key={planet.id}>
            {showOrbits && (
              <OrbitLine
                radius={planet.orbitRadius}
                opacity={isSelected ? 0.6 : planet.category === "dwarf" ? 0.1 : 0.2}
                color={planet.category === "dwarf" ? "#4a4a4a" : "#7c5cbf"}
              />
            )}

            <OrbitingPlanet
              orbitRadius={planet.orbitRadius}
              radius={planet.size}
              color={planet.color}
              orbitalSpeed={speed}
              rotationSpeed={planet.rotationSpeed * timeScale}
              inclination={planet.tilt * 0.1}
              name={planet.id}
              onClick={() => onPlanetSelect(planet.id)}
              isSelected={isSelected}
            />

            {planet.atmosphere && (
              <PlanetAtmosphereGlow
                radius={planet.size}
                color={planet.atmosphere.color}
                intensity={planet.atmosphere.intensity}
              />
            )}

            {planet.hasRings && planet.ringColor && (
              <PlanetRing
                innerRadius={planet.size * 1.3}
                outerRadius={planet.size * 2.2}
                color={planet.ringColor}
                opacity={0.3}
              />
            )}

            {planet.moons.slice(0, 3).map((moon, i) => (
              <MoonOrbit
                key={moon.id}
                orbitRadius={planet.size + 0.5 + i * 0.4}
                radius={moon.size}
                color={moon.color}
                speed={moon.speed * timeScale}
              />
            ))}

            {showLabels && (
              <PlanetLabel
                position={[planet.orbitRadius, planet.size + 0.5, 0]}
                name={planet.name}
                color={planet.color}
                isSelected={isSelected}
              />
            )}
          </group>
        );
      })}

      {showAsteroids && <AsteroidField asteroids={asteroidBelt} timeScale={timeScale} />}
    </SceneContainer>
  );
}

export { SolarVizScene };
