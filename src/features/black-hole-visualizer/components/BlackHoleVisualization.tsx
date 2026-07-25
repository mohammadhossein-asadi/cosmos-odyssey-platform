"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BlackHoleConfig } from "../types";

interface BlackHoleVisualizationProps {
  config: BlackHoleConfig;
  accretionColor: string;
}

function BlackHoleVisualization({ config, accretionColor }: BlackHoleVisualizationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const diskRef = useRef<THREE.Mesh>(null);
  const jetRef1 = useRef<THREE.Mesh>(null);
  const jetRef2 = useRef<THREE.Mesh>(null);

  const eventHorizonSize = Math.min(1.5, 0.5 + Math.log10(config.mass) * 0.1);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (diskRef.current) {
      diskRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (jetRef1.current && config.showRelativisticJets) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      jetRef1.current.scale.set(pulse, 1, pulse);
      jetRef2.current?.scale.set(pulse, 1, pulse);
    }
  });

  const diskGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerRadius = eventHorizonSize * 4;
    const innerRadius = eventHorizonSize * 1.5;
    const segments = 64;

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
  }, [eventHorizonSize]);

  return (
    <group ref={groupRef}>
      {/* Event Horizon */}
      <mesh>
        <sphereGeometry args={[eventHorizonSize, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Photon Sphere */}
      {config.showPhotonSphere && (
        <mesh>
          <sphereGeometry args={[eventHorizonSize * 1.5, 32, 32]} />
          <meshBasicMaterial
            color={accretionColor}
            transparent
            opacity={0.1}
            side={THREE.BackSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* Accretion Disk */}
      {config.showAccretionDisk && (
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh ref={diskRef} geometry={diskGeometry}>
            <meshBasicMaterial
              color={accretionColor}
              transparent
              opacity={0.6}
              side={THREE.DoubleSide}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
          <mesh geometry={diskGeometry}>
            <meshBasicMaterial
              color={accretionColor}
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      )}

      {/* Ergosphere */}
      {config.showErgosphere && config.spin > 0 && (
        <mesh>
          <sphereGeometry args={[eventHorizonSize * (1 + config.spin * 0.3), 32, 32]} />
          <meshBasicMaterial
            color="#6c5ce7"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* Relativistic Jets */}
      {config.showRelativisticJets && (
        <>
          <mesh ref={jetRef1} position={[0, eventHorizonSize * 3, 0]}>
            <coneGeometry args={[eventHorizonSize * 0.3, eventHorizonSize * 6, 16]} />
            <meshBasicMaterial
              color="#4a90d9"
              transparent
              opacity={0.3}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
          <mesh ref={jetRef2} position={[0, -eventHorizonSize * 3, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[eventHorizonSize * 0.3, eventHorizonSize * 6, 16]} />
            <meshBasicMaterial
              color="#4a90d9"
              transparent
              opacity={0.3}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </>
      )}

      {/* Glow */}
      <mesh>
        <sphereGeometry args={[eventHorizonSize * 2, 32, 32]} />
        <meshBasicMaterial
          color={accretionColor}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <pointLight color={accretionColor} intensity={2} distance={20} />
    </group>
  );
}

export { BlackHoleVisualization };
