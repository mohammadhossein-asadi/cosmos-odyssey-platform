export type NebulaType = "emission" | "reflection" | "planetary" | "supernova" | "dark" | "diffuse";

export type NebulaCategory = "star-forming" | "stellar-evolution" | "remnant";

export interface NebulaData {
  id: string;
  name: string;
  designation: string;
  type: NebulaType;
  category: NebulaCategory;
  constellation: string;
  distance: number;
  diameter: number;
  apparentMagnitude: number | null;
  description: string;
  color: string;
  secondaryColor: string;
  discoveryYear: number | null;
  discoveredBy: string;
  funFacts: string[];
  scientificDetails: {
    temperature: number;
    density: string;
    composition: string[];
    ionizedElements: string[];
    associatedObjects: string[];
  };
}

export interface NebulaFilter {
  type: NebulaType | "all";
  category: NebulaCategory | "all";
  search: string;
  maxDistance: number;
}

export interface NebulaVisualizationConfig {
  particleCount: number;
  size: number;
  turbulence: number;
  glowIntensity: number;
  rotationSpeed: number;
}
