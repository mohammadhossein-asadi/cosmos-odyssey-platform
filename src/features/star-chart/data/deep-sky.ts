import { DeepSkyObject } from "../types";

export const deepSkyObjects: DeepSkyObject[] = [
  { id: "orion-nebula", name: "Orion Nebula", type: "nebula", x: 0.48, y: 0.35, magnitude: 4.0, size: 24, constellation: "Orion", description: "One of the brightest nebulae, visible to naked eye." },
  { id: "pleiades", name: "Pleiades", type: "cluster", x: 0.33, y: 0.28, magnitude: 1.6, size: 110, constellation: "Taurus", description: "The Seven Sisters star cluster." },
  { id: "double-cluster", name: "Double Cluster", type: "cluster", x: 0.38, y: 0.2, magnitude: 3.7, size: 60, constellation: "Perseus", description: "Two open clusters close together." },
  { id: "andromeda-galaxy", name: "Andromeda Galaxy", type: "galaxy", x: 0.83, y: 0.38, magnitude: 3.4, size: 190, constellation: "Andromeda", description: "Nearest large galaxy to Milky Way." },
  { id: "-ring-nebula", name: "Ring Nebula", type: "nebula", x: 0.71, y: 0.22, magnitude: 8.8, size: 1.5, constellation: "Lyra", description: "A classic planetary nebula." },
  { id: "dumbbell-nebula", name: "Dumbbell Nebula", type: "nebula", x: 0.78, y: 0.48, magnitude: 7.5, size: 8, constellation: "Vulpecula", description: "A planetary nebula shaped like a dumbbell." },
  { id: "omega-centauri", name: "Omega Centauri", type: "cluster", x: 0.55, y: 0.85, magnitude: 3.9, size: 10, constellation: "Centaurus", description: "Largest globular cluster visible." },
  { id: "m31-galaxy", name: "M31 Companion", type: "galaxy", x: 0.84, y: 0.37, magnitude: 8.1, size: 10, constellation: "Andromeda", description: "Satellite galaxy of Andromeda." },
  { id: "crab-nebula", name: "Crab Nebula", type: "nebula", x: 0.36, y: 0.32, magnitude: 8.4, size: 7, constellation: "Taurus", description: "Supernova remnant from 1054 CE." },
  { id: "alfa-centauri", name: "Alpha Centauri", type: "double-star", x: 0.58, y: 0.9, magnitude: -0.27, size: 0, constellation: "Centaurus", description: "Closest star system to Sun." },
];
