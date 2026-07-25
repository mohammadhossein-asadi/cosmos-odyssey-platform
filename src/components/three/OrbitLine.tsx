"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface OrbitLineProps {
  radius: number;
  color?: string;
  opacity?: number;
  segments?: number;
}

function OrbitLine({
  radius,
  color = "#7c5cbf",
  opacity = 0.3,
  segments = 128,
}: OrbitLineProps) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return pts;
  }, [radius, segments]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  );
}

export { OrbitLine, type OrbitLineProps };
