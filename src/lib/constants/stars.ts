export const SPECTRAL_CLASSES = [
  { class: "O", color: "#9bb0ff", temperature: "> 30,000 K", description: "Blue stars" },
  { class: "B", color: "#aabfff", temperature: "10,000 - 30,000 K", description: "Blue-white stars" },
  { class: "A", color: "#cad7ff", temperature: "7,500 - 10,000 K", description: "White stars" },
  { class: "F", color: "#f8f7ff", temperature: "6,000 - 7,500 K", description: "Yellow-white stars" },
  { class: "G", color: "#fff4ea", temperature: "5,200 - 6,000 K", description: "Yellow stars" },
  { class: "K", color: "#ffd2a1", temperature: "3,700 - 5,200 K", description: "Orange stars" },
  { class: "M", color: "#ffcc6f", temperature: "< 3,700 K", description: "Red stars" },
] as const;
