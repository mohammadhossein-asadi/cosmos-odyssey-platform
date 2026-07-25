export type SkyHemisphere = "northern" | "southern" | "both";

export type SkySeason = "spring" | "summer" | "autumn" | "winter" | "all";

export interface SkyStar {
  id: string;
  name: string;
  x: number;
  y: number;
  magnitude: number;
  color: string;
  spectralClass: string;
  constellation: string;
  description: string;
}

export interface SkyConstellation {
  id: string;
  name: string;
  stars: string[];
  lines: [number, number][];
  mythology: string;
  season: SkySeason;
  hemisphere: SkyHemisphere;
  bestMonth: string;
}

export interface DeepSkyObject {
  id: string;
  name: string;
  type: "nebula" | "cluster" | "galaxy" | "double-star";
  x: number;
  y: number;
  magnitude: number;
  size: number;
  constellation: string;
  description: string;
}

export interface ChartConfig {
  hemisphere: SkyHemisphere;
  season: SkySeason;
  showConstellations: boolean;
  showLabels: boolean;
  showDeepSky: boolean;
  magnitudeLimit: number;
  gridLines: boolean;
  rotation: number;
}

export interface ChartState {
  selectedObject: string | null;
  objectType: "star" | "constellation" | "deep-sky" | null;
  isZoomed: boolean;
  zoomLevel: number;
}
