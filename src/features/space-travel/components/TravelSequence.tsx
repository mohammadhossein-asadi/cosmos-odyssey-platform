"use client";

import { useState, useEffect } from "react";
import { Destination } from "../types";
import { SceneContainer } from "@/components/three/SceneContainer";
import { Starfield } from "@/components/three/Starfield";

interface TravelSequenceProps {
  destination: Destination;
  onComplete: () => void;
}

function TravelSequence({ destination, onComplete }: TravelSequenceProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"warp" | "travel" | "arrive">("warp");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(interval);
          setPhase("arrive");
          return 100;
        }
        if (next > 30 && phase === "warp") setPhase("travel");
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="relative">
      <div className="h-[400px] rounded-xl overflow-hidden border border-border-default relative">
        <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 5], fov: 60 }}>
          <Starfield count={5000} radius={200} size={phase === "warp" ? 1.5 : 0.3} color={destination.color} />
        </SceneContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {phase === "warp" && (
              <div className="animate-pulse">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-xl text-text-primary font-semibold">Entering Warp...</div>
              </div>
            )}
            {phase === "travel" && (
              <div>
                <div className="text-4xl mb-4">{destination.icon}</div>
                <div className="text-xl text-text-primary font-semibold mb-2">Traveling to {destination.name}</div>
                <div className="text-sm text-text-secondary">{progress}% complete</div>
              </div>
            )}
            {phase === "arrive" && (
              <div className="animate-scale-in">
                <div className="text-6xl mb-4">{destination.icon}</div>
                <div className="text-2xl text-text-primary font-bold mb-2">Welcome to {destination.name}!</div>
                <div className="text-sm text-text-secondary mb-4">{destination.description}</div>
                <button
                  onClick={onComplete}
                  className="px-6 py-2 rounded-lg bg-plasma-500 hover:bg-plasma-400 text-white transition-colors"
                >
                  Return to Hub
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {phase !== "arrive" && (
        <div className="mt-4">
          <div className="h-2 rounded-full bg-surface-secondary overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-plasma-500 to-aurora-400 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export { TravelSequence };
