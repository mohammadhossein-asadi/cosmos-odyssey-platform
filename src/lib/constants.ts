export const SITE_NAME = "Cosmos Odyssey";
export const SITE_DESCRIPTION = "An immersive interactive space exploration and astronomy experience platform";
export const SITE_URL = "https://cosmos-odyssey-platform.vercel.app";

export const NAVIGATION_ITEMS = [
  { label: "Solar System", href: "/solar-system", icon: "planet" },
  { label: "Space Travel", href: "/space-travel", icon: "rocket" },
  { label: "Star Explorer", href: "/star-explorer", icon: "star" },
  { label: "Encyclopedia", href: "/encyclopedia", icon: "book" },
  { label: "Black Holes", href: "/black-hole", icon: "hole" },
  { label: "Timeline", href: "/cosmic-timeline", icon: "clock" },
  { label: "Missions", href: "/missions", icon: "satellite" },
  { label: "Profile", href: "/profile", icon: "user" },
] as const;

export const PLANET_COLORS: Record<string, string> = {
  mercury: "#b5b5b5",
  venus: "#e8cda0",
  earth: "#4a90d9",
  mars: "#c1440e",
  jupiter: "#c88b3a",
  saturn: "#e4c46e",
  uranus: "#4fd0e7",
  neptune: "#4b70dd",
};

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  ultrawide: 1536,
} as const;
