import { NavLink } from "@/types/common";

export const mainNavigation: NavLink[] = [
  { label: "Solar System", href: "/solar-system", icon: "planet" },
  { label: "Space Travel", href: "/space-travel", icon: "rocket" },
  { label: "Star Explorer", href: "/star-explorer", icon: "star" },
  { label: "Encyclopedia", href: "/encyclopedia", icon: "book" },
];

export const secondaryNavigation: NavLink[] = [
  { label: "Black Holes", href: "/black-hole", icon: "hole" },
  { label: "Timeline", href: "/cosmic-timeline", icon: "clock" },
  { label: "Missions", href: "/missions", icon: "satellite" },
  { label: "Profile", href: "/profile", icon: "user" },
];

export const allNavigation = [...mainNavigation, ...secondaryNavigation];
