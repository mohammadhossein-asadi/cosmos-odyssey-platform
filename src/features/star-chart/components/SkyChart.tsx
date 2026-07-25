"use client";

import { useMemo } from "react";
import { skyStars } from "../data/stars";
import { skyConstellations } from "../data/constellations";
import { deepSkyObjects } from "../data/deep-sky";
import { ChartConfig } from "../types";

interface SkyChartProps {
  config: ChartConfig;
  onObjectSelect: (id: string, type: "star" | "constellation" | "deep-sky") => void;
  selectedObject: string | null;
}

function SkyChart({ config, onObjectSelect, selectedObject }: SkyChartProps) {
  const visibleStars = useMemo(() => {
    return skyStars.filter((s) => s.magnitude <= config.magnitudeLimit);
  }, [config.magnitudeLimit]);

  const visibleConstellations = useMemo(() => {
    if (!config.showConstellations) return [];
    return skyConstellations.filter((c) => {
      if (config.season === "all") return true;
      return c.season === config.season || c.hemisphere === config.hemisphere;
    });
  }, [config.showConstellations, config.season, config.hemisphere]);

  const constellationLines = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    visibleConstellations.forEach((c) => {
      c.lines.forEach(([fromIdx, toIdx]) => {
        const fromStar = skyStars.find((s) => s.id === c.stars[fromIdx]);
        const toStar = skyStars.find((s) => s.id === c.stars[toIdx]);
        if (fromStar && toStar) {
          lines.push({ x1: fromStar.x, y1: fromStar.y, x2: toStar.x, y2: toStar.y });
        }
      });
    });
    return lines;
  }, [visibleConstellations]);

  const starSize = (magnitude: number) => Math.max(2, 8 - magnitude * 1.5);

  return (
    <div className="relative w-full h-full bg-cosmic-900 rounded-xl overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-cosmic-800/50 via-cosmic-900 to-cosmic-900" />

      {/* Grid lines */}
      {config.gridLines && (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[0.25, 0.5, 0.75].map((pos) => (
            <g key={pos}>
              <line x1={`${pos * 100}%`} y1="0" x2={`${pos * 100}%`} y2="100%" stroke="#7c5cbf" strokeWidth="0.5" />
              <line x1="0" y1={`${pos * 100}%`} x2="100%" y2={`${pos * 100}%`} stroke="#7c5cbf" strokeWidth="0.5" />
            </g>
          ))}
          <circle cx="50%" cy="50%" r="25%" fill="none" stroke="#7c5cbf" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="50%" fill="none" stroke="#7c5cbf" strokeWidth="0.5" />
        </svg>
      )}

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {constellationLines.map((line, i) => (
          <line
            key={i}
            x1={`${line.x1 * 100}%`}
            y1={`${line.y1 * 100}%`}
            x2={`${line.x2 * 100}%`}
            y2={`${line.y2 * 100}%`}
            stroke="#7c5cbf"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}
      </svg>

      {/* Deep sky objects */}
      {config.showDeepSky && deepSkyObjects.map((obj) => (
        <button
          key={obj.id}
          onClick={() => onObjectSelect(obj.id, "deep-sky")}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform"
          style={{ left: `${obj.x * 100}%`, top: `${obj.y * 100}%` }}
        >
          <div
            className="rounded-full"
            style={{
              width: Math.max(4, obj.size / 20),
              height: Math.max(4, obj.size / 20),
              backgroundColor: obj.type === "nebula" ? "#ff6b8a" : obj.type === "galaxy" ? "#b8a0e0" : "#aaccff",
              opacity: 0.6,
              boxShadow: `0 0 ${obj.size / 10}px ${obj.type === "nebula" ? "#ff6b8a" : "#aaccff"}`,
            }}
          />
          {config.showLabels && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[7px] text-text-muted whitespace-nowrap">
              {obj.name}
            </div>
          )}
        </button>
      ))}

      {/* Stars */}
      {visibleStars.map((star) => {
        const size = starSize(star.magnitude);
        const isSelected = selectedObject === star.id;

        return (
          <button
            key={star.id}
            onClick={() => onObjectSelect(star.id, "star")}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform"
            style={{ left: `${star.x * 100}%`, top: `${star.y * 100}%` }}
          >
            <div
              className="rounded-full"
              style={{
                width: size,
                height: size,
                backgroundColor: star.color,
                boxShadow: `0 0 ${size}px ${star.color}`,
              }}
            />
            {config.showLabels && size > 4 && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[8px] text-text-muted whitespace-nowrap">
                {star.name}
              </div>
            )}
          </button>
        );
      })}

      {/* Compass labels */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-plasma-300 font-semibold">N</div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-plasma-300 font-semibold">S</div>
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-plasma-300 font-semibold">E</div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-plasma-300 font-semibold">W</div>
    </div>
  );
}

export { SkyChart };
