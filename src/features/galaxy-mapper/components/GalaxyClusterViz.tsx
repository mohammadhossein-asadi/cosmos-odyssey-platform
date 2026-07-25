"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { GalaxyCluster } from "../types";

interface GalaxyClusterVizProps {
  cluster: GalaxyCluster;
  showLabels: boolean;
  onSelect: (id: string) => void;
}

function GalaxyClusterViz({ cluster, showLabels, onSelect }: GalaxyClusterVizProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={cluster.center}>
      <mesh onClick={(e) => { e.stopPropagation(); onSelect(cluster.id); }}>
        <sphereGeometry args={[cluster.radius * 0.1, 32, 32]} />
        <meshBasicMaterial
          color={cluster.color}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[cluster.radius * 0.15, 32, 32]} />
        <meshBasicMaterial
          color={cluster.color}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {showLabels && (
        <Html position={[0, cluster.radius * 0.18, 0]} center distanceFactor={200} style={{ pointerEvents: "none" }}>
          <div className="whitespace-nowrap text-center">
            <div className="px-2 py-0.5 rounded bg-surface-glass/80 backdrop-blur-sm border border-border-default text-[10px] text-text-primary font-medium">
              {cluster.name}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

export { GalaxyClusterViz };
