export type ExoplanetType = "terrestrial" | "super-earth" | "sub-neptune" | "neptune-like" | "gas-giant" | "hot-jupiter" | "ice-giant";

export type DetectionMethod = "transit" | "radial-velocity" | "direct-imaging" | "microlensing" | "astrometry" | "transit-timing";

export type HabitabilityScore = "excellent" | "good" | "moderate" | "low" | "none";

export interface ExoplanetData {
  id: string;
  name: string;
  hostStar: string;
  hostStarType: string;
  discoveryYear: number;
  discoveryMethod: DetectionMethod;
  discoveryFacility: string;
  mass: number;
  massUnit: string;
  radius: number;
  radiusUnit: string;
  orbitalPeriod: number;
  orbitalPeriodUnit: string;
  semiMajorAxis: number;
  eccentricity: number;
  inclination: number;
  equilibriumTemperature: number;
  distance: number;
  distanceUnit: string;
  constellation: string;
  habitable: boolean;
  habitabilityScore: HabitabilityScore;
  type: ExoplanetType;
  description: string;
  color: string;
  atmosphere: string[];
  composition: string[];
  funFacts: string[];
  confirmedNeighbors?: number;
}

export interface ExoplanetFilter {
  type: ExoplanetType | "all";
  habitable: boolean | "all";
  detectionMethod: DetectionMethod | "all";
  maxDistance: number;
  maxMass: number;
  maxRadius: number;
  search: string;
}

export interface OrbitalConfig {
  showOrbits: boolean;
  showHabitableZone: boolean;
  showScale: boolean;
  timeSpeed: number;
  selectedPlanet: string | null;
}
