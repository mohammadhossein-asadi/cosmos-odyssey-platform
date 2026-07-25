"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface PlanetRingProps {
  innerRadius: number;
  outerRadius: number;
  color?: string;
  opacity?: number;
  segments?: number;
}

function PlanetRing({
  innerRadius,
  outerRadius,
  color = "#e4c46e",
  opacity = 0.4,
  segments = 128,
}: PlanetRingProps) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerPoints: THREE.Vector2[] = [];
    const innerPoints: THREE.Vector2[] = [];

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      outerPoints.push(new THREE.Vector2(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius));
      innerPoints.push(new THREE.Vector2(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius));
    }

    shape.setFromPoints(outerPoints);
    const hole = new THREE.Path(innerPoints);
    shape.holes.push(hole);

    return new THREE.ShapeGeometry(shape, segments);
  }, [innerRadius, outerRadius, segments]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} geometry={geometry}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export { PlanetRing };
