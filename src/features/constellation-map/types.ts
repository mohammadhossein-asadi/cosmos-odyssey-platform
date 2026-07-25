export type Season = "spring" | "summer" | "autumn" | "winter";

export type Hemisphere = "northern" | "southern" | "both";

export interface ConstellationStar {
  id: string;
  name: string;
  ra: number;
  dec: number;
  magnitude: number;
  color: string;
  spectralClass: string;
  description?: string;
}

export interface ConstellationLine {
  from: number;
  to: number;
}

export interface ConstellationData {
  id: string;
  name: string;
  abbreviation: string;
  area: number;
  brightestStar: string;
  mythology: string;
  bestViewingMonth: string;
  season: Season;
  hemisphere: Hemisphere;
  stars: ConstellationStar[];
  lines: ConstellationLine[];
  description: string;
  funFacts: string[];
  image?: string;
}

export interface StarMapFilter {
  season: Season | "all";
  hemisphere: Hemisphere | "all";
  search: string;
  magnitudeLimit: number;
  showLines: boolean;
  showLabels: boolean;
  showGrid: boolean;
}

export interface MapState {
  zoom: number;
  panX: number;
  panY: number;
  selectedConstellation: string | null;
  hoveredStar: string | null;
}
