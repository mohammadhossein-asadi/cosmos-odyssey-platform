"use client";

import { useEffect, useState } from "react";
import { Destination } from "../types";

interface TravelHUDProps {
  destination: Destination;
  progress: number;
  speed: number;
  distanceCovered: number;
}

function TravelHUD({ destination, progress, speed, distanceCovered }: TravelHUDProps) {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinates({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        z: Math.random() * 100 - 50,
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const formatDistance = (km: number) => {
    if (km >= 1e9) return (km / 1e9).toFixed(2) + "B km";
    if (km >= 1e6) return (km / 1e6).toFixed(1) + "M km";
    return Math.round(km).toLocaleString() + " km";
  };

  return (
    <div className="absolute inset-x-0 top-0 p-4 pointer-events-none">
      <div className="flex justify-between items-start">
        <div className="bg-surface-glass/80 backdrop-blur-md rounded-lg px-4 py-3 border border-border-default">
          <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Speed</div>
          <div className="text-xl font-bold text-plasma-300 font-mono">{Math.round(speed)}%</div>
          <div className="text-[10px] text-text-muted">Warp factor {(speed / 20).toFixed(1)}</div>
        </div>

        <div className="bg-surface-glass/80 backdrop-blur-md rounded-lg px-4 py-3 border border-border-default text-center">
          <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Destination</div>
          <div className="flex items-center gap-2">
            <span className="text-lg">{destination.icon}</span>
            <span className="text-sm font-semibold text-text-primary">{destination.name}</span>
          </div>
          <div className="text-[10px] text-text-muted mt-1">{destination.travelTime} journey</div>
        </div>

        <div className="bg-surface-glass/80 backdrop-blur-md rounded-lg px-4 py-3 border border-border-default text-right">
          <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Distance</div>
          <div className="text-xl font-bold text-aurora-400 font-mono">{formatDistance(distanceCovered)}</div>
          <div className="text-[10px] text-text-muted">of {formatDistance(destination.distance)}</div>
        </div>
      </div>

      <div className="mt-4 bg-surface-glass/60 backdrop-blur-md rounded-lg px-4 py-2 border border-border-default inline-flex items-center gap-4">
        <div className="text-[10px] text-text-muted">
          COORD: [{coordinates.x.toFixed(2)}, {coordinates.y.toFixed(2)}, {coordinates.z.toFixed(2)}]
        </div>
        <div className="w-px h-4 bg-border-default" />
        <div className="text-[10px] text-text-muted">
          PROGRESS: {progress.toFixed(1)}%
        </div>
        <div className="w-px h-4 bg-border-default" />
        <div className="text-[10px] text-text-muted">
          STATUS: {progress >= 100 ? "ARRIVED" : "IN TRANSIT"}
        </div>
      </div>
    </div>
  );
}

export { TravelHUD };
