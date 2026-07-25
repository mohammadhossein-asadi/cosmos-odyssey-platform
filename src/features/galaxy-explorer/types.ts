export type GalaxyType = "spiral" | "elliptical" | "irregular" | "lenticular" | "dwarf";

export type DeepSkyObjectType = "nebula" | "star-cluster" | "galaxy" | "black-hole";

export interface GalaxyData {
  id: string;
  name: string;
  type: GalaxyType;
  distance: number;
  diameter: number;
  stars: string;
  age: number;
  description: string;
  color: string;
  arms?: number;
  hasActiveNucleus: boolean;
  constellation?: string;
  funFacts: string[];
  deepSkyObjects?: DeepSkyObject[];
}

export interface DeepSkyObject {
  id: string;
  name: string;
  type: DeepSkyObjectType;
  galaxy: string;
  distance: number;
  description: string;
  color: string;
  magnitude?: number;
  size?: number;
}

export interface GalaxyFilter {
  type: GalaxyType | "all";
  maxDistance: number;
  search: string;
}

export interface ExplorerView {
  mode: "catalog" | "visualization" | "comparison";
  selectedGalaxy: string | null;
  selectedObject: string | null;
}
