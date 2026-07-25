export interface Destination {
  id: string;
  name: string;
  description: string;
  distance: number;
  travelTime: string;
  color: string;
  icon: string;
}

export type TravelStatus = "idle" | "selecting" | "traveling" | "arrived";

export interface TravelState {
  status: TravelStatus;
  from: string | null;
  to: string | null;
  progress: number;
}
