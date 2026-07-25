export interface Destination {
  id: string;
  name: string;
  description: string;
  distance: number;
  travelTime: string;
  color: string;
  icon: string;
  diameter?: number;
  gravity?: number;
  temperature?: number;
  atmosphere?: string;
  funFacts?: string[];
}

export type TravelPhase = "idle" | "preparing" | "launching" | "warp" | "cruise" | "approaching" | "arrived";

export interface TravelState {
  phase: TravelPhase;
  from: string;
  to: Destination | null;
  progress: number;
  speed: number;
  distanceCovered: number;
  elapsedTime: number;
}

export interface TravelRecord {
  id: string;
  destination: string;
  date: string;
  duration: number;
  distance: number;
}

export interface TravelConfig {
  maxSpeed: number;
  warpMultiplier: number;
  cruiseSpeed: number;
}
