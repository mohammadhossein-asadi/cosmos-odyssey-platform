"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

interface GridSphereProps {
  radius: number;
  divisions?: number;
}

function GridSphere({ radius, divisions = 12 }: GridSphereProps) {
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

    for (let i = 0; i < divisions; i++) {
      const lat = ((i / divisions) - 0.5) * Math.PI;
      const r = Math.cos(lat) * radius;
      const y = Math.sin(lat) * radius;

      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 64; j++) {
        const lon = (j / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(lon) * r, y, Math.sin(lon) * r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: "#7c5cbf", transparent: true, opacity: 0.08 });
      groupRef.current.add(new THREE.Line(geo, mat));
    }

    for (let i = 0; i < divisions; i++) {
      const lon = (i / divisions) * Math.PI * 2;
      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 64; j++) {
        const lat = ((j / 64) - 0.5) * Math.PI;
        points.push(new THREE.Vector3(
          Math.cos(lon) * Math.cos(lat) * radius,
          Math.sin(lat) * radius,
          Math.sin(lon) * Math.cos(lat) * radius
        ));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: "#7c5cbf", transparent: true, opacity: 0.08 });
      groupRef.current.add(new THREE.Line(geo, mat));
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
  }, [radius, divisions]);

  return <group ref={groupRef} />;
}

export { GridSphere };
