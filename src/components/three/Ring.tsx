"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface RingProps {
  innerRadius: number;
  outerRadius: number;
  color?: string;
  opacity?: number;
}

function Ring({ innerRadius, outerRadius, color = "#e4c46e", opacity = 0.5 }: RingProps) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);
    const hole = new THREE.Path();
    hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    const extrudeSettings = { depth: 0.02, bevelEnabled: false };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [innerRadius, outerRadius]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <primitive object={geometry} attach="geometry" />
      <meshBasicMaterial color={color} transparent opacity={opacity} side={THREE.DoubleSide} />
    </mesh>
  );
}

export { Ring };
