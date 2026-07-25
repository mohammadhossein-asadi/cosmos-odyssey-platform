"use client";

import { useState, useCallback } from "react";
import { ViewMode } from "../types";

interface UseVizStateReturn {
  selectedPlanet: string | null;
  timeScale: number;
  showOrbits: boolean;
  showLabels: boolean;
  showAsteroids: boolean;
  showDwarfPlanets: boolean;
  showGrid: boolean;
  viewMode: ViewMode;
  setSelectedPlanet: (id: string | null) => void;
  setTimeScale: (scale: number) => void;
  setShowOrbits: (show: boolean) => void;
  setShowLabels: (show: boolean) => void;
  setShowAsteroids: (show: boolean) => void;
  setShowDwarfPlanets: (show: boolean) => void;
  setShowGrid: (show: boolean) => void;
  setViewMode: (mode: ViewMode) => void;
}

export function useVizState(): UseVizStateReturn {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [timeScale, setTimeScale] = useState(1);
  const [showOrbits, setShowOrbits] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showAsteroids, setShowAsteroids] = useState(false);
  const [showDwarfPlanets, setShowDwarfPlanets] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("realistic");

  return {
    selectedPlanet,
    timeScale,
    showOrbits,
    showLabels,
    showAsteroids,
    showDwarfPlanets,
    showGrid,
    viewMode,
    setSelectedPlanet,
    setTimeScale,
    setShowOrbits,
    setShowLabels,
    setShowAsteroids,
    setShowDwarfPlanets,
    setShowGrid,
    setViewMode,
  };
}
