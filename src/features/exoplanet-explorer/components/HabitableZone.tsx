"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface HabitableZoneProps {
  innerRadius: number;
  outerRadius: number;
  color?: string;
  opacity?: number;
}

function HabitableZone({ innerRadius, outerRadius, color = "#00d4aa", opacity = 0.1 }: HabitableZoneProps) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerPoints: THREE.Vector2[] = [];
    const innerPoints: THREE.Vector2[] = [];
    const segments = 64;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      outerPoints.push(new THREE.Vector2(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius));
      innerPoints.push(new THREE.Vector2(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius));
    }

    shape.setFromPoints(outerPoints);
    const hole = new THREE.Path(innerPoints);
    shape.holes.push(hole);

    return new THREE.ShapeGeometry(shape, segments);
  }, [innerRadius, outerRadius]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
      <primitive object={geometry} attach="geometry" />
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

export { HabitableZone };
