import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exoplanet Explorer | Cosmos Odyssey",
  description: "Discover worlds beyond our solar system - explore exoplanets, habitable zones, and alien worlds.",
};

export default function ExoplanetExplorerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
