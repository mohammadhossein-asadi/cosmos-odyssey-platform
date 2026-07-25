import { GalaxyPosition } from "../types";

export const localGroupGalaxies: GalaxyPosition[] = [
  { id: "milky-way", name: "Milky Way", x: 0, y: 0, z: 0, distance: 0, type: "spiral", magnitude: -26.74, color: "#e8d5b7", size: 1.0, description: "Our home galaxy, a barred spiral containing 200-400 billion stars." },
  { id: "andromeda", name: "Andromeda (M31)", x: 770, y: 120, z: -180, distance: 2537000, type: "spiral", magnitude: 3.44, color: "#b8a0e0", size: 0.9, description: "The nearest large galaxy. Approaching the Milky Way at 110 km/s." },
  { id: "triangulum", name: "Triangulum (M33)", x: 840, y: -230, z: -140, distance: 2730000, type: "spiral", magnitude: 5.72, color: "#a299f3", size: 0.4, description: "Third-largest galaxy in the Local Group. Contains NGC 604 star-forming region." },
  { id: "lmc", name: "Large Magellanic Cloud", x: -49, y: 33, z: -41, distance: 160000, type: "irregular", magnitude: 0.9, color: "#ff6b8a", size: 0.3, description: "Satellite galaxy of the Milky Way. Contains the Tarantula Nebula." },
  { id: "smc", name: "Small Magellanic Cloud", x: -61, y: 39, z: -65, distance: 200000, type: "irregular", magnitude: 2.7, color: "#c0c0c0", size: 0.2, description: "A dwarf irregular galaxy and satellite of the Milky Way." },
  { id: "m32", name: "M32", x: 760, y: 130, z: -175, distance: 2480000, type: "elliptical", magnitude: 8.08, color: "#d4c4a0", size: 0.15, description: "A compact elliptical galaxy near Andromeda." },
  { id: "m110", name: "M110", x: 790, y: 100, z: -195, distance: 2690000, type: "elliptical", magnitude: 8.92, color: "#c4b490", size: 0.12, description: "A small elliptical galaxy near Andromeda." },
  { id: "ngc-185", name: "NGC 185", x: 720, y: 90, z: -160, distance: 2080000, type: "elliptical", magnitude: 9.21, color: "#b4a480", size: 0.08, description: "A dwarf elliptical satellite of Andromeda." },
  { id: "ngc-147", name: "NGC 147", x: 710, y: 85, z: -155, distance: 2580000, type: "elliptical", magnitude: 9.56, color: "#a49470", size: 0.07, description: "A dwarf elliptical companion to Andromeda." },
  { id: "ic-10", name: "IC 10", x: 660, y: -50, z: -120, distance: 2200000, type: "irregular", magnitude: 9.5, color: "#ff9eb5", size: 0.06, description: "A dwarf irregular galaxy with active star formation." },
  { id: "ngc-6822", name: "NGC 6822", x: 540, y: -210, z: -100, distance: 1630000, type: "irregular", magnitude: 9.3, color: "#ff8fab", size: 0.05, description: "Barnard's Galaxy, a nearby irregular dwarf." },
  { id: "ic-1613", name: "IC 1613", x: 720, y: -240, z: -150, distance: 2380000, type: "irregular", magnitude: 10.0, color: "#ffb3c6", size: 0.04, description: "A dwarf irregular galaxy in Cetus." },
  { id: "phoenix-dwarf", name: "Phoenix Dwarf", x: -80, y: -60, z: 30, distance: 1400000, type: "dwarf", magnitude: 13.0, color: "#c4a882", size: 0.03, description: "A dwarf galaxy transitioning between irregular and spheroidal." },
  { id: "leo-i", name: "Leo I", x: 120, y: 80, z: -60, distance: 820000, type: "dwarf", magnitude: 11.2, color: "#d4c4a0", size: 0.04, description: "A dwarf spheroidal galaxy in Leo." },
  { id: "leo-ii", name: "Leo II", x: 140, y: 90, z: -70, distance: 780000, type: "dwarf", magnitude: 12.6, color: "#c4b490", size: 0.03, description: "A dwarf spheroidal satellite of the Milky Way." },
];

export const virgoClusterGalaxies: GalaxyPosition[] = [
  { id: "m87", name: "M87 (Virgo A)", x: 16500, y: 1200, z: -400, distance: 53500000, type: "elliptical", magnitude: 8.6, color: "#b8a0e0", size: 0.8, description: "Giant elliptical galaxy with supermassive black hole." },
  { id: "m86", name: "M86", x: 16200, y: 800, z: -350, distance: 52000000, type: "elliptical", magnitude: 8.9, color: "#c4b4a0", size: 0.5, description: "Lenticular galaxy in the Virgo Cluster." },
  { id: "m84", name: "M84", x: 16300, y: 900, z: -360, distance: 54000000, type: "elliptical", magnitude: 9.1, color: "#b4a490", size: 0.45, description: "Elliptical galaxy near M86." },
  { id: "m60", name: "M60", x: 16800, y: 1500, z: -420, distance: 55000000, type: "elliptical", magnitude: 8.8, color: "#d4c4b0", size: 0.55, description: "One of the largest ellipticals in Virgo." },
  { id: "m49", name: "M49", x: 15800, y: 600, z: -320, distance: 52000000, type: "elliptical", magnitude: 8.4, color: "#c4b4a0", size: 0.6, description: "First galaxy outside the Local Group discovered." },
  { id: "m100", name: "M100", x: 16000, y: 1000, z: -380, distance: 56000000, type: "spiral", magnitude: 9.3, color: "#4a90d9", size: 0.4, description: "Grand design spiral galaxy in Virgo." },
  { id: "m88", name: "M88", x: 16400, y: 1100, z: -390, distance: 50000000, type: "spiral", magnitude: 9.6, color: "#6ba3d9", size: 0.35, description: "Spiral galaxy with well-defined arms." },
  { id: "m98", name: "M98", x: 16100, y: 700, z: -340, distance: 54000000, type: "spiral", magnitude: 10.2, color: "#5a98c9", size: 0.3, description: "Nearly edge-on spiral galaxy." },
  { id: "m104", name: "M104 (Sombrero)", x: 15900, y: 850, z: -370, distance: 29350000, type: "lenticular", magnitude: 8.0, color: "#e4c46e", size: 0.5, description: "Famous for its prominent dust lane." },
  { id: "m59", name: "M59", x: 16700, y: 1400, z: -410, distance: 55000000, type: "elliptical", magnitude: 9.6, color: "#b4a490", size: 0.4, description: "Elliptical galaxy in the Virgo Cluster." },
];

export const comaClusterGalaxies: GalaxyPosition[] = [
  { id: "ngc-4889", name: "NGC 4889", x: 320000, y: 8000, z: 4000, distance: 320000000, type: "elliptical", magnitude: 11.4, color: "#d4c4a0", size: 0.7, description: "The brightest galaxy in the Coma Cluster." },
  { id: "ngc-4874", name: "NGC 4874", x: 319000, y: 7800, z: 3900, distance: 320000000, type: "elliptical", magnitude: 11.7, color: "#c4b490", size: 0.6, description: "Second brightest galaxy in Coma." },
  { id: "ngc-4911", name: "NGC 4911", x: 321000, y: 8200, z: 4100, distance: 320000000, type: "spiral", magnitude: 12.3, color: "#4a90d9", size: 0.3, description: "Spiral galaxy in the Coma Cluster." },
];
