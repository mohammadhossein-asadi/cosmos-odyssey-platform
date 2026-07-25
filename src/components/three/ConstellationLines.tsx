"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

interface ConstellationLinesProps {
  points: [number, number][];
  color?: string;
  opacity?: number;
}

function ConstellationLines({ points, color = "#7c5cbf", opacity = 0.5 }: ConstellationLinesProps) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    while (groupRef.current.children.length > 0) {
      const child = groupRef.current.children[0];
      groupRef.current.remove(child);
      if (child instanceof THREE.Line) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    }

    for (const [startIdx, endIdx] of points) {
      const start = points[startIdx];
      const end = points[endIdx];
      if (!start || !end) continue;

      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(start[0] * 10, start[1] * 10, 0),
        new THREE.Vector3(end[0] * 10, end[1] * 10, 0),
      ]);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
      const line = new THREE.Line(geo, mat);
      groupRef.current.add(line);
    }

    return () => {
      if (groupRef.current) {
        while (groupRef.current.children.length > 0) {
          const child = groupRef.current.children[0];
          groupRef.current.remove(child);
          if (child instanceof THREE.Line) {
            child.geometry.dispose();
            (child.material as THREE.Material).dispose();
          }
        }
      }
    };
  }, [points, color, opacity]);

  return <group ref={groupRef} />;
}

export { ConstellationLines };
