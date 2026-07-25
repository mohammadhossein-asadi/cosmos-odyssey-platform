"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { TravelPhase, Destination, TravelRecord } from "../types";

interface UseTravelStateReturn {
  phase: TravelPhase;
  progress: number;
  speed: number;
  distanceCovered: number;
  startTravel: (destination: Destination) => void;
  cancelTravel: () => void;
  travelHistory: TravelRecord[];
}

export function useTravelState(): UseTravelStateReturn {
  const [phase, setPhase] = useState<TravelPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [distanceCovered, setDistanceCovered] = useState(0);
  const [travelHistory, setTravelHistory] = useState<TravelRecord[]>([]);
  const currentDestination = useRef<Destination | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const startTravel = useCallback((destination: Destination) => {
    currentDestination.current = destination;
    setPhase("preparing");
    setProgress(0);
    setSpeed(0);
    setDistanceCovered(0);
    startTimeRef.current = Date.now();

    const phases: { phase: TravelPhase; delay: number }[] = [
      { phase: "preparing", delay: 1500 },
      { phase: "launching", delay: 2000 },
      { phase: "warp", delay: 3000 },
      { phase: "cruise", delay: 8000 },
      { phase: "approaching", delay: 3000 },
      { phase: "arrived", delay: 0 },
    ];

    let totalDelay = 0;
    phases.forEach(({ phase: p, delay }) => {
      totalDelay += delay;
      setTimeout(() => {
        if (currentDestination.current?.id === destination.id) {
          setPhase(p);
        }
      }, totalDelay);
    });

    const animate = () => {
      setProgress((prev) => {
        const next = prev + 0.3;
        if (next >= 100) {
          const duration = (Date.now() - startTimeRef.current) / 1000;
          setTravelHistory((h) => [
            {
              id: Math.random().toString(36).slice(2),
              destination: destination.name,
              date: new Date().toISOString(),
              duration,
              distance: destination.distance,
            },
            ...h,
          ].slice(0, 10));
          return 100;
        }
        return next;
      });

      setSpeed((prev) => {
        const target = phase === "warp" ? 99 : phase === "cruise" ? 75 : phase === "approaching" ? 40 : 20;
        return prev + (target - prev) * 0.05;
      });

      setDistanceCovered((prev) => {
        if (!currentDestination.current) return prev;
        return (progress / 100) * currentDestination.current.distance;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [phase, progress]);

  const cancelTravel = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setPhase("idle");
    setProgress(0);
    setSpeed(0);
    setDistanceCovered(0);
    currentDestination.current = null;
  }, []);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return { phase, progress, speed, distanceCovered, startTravel, cancelTravel, travelHistory };
}
