import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Chart | Cosmos Odyssey",
  description: "Interactive night sky map with constellations, stars, and deep sky objects.",
};

export default function StarChartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
