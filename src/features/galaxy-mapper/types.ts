export type GalaxyClusterType = "cluster" | "supercluster" | "group" | "filament" | "void";

export type MapScale = "local-group" | "virgo-supercluster" | "cosmic-web" | "observable-universe";

export interface GalaxyPosition {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  distance: number;
  type: "spiral" | "elliptical" | "irregular" | "lenticular" | "dwarf";
  magnitude: number;
  color: string;
  size: number;
}

export interface GalaxyCluster {
  id: string;
  name: string;
  type: GalaxyClusterType;
  galaxies: string[];
  center: [number, number, number];
  radius: number;
  distance: number;
  description: string;
  color: string;
}

export interface CosmicStructure {
  id: string;
  name: string;
  type: "filament" | "void" | "wall" | "supercluster";
  description: string;
  size: number;
  distance: number;
  color: string;
}

export interface TravelRoute {
  from: string;
  to: string;
  distance: number;
  description: string;
}

export interface MapState {
  scale: MapScale;
  selectedGalaxy: string | null;
  selectedCluster: string | null;
  showRoutes: boolean;
  showClusters: boolean;
  showFilaments: boolean;
  showLabels: boolean;
  rotationSpeed: number;
}
