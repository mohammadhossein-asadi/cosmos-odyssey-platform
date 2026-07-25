"use client";

import { useState, useEffect } from "react";
import { Destination, TravelPhase } from "../types";
import { SceneContainer } from "@/components/three/SceneContainer";
import { Starfield } from "@/components/three/Starfield";
import { WarpTunnel } from "./WarpTunnel";
import { Spacecraft } from "./Spacecraft";
import { TravelHUD } from "./TravelHUD";

interface TravelSequenceProps {
  destination: Destination;
  progress: number;
  phase: TravelPhase;
  speed: number;
  distanceCovered: number;
  onCancel: () => void;
}

const PHASE_CONFIG: Record<TravelPhase, { label: string; sublabel: string; color: string }> = {
  idle: { label: "", sublabel: "", color: "" },
  preparing: { label: "Systems Check", sublabel: "Initializing navigation systems...", color: "from-plasma-500 to-plasma-400" },
  launching: { label: "Launching", sublabel: "Engines firing. Liftoff!", color: "from-star-500 to-nebula-500" },
  warp: { label: "Warp Drive Active", sublabel: "Entering faster-than-light travel", color: "from-plasma-400 to-aurora-400" },
  cruise: { label: "Cruise Mode", sublabel: "Steady state travel through space", color: "from-aurora-400 to-plasma-300" },
  approaching: { label: "Approaching", sublabel: "Preparing for arrival", color: "from-star-400 to-aurora-400" },
  arrived: { label: "Arrived", sublabel: "Destination reached!", color: "from-aurora-400 to-star-400" },
};

function TravelSequence({
  destination,
  progress,
  phase,
  speed,
  distanceCovered,
  onCancel,
}: TravelSequenceProps) {
  const [showWarp, setShowWarp] = useState(false);
  const [showSpacecraft, setShowSpacecraft] = useState(false);
  const [starSize, setStarSize] = useState(0.2);
  const [bgColor, setBgColor] = useState("#030014");

  useEffect(() => {
    if (phase === "warp") {
      setShowWarp(true);
      setStarSize(1.5);
      setBgColor("#0a0020");
    } else if (phase === "cruise") {
      setShowWarp(false);
      setShowSpacecraft(true);
      setStarSize(0.4);
      setBgColor("#050015");
    } else if (phase === "approaching") {
      setShowSpacecraft(false);
      setStarSize(0.3);
      setBgColor("#080018");
    } else if (phase === "arrived") {
      setStarSize(0.2);
      setBgColor("#030014");
    }
  }, [phase]);

  const config = PHASE_CONFIG[phase];

  return (
    <div className="relative">
      <div
        className="h-[450px] md:h-[550px] rounded-xl overflow-hidden border border-border-default relative transition-colors duration-1000"
        style={{ backgroundColor: bgColor }}
      >
        <SceneContainer className="w-full h-full" camera={{ position: [0, 0, 5], fov: 60 }}>
          <Starfield
            count={phase === "warp" ? 8000 : 4000}
            radius={phase === "warp" ? 100 : 300}
            size={starSize}
            color={destination.color}
          />
          <WarpTunnel active={showWarp} color={destination.color} />
          {showSpacecraft && <Spacecraft position={[0, 0, 0]} active />}
        </SceneContainer>

        <TravelHUD
          destination={destination}
          progress={progress}
          speed={speed}
          distanceCovered={distanceCovered}
        />

        <div className="absolute inset-x-0 bottom-0 p-6">
          {phase !== "arrived" && (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-text-primary">{config.label}</span>
                <span className="text-xs text-text-muted">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-secondary/50 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${destination.color}, ${destination.color}cc)`,
                  }}
                />
              </div>
              <p className="text-[10px] text-text-muted mt-2 text-center">{config.sublabel}</p>
            </div>
          )}

          {phase === "arrived" && (
            <div className="text-center animate-scale-in">
              <div className="text-5xl mb-3">{destination.icon}</div>
              <h2 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-display)] mb-1">
                Welcome to {destination.name}!
              </h2>
              <p className="text-sm text-text-secondary mb-4">{destination.description}</p>

              {destination.funFacts && (
                <div className="max-w-lg mx-auto mb-4">
                  <div className="bg-surface-glass/60 backdrop-blur-md rounded-lg p-4 border border-border-default">
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Did you know?</h4>
                    <p className="text-sm text-text-secondary">{destination.funFacts[0]}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={onCancel}
                  className="px-5 py-2.5 rounded-lg bg-plasma-500 hover:bg-plasma-400 text-white text-sm font-medium transition-colors"
                >
                  Return to Hub
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {phase !== "arrived" && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-surface-glass border border-border-default text-text-muted hover:text-text-primary hover:border-plasma-500/30 text-xs transition-all"
          >
            Abort Mission
          </button>
        </div>
      )}
    </div>
  );
}

export { TravelSequence };
