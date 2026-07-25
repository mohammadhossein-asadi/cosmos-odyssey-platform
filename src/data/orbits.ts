export interface OrbitData {
  planetId: string;
  semiMajorAxis: number;
  eccentricity: number;
  inclination: number;
  orbitalPeriod: number;
  orbitalSpeed: number;
}

export const orbits: OrbitData[] = [
  { planetId: "mercury", semiMajorAxis: 57.9, eccentricity: 0.205, inclination: 7.0, orbitalPeriod: 87.97, orbitalSpeed: 47.87 },
  { planetId: "venus", semiMajorAxis: 108.2, eccentricity: 0.007, inclination: 3.39, orbitalPeriod: 224.7, orbitalSpeed: 35.02 },
  { planetId: "earth", semiMajorAxis: 149.6, eccentricity: 0.017, inclination: 0, orbitalPeriod: 365.25, orbitalSpeed: 29.78 },
  { planetId: "mars", semiMajorAxis: 227.9, eccentricity: 0.093, inclination: 1.85, orbitalPeriod: 687, orbitalSpeed: 24.07 },
  { planetId: "jupiter", semiMajorAxis: 778.5, eccentricity: 0.049, inclination: 1.31, orbitalPeriod: 4333, orbitalSpeed: 13.07 },
  { planetId: "saturn", semiMajorAxis: 1434, eccentricity: 0.057, inclination: 2.49, orbitalPeriod: 10759, orbitalSpeed: 9.69 },
  { planetId: "uranus", semiMajorAxis: 2871, eccentricity: 0.046, inclination: 0.77, orbitalPeriod: 30687, orbitalSpeed: 6.81 },
  { planetId: "neptune", semiMajorAxis: 4495, eccentricity: 0.011, inclination: 1.77, orbitalPeriod: 60190, orbitalSpeed: 5.43 },
];
