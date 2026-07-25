import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Catalog | Cosmos Odyssey",
  description: "Explore the stars of our galaxy and beyond with interactive visualizations.",
};

export default function StarCatalogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
