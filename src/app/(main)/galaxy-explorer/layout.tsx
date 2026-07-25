import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galaxy Explorer | Cosmos Odyssey",
  description: "Explore galaxies, nebulae, and deep sky objects across the universe.",
};

export default function GalaxyExplorerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
