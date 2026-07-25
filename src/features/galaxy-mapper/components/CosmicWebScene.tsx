"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CosmicStructure } from "../types";

interface CosmicWebSceneProps {
  structures: CosmicStructure[];
  showFilaments: boolean;
}

function CosmicWebScene({ structures, showFilaments }: CosmicWebSceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current || !showFilaments) return;

    while (groupRef.current.children.length > 0) {
      const child = groupRef.current.children[0];
      groupRef.current.remove(child);
      if (child instanceof THREE.Line) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    }

    for (let i = 0; i < 40; i++) {
      const points: THREE.Vector3[] = [];
      let x = (Math.random() - 0.5) * 80;
      let y = (Math.random() - 0.5) * 40;
      let z = (Math.random() - 0.5) * 40;
      for (let j = 0; j < 15; j++) {
        points.push(new THREE.Vector3(x, y, z));
        x += (Math.random() - 0.5) * 8;
        y += (Math.random() - 0.5) * 4;
        z += (Math.random() - 0.5) * 4;
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: "#7c5cbf", transparent: true, opacity: 0.15 });
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
  }, [showFilaments]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {structures.filter((s) => s.type === "void").map((void_struct) => (
        <mesh key={void_struct.id} position={[(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30]}>
          <sphereGeometry args={[5 + Math.random() * 10, 16, 16]} />
          <meshBasicMaterial color={void_struct.color} transparent opacity={0.05} side={THREE.BackSide} />
        </mesh>
      ))}
    </group>
  );
}

export { CosmicWebScene };
