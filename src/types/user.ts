export interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  level: number;
  xp: number;
  achievements: Achievement[];
  exploredObjects: string[];
  travelHistory: TravelRecord[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  category: "exploration" | "discovery" | "travel" | "learning";
}

export interface TravelRecord {
  id: string;
  from: string;
  to: string;
  date: string;
  duration: number;
}
