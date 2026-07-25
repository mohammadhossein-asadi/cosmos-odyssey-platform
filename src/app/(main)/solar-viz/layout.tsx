import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar System Visualization | Cosmos Odyssey",
  description: "Interactive 3D visualization of the solar system with orbital mechanics and planet data.",
};

export default function SolarVizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
