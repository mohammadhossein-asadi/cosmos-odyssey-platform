"use client";

import { useState, useCallback } from "react";

interface UseThreeSceneOptions {
  initialCameraPosition?: [number, number, number];
  enableAutoRotate?: boolean;
}

export function useThreeScene(options: UseThreeSceneOptions = {}) {
  const { initialCameraPosition = [0, 5, 15], enableAutoRotate = false } = options;
  const [isLoaded, setIsLoaded] = useState(false);

  const onSceneReady = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return {
    cameraPosition: initialCameraPosition,
    autoRotate: enableAutoRotate,
    isLoaded,
    onSceneReady,
  };
}
