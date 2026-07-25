"use client";

import { useState, useCallback } from "react";

interface PlanetFocusState {
  target: string | null;
  isZooming: boolean;
  cameraPosition: [number, number, number];
}

const PLANET_CAMERA_OFFSETS: Record<string, [number, number, number]> = {
  mercury: [2, 1, 3],
  venus: [3, 1.5, 4],
  earth: [3, 1.5, 4],
  mars: [3, 1.5, 4],
  jupiter: [5, 2, 6],
  saturn: [5, 2, 6],
  uranus: [4, 1.5, 5],
  neptune: [4, 1.5, 5],
};

export function usePlanetFocus() {
  const [focus, setFocus] = useState<PlanetFocusState>({
    target: null,
    isZooming: false,
    cameraPosition: [0, 15, 30],
  });

  const focusOnPlanet = useCallback((planetId: string) => {
    const offset = PLANET_CAMERA_OFFSETS[planetId] || [3, 1.5, 4];
    setFocus({
      target: planetId,
      isZooming: true,
      cameraPosition: offset,
    });
    setTimeout(() => setFocus((prev) => ({ ...prev, isZooming: false })), 1000);
  }, []);

  const resetFocus = useCallback(() => {
    setFocus({
      target: null,
      isZooming: true,
      cameraPosition: [0, 15, 30],
    });
    setTimeout(() => setFocus((prev) => ({ ...prev, isZooming: false })), 1000);
  }, []);

  return { focus, focusOnPlanet, resetFocus };
}
