"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WarpTunnelProps {
  active: boolean;
  color?: string;
}

function WarpTunnel({ active, color = "#6c5ce7" }: WarpTunnelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);

  const ringCount = 20;

  useFrame((state) => {
    if (!groupRef.current || !active) return;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.5;

    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        const scale = 1 + ((state.clock.elapsedTime * 2 + i * 0.5) % 3) * 2;
        ring.scale.setScalar(scale);
        (ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.3 - scale * 0.05);
      }
    });
  });

  const rings = useMemo(() => {
    return Array.from({ length: ringCount }, (_, i) => ({
      radius: 0.5 + i * 0.3,
      key: i,
    }));
  }, []);

  if (!active) return null;

  return (
    <group ref={groupRef}>
      {rings.map(({ radius, key }) => (
        <mesh
          key={key}
          ref={(el) => { if (el) ringsRef.current[key] = el; }}
        >
          <ringGeometry args={[radius, radius + 0.02, 64]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

export { WarpTunnel };
