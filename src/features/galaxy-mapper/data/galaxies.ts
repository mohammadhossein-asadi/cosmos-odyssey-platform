import { GalaxyPosition } from "../types";

export const localGroupGalaxies: GalaxyPosition[] = [
  { id: "milky-way", name: "Milky Way", x: 0, y: 0, z: 0, distance: 0, type: "spiral", magnitude: -26.74, color: "#e8d5b7", size: 1.0 },
  { id: "andromeda", name: "Andromeda (M31)", x: 770, y: 120, z: -180, distance: 2537000, type: "spiral", magnitude: 3.44, color: "#b8a0e0", size: 0.9 },
  { id: "triangulum", name: "Triangulum (M33)", x: 840, y: -230, z: -140, distance: 2730000, type: "spiral", magnitude: 5.72, color: "#a299f3", size: 0.4 },
  { id: "lmc", name: "Large Magellanic Cloud", x: -49, y: 33, z: -41, distance: 160000, type: "irregular", magnitude: 0.9, color: "#ff6b8a", size: 0.3 },
  { id: "smc", name: "Small Magellanic Cloud", x: -61, y: 39, z: -65, distance: 200000, type: "irregular", magnitude: 2.7, color: "#c0c0c0", size: 0.2 },
  { id: "m32", name: "M32", x: 760, y: 130, z: -175, distance: 2480000, type: "elliptical", magnitude: 8.08, color: "#d4c4a0", size: 0.15 },
  { id: "m110", name: "M110", x: 790, y: 100, z: -195, distance: 2690000, type: "elliptical", magnitude: 8.92, color: "#c4b490", size: 0.12 },
  { id: "ngc-185", name: "NGC 185", x: 720, y: 90, z: -160, distance: 2080000, type: "elliptical", magnitude: 9.21, color: "#b4a480", size: 0.08 },
  { id: "ngc-147", name: "NGC 147", x: 710, y: 85, z: -155, distance: 2580000, type: "elliptical", magnitude: 9.56, color: "#a49470", size: 0.07 },
  { id: "ic-10", name: "IC 10", x: 660, y: -50, z: -120, distance: 2200000, type: "irregular", magnitude: 9.5, color: "#ff9eb5", size: 0.06 },
  { id: "ngc-6822", name: "NGC 6822", x: 540, y: -210, z: -100, distance: 1630000, type: "irregular", magnitude: 9.3, color: "#ff8fab", size: 0.05 },
  { id: "ic-1613", name: "IC 1613", x: 720, y: -240, z: -150, distance: 2380000, type: "irregular", magnitude: 10.0, color: "#ffb3c6", size: 0.04 },
];

export const virgoClusterGalaxies: GalaxyPosition[] = [
  { id: "m87", name: "M87 (Virgo A)", x: 16500, y: 1200, z: -400, distance: 53500000, type: "elliptical", magnitude: 8.6, color: "#b8a0e0", size: 0.8 },
  { id: "m86", name: "M86", x: 16200, y: 800, z: -350, distance: 52000000, type: "elliptical", magnitude: 8.9, color: "#c4b4a0", size: 0.5 },
  { id: "m84", name: "M84", x: 16300, y: 900, z: -360, distance: 54000000, type: "elliptical", magnitude: 9.1, color: "#b4a490", size: 0.45 },
  { id: "m60", name: "M60", x: 16800, y: 1500, z: -420, distance: 55000000, type: "elliptical", magnitude: 8.8, color: "#d4c4b0", size: 0.55 },
  { id: "m49", name: "M49", x: 15800, y: 600, z: -320, distance: 52000000, type: "elliptical", magnitude: 8.4, color: "#c4b4a0", size: 0.6 },
  { id: "m100", name: "M100", x: 16000, y: 1000, z: -380, distance: 56000000, type: "spiral", magnitude: 9.3, color: "#4a90d9", size: 0.4 },
  { id: "m88", name: "M88", x: 16400, y: 1100, z: -390, distance: 50000000, type: "spiral", magnitude: 9.6, color: "#6ba3d9", size: 0.35 },
  { id: "m98", name: "M98", x: 16100, y: 700, z: -340, distance: 54000000, type: "spiral", magnitude: 10.2, color: "#5a98c9", size: 0.3 },
];

export const andromedaClusterGalaxies: GalaxyPosition[] = [
  { id: "m31-core", name: "M31 Core", x: 770, y: 120, z: -180, distance: 2537000, type: "spiral", magnitude: 3.44, color: "#b8a0e0", size: 0.9 },
  { id: "m32-core", name: "M32", x: 760, y: 130, z: -175, distance: 2480000, type: "elliptical", magnitude: 8.08, color: "#d4c4a0", size: 0.15 },
  { id: "m110-core", name: "M110", x: 790, y: 100, z: -195, distance: 2690000, type: "elliptical", magnitude: 8.92, color: "#c4b490", size: 0.12 },
];
