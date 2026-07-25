export type NebulaStyle = "realistic" | "enhanced" | "artistic" | "infrared";

export interface NebulaViewerConfig {
  style: NebulaStyle;
  particleCount: number;
  glowIntensity: number;
  turbulence: number;
  rotationSpeed: number;
  colorShift: number;
  brightness: number;
  contrast: number;
  showStars: boolean;
  showDust: boolean;
  showGas: boolean;
  cameraDistance: number;
}

export interface NebulaPreset {
  id: string;
  name: string;
  description: string;
  config: Partial<NebulaViewerConfig>;
}

export interface VisualNebula {
  id: string;
  name: string;
  type: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  dustColor: string;
  description: string;
  visualDescription: string;
  size: number;
  distance: number;
  constellation: string;
  bestViewingSeason: string;
  funFacts: string[];
  visualProperties: {
    brightness: number;
    colorVibrancy: number;
    structureComplexity: number;
    dustLaneVisibility: number;
  };
}
