import { DeepSkyObject } from "../types";

export const deepSkyObjects: DeepSkyObject[] = [
  { id: "orion-nebula", name: "Orion Nebula (M42)", type: "nebula", galaxy: "milky-way", distance: 1344, description: "One of the brightest nebulae, visible to the naked eye. A stellar nursery.", color: "#ff6b8a", magnitude: 4.0, size: 24 },
  { id: "eagle-nebula", name: "Eagle Nebula (M16)", type: "nebula", galaxy: "milky-way", distance: 7000, description: "Home to the famous Pillars of Creation.", color: "#4a90d9", magnitude: 6.0, size: 7 },
  { id: "crab-nebula", name: "Crab Nebula (M1)", type: "nebula", galaxy: "milky-way", distance: 6523, description: "Remnant of a supernova observed in 1054 CE.", color: "#ff9500", magnitude: 8.4, size: 7 },
  { id: "ring-nebula", name: "Ring Nebula (M57)", type: "nebula", galaxy: "milky-way", distance: 2283, description: "A classic example of a planetary nebula.", color: "#6c5ce7", magnitude: 8.8, size: 1.5 },
  { id: "helix-nebula", name: "Helix Nebula (NGC 7293)", type: "nebula", galaxy: "milky-way", distance: 655, description: "One of the closest planetary nebulae to Earth.", color: "#00d4aa", magnitude: 7.6, size: 15 },
  { id: "pleiades", name: "Pleiades (M45)", type: "star-cluster", galaxy: "milky-way", distance: 444, description: "An open star cluster also known as the Seven Sisters.", color: "#aaccff", magnitude: 1.6, size: 110 },
  { id: "hyades", name: "Hyades", type: "star-cluster", galaxy: "milky-way", distance: 153, description: "Closest open cluster to the Solar System.", color: "#ffd93d", magnitude: 0.5, size: 330 },
  { id: "omega-centauri", name: "Omega Centauri", type: "star-cluster", galaxy: "milky-way", distance: 15800, description: "The largest and brightest globular cluster in the Milky Way.", color: "#fff4e0", magnitude: 3.9, size: 10 },
  { id: "sagittarius-a", name: "Sagittarius A*", type: "black-hole", galaxy: "milky-way", distance: 0, description: "The supermassive black hole at the center of our galaxy.", color: "#000000", magnitude: 0, size: 0 },
  { id: "andromeda-nebula", name: "Andromeda Galaxy Core", type: "nebula", galaxy: "andromeda", distance: 2537000, description: "The bright core region of the Andromeda Galaxy.", color: "#b8a0e0", magnitude: 3.4, size: 190 },
];
