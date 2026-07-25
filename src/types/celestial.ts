export interface CelestialBody {
  id: string;
  name: string;
  type: "planet" | "dwarf-planet" | "moon" | "star" | "asteroid" | "comet";
  description: string;
  image?: string;
  color: string;
}

export interface Planet extends CelestialBody {
  type: "planet";
  orderFromSun: number;
  distanceFromSun: number;
  diameter: number;
  mass: string;
  gravity: number;
  dayLength: number;
  yearLength: number;
  temperature: PlanetTemperature;
  atmosphere: string[];
  composition: string[];
  moons: Moon[];
  rings?: PlanetRings;
  funFacts: string[];
  explorationMissions: string[];
}

export interface PlanetTemperature {
  min: number;
  max: number;
  average: number;
}

export interface PlanetRings {
  innerRadius: number;
  outerRadius: number;
  composition: string;
}

export interface Moon extends CelestialBody {
  type: "moon";
  parentPlanet: string;
  diameter: number;
  distanceFromParent: number;
  orbitalPeriod: number;
}

export interface Star extends CelestialBody {
  type: "star";
  spectralClass: string;
  temperature: number;
  luminosity: number;
  radius: number;
  mass: number;
  age: number;
  distance: number;
  magnitude: number;
  constellation?: string;
}

export interface Asteroid extends CelestialBody {
  type: "asteroid";
  diameter: number;
  orbit: OrbitalParams;
}

export interface Comet extends CelestialBody {
  type: "comet";
  orbit: OrbitalParams;
  tailLength?: number;
}

export interface OrbitalParams {
  semiMajorAxis: number;
  eccentricity: number;
  inclination: number;
  orbitalPeriod: number;
}
