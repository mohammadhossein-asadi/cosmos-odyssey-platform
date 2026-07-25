export type ViewMode = "realistic" | "schematic" | "comparison";

export interface VizState {
  selectedPlanet: string | null;
  timeScale: number;
  showOrbits: boolean;
  showLabels: boolean;
  showAsteroids: boolean;
  showDwarfPlanets: boolean;
  showGrid: boolean;
  viewMode: ViewMode;
}

export interface PlanetConfig {
  id: string;
  name: string;
  orbitRadius: number;
  size: number;
  color: string;
  rotationSpeed: number;
  orbitalSpeed: number;
  tilt: number;
  hasRings: boolean;
  ringColor?: string;
  moons: MoonConfig[];
  atmosphere?: { color: string; intensity: number };
  category: "terrestrial" | "gas-giant" | "ice-giant" | "dwarf";
}

export interface MoonConfig {
  id: string;
  name: string;
  orbitRadius: number;
  size: number;
  color: string;
  speed: number;
}

export interface AsteroidConfig {
  id: string;
  name: string;
  orbit: number;
  size: number;
}
