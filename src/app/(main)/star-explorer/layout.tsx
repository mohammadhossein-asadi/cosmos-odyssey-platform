import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Explorer | Cosmos Odyssey",
  description: "Discover stars and constellations in our interactive star map.",
};

export default function StarExplorerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
