"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface ConstellationLinesProps {
  points: [number, number][];
  color?: string;
  opacity?: number;
}

function ConstellationLines({ points, color = "#7c5cbf", opacity = 0.5 }: ConstellationLinesProps) {
  const lines = useMemo(() => {
    return points.map(([startIdx, endIdx]) => {
      const start = points[startIdx];
      const end = points[endIdx];
      if (!start || !end) return null;
      return [
        new THREE.Vector3(start[0] * 10, start[1] * 10, 0),
        new THREE.Vector3(end[0] * 10, end[1] * 10, 0),
      ];
    }).filter(Boolean);
  }, [points]);

  return (
    <group>
      {lines.map((line, i) => {
        if (!line) return null;
        const geometry = new THREE.BufferGeometry().setFromPoints(line);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color={color} transparent opacity={opacity} />
          </line>
        );
      })}
    </group>
  );
}

export { ConstellationLines };
