"use client";

import { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";

interface UseOrbitAnimationProps {
  orbitRadius: number;
  speed: number;
  initialAngle?: number;
  inclination?: number;
}

export function useOrbitAnimation({
  orbitRadius,
  speed,
  initialAngle = 0,
  inclination = 0,
}: UseOrbitAnimationProps) {
  const angleRef = useRef(initialAngle);
  const positionRef = useRef<[number, number, number]>([0, 0, 0]);

  useFrame((_, delta) => {
    angleRef.current += speed * delta;
    const x = Math.cos(angleRef.current) * orbitRadius;
    const z = Math.sin(angleRef.current) * orbitRadius;
    const y = Math.sin(angleRef.current) * inclination;
    positionRef.current = [x, y, z];
  });

  const getPosition = useCallback(() => positionRef.current, []);

  return { positionRef, getPosition, angleRef };
}
