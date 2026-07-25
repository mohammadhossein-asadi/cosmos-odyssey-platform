export const ACHIEVEMENT_CATEGORIES = ["exploration", "discovery", "travel", "learning"] as const;

export const ACHIEVEMENTS = [
  { id: "first-planet", name: "First Steps", description: "Visit your first planet", category: "exploration", icon: "🌍" },
  { id: "solar-explorer", name: "Solar Explorer", description: "Visit all 8 planets", category: "exploration", icon: "☀️" },
  { id: "star-gazer", name: "Star Gazer", description: "Discover 10 stars", category: "discovery", icon: "⭐" },
  { id: "time-traveler", name: "Time Traveler", description: "View the cosmic timeline", category: "learning", icon: "⏰" },
  { id: "space-tourist", name: "Space Tourist", description: "Complete 5 space journeys", category: "travel", icon: "🚀" },
] as const;
