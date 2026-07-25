"use client";

import { useMemo } from "react";
import { planets } from "@/data/planets";
import { Planet } from "@/types/celestial";

export function usePlanetData() {
  const planetMap = useMemo(() => {
    const map = new Map<string, Planet>();
    planets.forEach((p) => map.set(p.id, p));
    return map;
  }, []);

  const getPlanet = (id: string): Planet | undefined => planetMap.get(id);

  const getPlanetOrIndex = (id: string): number => {
    return planets.findIndex((p) => p.id === id);
  };

  const getNextPlanet = (id: string): Planet | null => {
    const idx = getPlanetOrIndex(id);
    return idx < planets.length - 1 ? planets[idx + 1] : null;
  };

  const getPrevPlanet = (id: string): Planet | null => {
    const idx = getPlanetOrIndex(id);
    return idx > 0 ? planets[idx - 1] : null;
  };

  const totalMoons = useMemo(() => {
    return planets.reduce((sum, p) => sum + p.moons.length, 0);
  }, []);

  return { planets, getPlanet, getNextPlanet, getPrevPlanet, totalMoons };
}
