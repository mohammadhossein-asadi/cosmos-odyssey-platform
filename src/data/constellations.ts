export interface Constellation {
  id: string;
  name: string;
  abbreviation: string;
  area: number;
  brightestStar: string;
  mythology: string;
  bestViewingMonth: string;
  stars: { x: number; y: number; name: string; magnitude: number }[];
  lines: [number, number][];
}

export const constellations: Constellation[] = [
  {
    id: "orion",
    name: "Orion",
    abbreviation: "Ori",
    area: 594,
    brightestStar: "Rigel",
    mythology: "The Hunter in Greek mythology, son of Poseidon.",
    bestViewingMonth: "January",
    stars: [
      { x: 0.3, y: 0.2, name: "Betelgeuse", magnitude: 0.5 },
      { x: 0.7, y: 0.2, name: "Bellatrix", magnitude: 1.64 },
      { x: 0.45, y: 0.5, name: "Alnitak", magnitude: 1.77 },
      { x: 0.5, y: 0.5, name: "Alnilam", magnitude: 1.69 },
      { x: 0.55, y: 0.5, name: "Mintaka", magnitude: 2.23 },
      { x: 0.3, y: 0.8, name: "Saiph", magnitude: 2.06 },
      { x: 0.7, y: 0.8, name: "Rigel", magnitude: 0.13 },
    ],
    lines: [[0, 1], [0, 5], [1, 6], [2, 3], [3, 4], [5, 2], [6, 4]],
  },
  {
    id: "ursa-major",
    name: "Ursa Major",
    abbreviation: "UMa",
    area: 1280,
    brightestStar: "Alioth",
    mythology: "The Great Bear, associated with the nymph Callisto.",
    bestViewingMonth: "April",
    stars: [
      { x: 0.2, y: 0.4, name: "Dubhe", magnitude: 1.79 },
      { x: 0.35, y: 0.35, name: "Merak", magnitude: 2.37 },
      { x: 0.5, y: 0.3, name: "Phecda", magnitude: 2.44 },
      { x: 0.65, y: 0.25, name: "Megrez", magnitude: 3.31 },
      { x: 0.75, y: 0.4, name: "Alioth", magnitude: 1.77 },
      { x: 0.85, y: 0.5, name: "Mizar", magnitude: 2.27 },
      { x: 0.95, y: 0.6, name: "Alkaid", magnitude: 1.86 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
  },
  {
    id: "cassiopeia",
    name: "Cassiopeia",
    abbreviation: "Cas",
    area: 598,
    brightestStar: "Schedar",
    mythology: "The vain queen in Greek mythology.",
    bestViewingMonth: "November",
    stars: [
      { x: 0.2, y: 0.5, name: "Schedar", magnitude: 2.24 },
      { x: 0.35, y: 0.3, name: "Caph", magnitude: 2.27 },
      { x: 0.5, y: 0.6, name: "Tsih", magnitude: 2.47 },
      { x: 0.65, y: 0.35, name: "Ruchbah", magnitude: 2.68 },
      { x: 0.8, y: 0.55, name: "Segin", magnitude: 3.37 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4]],
  },
];
