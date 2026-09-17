"use client";

import React, { useRef, useEffect, useMemo } from "react";
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
  const lineRef = useRef<THREE.Line>(null);
  const lineObject = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    return new THREE.Line(geometry, material);
  }, [radius, segments, color, opacity]);

  useEffect(() => {
    return () => {
      lineObject.geometry.dispose();
      (lineObject.material as THREE.Material).dispose();
    };
  }, [lineObject]);

  return <primitive object={lineObject} ref={lineRef} />;
}

export { OrbitLine, type OrbitLineProps };
