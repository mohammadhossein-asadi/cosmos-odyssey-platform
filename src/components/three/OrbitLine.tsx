"use client";

import React, { useRef, useEffect } from "react";
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

  useEffect(() => {
    if (!lineRef.current) return;
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    lineRef.current.geometry.dispose();
    lineRef.current.geometry = geo;
  }, [radius, segments]);

  useEffect(() => {
    if (lineRef.current) {
      (lineRef.current.material as THREE.LineBasicMaterial).opacity = opacity;
    }
  }, [opacity]);

  const geometry = useRef(new THREE.BufferGeometry()).current;

  return (
    <primitive object={
      new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity })
      )
    } ref={lineRef as unknown as React.Ref<THREE.Line>} />
  );
}

export { OrbitLine, type OrbitLineProps };
