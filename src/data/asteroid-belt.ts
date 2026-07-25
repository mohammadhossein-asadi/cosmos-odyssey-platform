export interface Asteroid {
  id: string;
  name: string;
  diameter: number;
  orbit: number;
  type: "C" | "S" | "M" | "V" | "B";
}

export const asteroidBelt: Asteroid[] = [
  { id: "ceres", name: "Ceres", diameter: 946, orbit: 2.77, type: "C" },
  { id: "vesta", name: "4 Vesta", diameter: 525, orbit: 2.36, type: "V" },
  { id: "pallas", name: "2 Pallas", diameter: 512, orbit: 2.77, type: "B" },
  { id: "hygiea", name: "10 Hygiea", diameter: 434, orbit: 3.14, type: "C" },
];
