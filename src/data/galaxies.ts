export interface Galaxy {
  id: string;
  name: string;
  type: string;
  distance: number;
  description: string;
}

export const galaxies: Galaxy[] = [
  { id: "milky-way", name: "Milky Way", type: "Barred Spiral", distance: 0, description: "Our home galaxy containing 200-400 billion stars." },
  { id: "andromeda", name: "Andromeda", type: "Spiral", distance: 2537000, description: "The nearest large galaxy to the Milky Way." },
  { id: "triangulum", name: "Triangulum", type: "Spiral", distance: 2730000, description: "Third-largest galaxy in the Local Group." },
  { id: "sombrero", name: "Sombrero", type: "Elliptical", distance: 29350000, description: "A lenticular galaxy with a bright nucleus." },
  { id: "whirlpool", name: "Whirlpool", type: "Grand Design Spiral", distance: 23160000, description: "A interacting grand-design spiral galaxy." },
];
