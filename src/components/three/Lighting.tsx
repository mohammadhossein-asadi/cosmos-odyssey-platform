"use client";

interface LightingProps {
  intensity?: number;
  color?: string;
  position?: [number, number, number];
}

function SunLight({ intensity = 2, position = [0, 0, 0] }: LightingProps) {
  return (
    <>
      <pointLight position={position} intensity={intensity} color="#ffd93d" distance={1000} />
      <pointLight position={position} intensity={intensity * 0.5} color="#fff4e0" distance={500} />
    </>
  );
}

function AmbientLight({ intensity = 0.1 }: { intensity?: number }) {
  return <ambientLight intensity={intensity} color="#4a2c8a" />;
}

export { SunLight, AmbientLight };
