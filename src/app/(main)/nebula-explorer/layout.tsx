import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebula Explorer | Cosmos Odyssey",
  description: "Discover the stellar nurseries and cosmic clouds of the universe.",
};

export default function NebulaExplorerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
