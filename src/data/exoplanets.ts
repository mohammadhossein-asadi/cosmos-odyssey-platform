export interface Exoplanet {
  id: string;
  name: string;
  hostStar: string;
  discoveryYear: number;
  mass: number;
  radius: number;
  orbitalPeriod: number;
  distance: number;
  habitable: boolean;
}

export const exoplanets: Exoplanet[] = [
  { id: "kepler-442b", name: "Kepler-442b", hostStar: "Kepler-442", discoveryYear: 2015, mass: 2.34, radius: 1.34, orbitalPeriod: 112.3, distance: 1206, habitable: true },
  { id: "kepler-22b", name: "Kepler-22b", hostStar: "Kepler-22", discoveryYear: 2011, mass: 36, radius: 2.38, orbitalPeriod: 289.9, distance: 638, habitable: true },
  { id: "proxima-b", name: "Proxima Centauri b", hostStar: "Proxima Centauri", discoveryYear: 2016, mass: 1.27, radius: 1.1, orbitalPeriod: 11.2, distance: 4.24, habitable: true },
  { id: "trappist-1e", name: "TRAPPIST-1e", hostStar: "TRAPPIST-1", discoveryYear: 2017, mass: 0.692, radius: 0.92, orbitalPeriod: 6.1, distance: 40.7, habitable: true },
];
