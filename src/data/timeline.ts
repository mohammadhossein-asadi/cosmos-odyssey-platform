export interface TimelineEvent {
  id: string;
  year: number;
  era: string;
  title: string;
  description: string;
  significance: "major" | "minor" | "milestone";
  category: "cosmic" | "solar-system" | "earth" | "life" | "human";
}

export const cosmicTimeline: TimelineEvent[] = [
  { id: "big-bang", year: -13800000000, era: "Cosmic Dawn", title: "The Big Bang", description: "The universe begins from an infinitely dense singularity.", significance: "milestone", category: "cosmic" },
  { id: "first-stars", year: -13500000000, era: "Cosmic Dawn", title: "First Stars Form", description: "The first stars ignite, ending the cosmic dark ages.", significance: "major", category: "cosmic" },
  { id: "milky-way", year: -13200000000, era: "Galactic Evolution", title: "Milky Way Formation", description: "Our home galaxy begins to form from merging proto-galaxies.", significance: "major", category: "cosmic" },
  { id: "solar-system-formation", year: -4600000000, era: "Solar System Birth", title: "Solar System Forms", description: "A cloud of gas and dust collapses to form our Sun and planets.", significance: "milestone", category: "solar-system" },
  { id: "earth-formation", year: -4500000000, era: "Solar System Birth", title: "Earth Forms", description: "Our planet coalesces from debris in the protoplanetary disk.", significance: "milestone", category: "earth" },
  { id: "first-life", year: -3800000000, era: "Origins of Life", title: "First Life on Earth", description: "Simple single-celled organisms appear in the oceans.", significance: "milestone", category: "life" },
  { id: "oxygen-crisis", year: -2400000000, era: "Great Oxidation", title: "Great Oxidation Event", description: "Cyanobacteria produce oxygen, transforming Earth's atmosphere.", significance: "major", category: "earth" },
  { id: "first-complex-life", year: -600000000, era: "Cambrian Explosion", title: "Cambrian Explosion", description: "Rapid diversification of complex life forms.", significance: "milestone", category: "life" },
  { id: "first-dinosaurs", year: -230000000, era: "Age of Reptiles", title: "First Dinosaurs", description: "Dinosaurs appear and begin to dominate Earth.", significance: "major", category: "life" },
  { id: "moon-landing", year: 1969, era: "Space Age", title: "Moon Landing", description: "Humans first set foot on another celestial body.", significance: "milestone", category: "human" },
  { id: "hubble-launch", year: 1990, era: "Space Age", title: "Hubble Launched", description: "The Hubble Space Telescope begins revolutionizing astronomy.", significance: "major", category: "human" },
  { id: "jwst-launch", year: 2021, era: "Modern Era", title: "James Webb Launched", description: "The most powerful space telescope begins observing the cosmos.", significance: "milestone", category: "human" },
];

export const timelineEras = [
  { id: "cosmic-dawn", name: "Cosmic Dawn", start: -13800000000, end: -13000000000 },
  { id: "galactic-evolution", name: "Galactic Evolution", start: -13200000000, end: -5000000000 },
  { id: "solar-system-birth", name: "Solar System Birth", start: -4600000000, end: -4000000000 },
  { id: "origins-of-life", name: "Origins of Life", start: -3800000000, end: -500000000 },
  { id: "space-age", name: "Space Age", start: 1957, end: 2025 },
];
