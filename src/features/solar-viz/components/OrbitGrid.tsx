"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

interface OrbitGridProps {
  radius: number;
  divisions?: number;
}

function OrbitGrid({ radius, divisions = 10 }: OrbitGridProps) {
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

    for (let i = 1; i <= divisions; i++) {
      const r = (i / divisions) * radius;
      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 64; j++) {
        const angle = (j / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: "#7c5cbf", transparent: true, opacity: 0.1 });
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
  }, [radius, divisions]);

  return <group ref={groupRef} />;
}

export { OrbitGrid };
