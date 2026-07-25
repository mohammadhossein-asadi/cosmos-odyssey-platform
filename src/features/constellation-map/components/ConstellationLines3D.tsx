"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { ConstellationStar, ConstellationLine } from "../types";

interface ConstellationLines3DProps {
  stars: ConstellationStar[];
  lines: ConstellationLine[];
  color?: string;
  opacity?: number;
}

function ConstellationLines3D({
  stars,
  lines,
  color = "#7c5cbf",
  opacity = 0.5,
}: ConstellationLines3DProps) {
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

    for (const line of lines) {
      const fromStar = stars[line.from];
      const toStar = stars[line.to];
      if (!fromStar || !toStar) continue;

      const x1 = (fromStar.ra / 360 - 0.5) * 20;
      const y1 = (fromStar.dec / 180) * 10;
      const x2 = (toStar.ra / 360 - 0.5) * 20;
      const y2 = (toStar.dec / 180) * 10;

      const points = [
        new THREE.Vector3(x1, y1, 0),
        new THREE.Vector3(x2, y2, 0),
      ];

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      const lineObj = new THREE.Line(geo, mat);
      groupRef.current.add(lineObj);
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
  }, [stars, lines, color, opacity]);

  return <group ref={groupRef} />;
}

export { ConstellationLines3D };
