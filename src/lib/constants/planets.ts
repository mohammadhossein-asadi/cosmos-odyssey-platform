export const PLANET_IDS = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
] as const;

export type PlanetId = (typeof PLANET_IDS)[number];

export const PLANET_NAMES: Record<PlanetId, string> = {
  mercury: "Mercury",
  venus: "Venus",
  earth: "Earth",
  mars: "Mars",
  jupiter: "Jupiter",
  saturn: "Saturn",
  uranus: "Uranus",
  neptune: "Neptune",
};

export const PLANET_COLORS: Record<PlanetId, string> = {
  mercury: "#b5b5b5",
  venus: "#e8cda0",
  earth: "#4a90d9",
  mars: "#c1440e",
  jupiter: "#c88b3a",
  saturn: "#e4c46e",
  uranus: "#4fd0e7",
  neptune: "#4b70dd",
};
