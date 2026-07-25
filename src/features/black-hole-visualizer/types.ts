export type BlackHoleType = "stellar" | "intermediate" | "supermassive" | "primordial";

export type BlackHoleState = "dormant" | "feeding" | "quasar";

export interface BlackHoleData {
  id: string;
  name: string;
  type: BlackHoleType;
  mass: number;
  massUnit: string;
  radius: number;
  distance: number;
  constellation: string | null;
  discoveryYear: number;
  discoveredBy: string;
  description: string;
  color: string;
  accretionColor: string;
  state: BlackHoleState;
  spin: number;
  charge: number;
  temperature: number;
  luminosity: number;
  funFacts: string[];
  scientificDetails: {
    eventHorizonRadius: string;
    schwarzschildRadius: string;
    hawkingTemperature: string;
    timeDilation: string;
    tidalForce: string;
  };
}

export interface BlackHoleConfig {
  mass: number;
  spin: number;
  showAccretionDisk: boolean;
  showEventHorizon: boolean;
  showRelativisticJets: boolean;
  showPhotonSphere: boolean;
  showErgosphere: boolean;
  accretionRate: number;
  viewingAngle: number;
}
