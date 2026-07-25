export const MISSION_TYPES = ["crewed", "robotic", "telescope", "rover"] as const;
export type MissionType = (typeof MISSION_TYPES)[number];

export const MISSION_STATUSES = ["completed", "active", "planned", "cancelled"] as const;
export type MissionStatus = (typeof MISSION_STATUSES)[number];

export const MISSION_AGENCIES = [
  "NASA",
  "ESA",
  "Roscosmos",
  "CNSA",
  "ISRO",
  "JAXA",
] as const;
