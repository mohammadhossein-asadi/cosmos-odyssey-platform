import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar System Explorer | Cosmos Odyssey",
  description: "Explore all 8 planets in our solar system with interactive 3D visualization.",
};

export default function SolarSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
