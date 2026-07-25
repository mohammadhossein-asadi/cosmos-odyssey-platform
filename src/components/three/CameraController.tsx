"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface CameraControllerProps {
  enableZoom?: boolean;
  enablePan?: boolean;
  enableRotate?: boolean;
  minDistance?: number;
  maxDistance?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

function CameraController({
  enableZoom = true,
  enablePan = true,
  enableRotate = true,
  minDistance = 2,
  maxDistance = 100,
  autoRotate = false,
  autoRotateSpeed = 0.5,
}: CameraControllerProps) {
  return (
    <OrbitControls
      enableZoom={enableZoom}
      enablePan={enablePan}
      enableRotate={enableRotate}
      minDistance={minDistance}
      maxDistance={maxDistance}
      autoRotate={autoRotate}
      autoRotateSpeed={autoRotateSpeed}
      enableDamping
      dampingFactor={0.05}
    />
  );
}

export { CameraController, type CameraControllerProps };
