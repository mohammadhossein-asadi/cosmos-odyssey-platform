export type SpectralClass = "O" | "B" | "A" | "F" | "G" | "K" | "M";

export type StarCategory = "main-sequence" | "giant" | "supergiant" | "dwarf" | "binary" | "variable";

export type StellarEvolution = "protostar" | "main-sequence" | "giant" | "supergiant" | "white-dwarf" | "neutron-star" | "black-hole";

export interface StarData {
  id: string;
  name: string;
  designation: string;
  spectralClass: SpectralClass;
  spectralType: string;
  category: StarCategory;
  constellation: string;
  distance: number;
  apparentMagnitude: number;
  absoluteMagnitude: number;
  color: string;
  temperature: number;
  luminosity: number;
  radius: number;
  mass: number;
  age: number;
  metallicity: number;
  rotationPeriod: number | null;
  radialVelocity: number | null;
  description: string;
  funFacts: string[];
  evolutionStage: StellarEvolution;
  binaryCompanion?: string;
  exoplanets?: number;
}

export interface StarFilter {
  spectralClass: SpectralClass | "all";
  category: StarCategory | "all";
  constellation: string | "all";
  search: string;
  maxDistance: number;
  maxMagnitude: number;
}

export interface HRDiagramPoint {
  starId: string;
  temperature: number;
  luminosity: number;
  color: string;
  size: number;
}
