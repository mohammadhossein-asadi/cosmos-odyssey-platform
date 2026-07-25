"use client";

import { ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

interface SceneContainerProps {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov: number };
  enableShadows?: boolean;
}

function SceneContainer({
  children,
  className,
  camera = { position: [0, 0, 10], fov: 50 },
  enableShadows = false,
}: SceneContainerProps) {
  return (
    <div className={className}>
      <Canvas
        camera={camera}
        shadows={enableShadows}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SceneContents enableShadows={enableShadows}>{children}</SceneContents>
        </Suspense>
      </Canvas>
    </div>
  );
}

function SceneContents({
  children,
  enableShadows,
}: {
  children: ReactNode;
  enableShadows: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow={enableShadows}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      <Environment preset="night" />
      {children}
    </>
  );
}

export { SceneContainer, type SceneContainerProps };
