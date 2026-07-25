import { Mission } from "@/types/mission";

export function getMissionsByAgency(missions: Mission[], agency: string): Mission[] {
  return missions.filter((m) => m.agency.includes(agency));
}

export function getActiveMissions(missions: Mission[]): Mission[] {
  return missions.filter((m) => m.status === "active");
}

export function getMissionsByType(missions: Mission[], type: Mission["type"]): Mission[] {
  return missions.filter((m) => m.type === type);
}

export function sortMissionsByDate(missions: Mission[]): Mission[] {
  return [...missions].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}
