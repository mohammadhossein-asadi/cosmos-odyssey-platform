export interface Nebula {
  id: string;
  name: string;
  type: string;
  constellation: string;
  distance: number;
  description: string;
  color: string;
}

export const nebulae: Nebula[] = [
  { id: "orion-nebula", name: "Orion Nebula", type: "Emission", constellation: "Orion", distance: 1344, description: "One of the brightest nebulae, visible to the naked eye.", color: "#ff6b8a" },
  { id: "eagle-nebula", name: "Eagle Nebula", type: "Emission", constellation: "Serpens", distance: 7000, description: "Home to the famous Pillars of Creation.", color: "#4a90d9" },
  { id: "crab-nebula", name: "Crab Nebula", type: "Supernova Remnant", constellation: "Taurus", distance: 6523, description: "Remnant of a supernova observed in 1054 CE.", color: "#ff9500" },
  { id: "ring-nebula", name: "Ring Nebula", type: "Planetary", constellation: "Lyra", distance: 2283, description: "A classic example of a planetary nebula.", color: "#6c5ce7" },
  { id: "helix-nebula", name: "Helix Nebula", type: "Planetary", constellation: "Aquarius", distance: 655, description: "One of the closest planetary nebulae to Earth.", color: "#00d4aa" },
];
