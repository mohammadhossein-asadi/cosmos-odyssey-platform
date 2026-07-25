export interface Mission {
  id: string;
  name: string;
  agency: string;
  type: "crewed" | "robotic" | "telescope" | "rover";
  status: "completed" | "active" | "planned" | "cancelled";
  startDate: string;
  endDate?: string;
  destination: string;
  description: string;
  objectives: string[];
  achievements: string[];
  technology: string[];
  image?: string;
}

export interface SpaceAgency {
  id: string;
  name: string;
  abbreviation: string;
  country: string;
  founded: number;
}
