export interface StarMapStar {
  id: string;
  name: string;
  x: number;
  y: number;
  magnitude: number;
  color: string;
  constellation?: string;
}

export type StarFilter = "all" | "brightest" | "nearest" | "constellation";
