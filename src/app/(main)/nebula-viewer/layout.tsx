import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebula Viewer | Cosmos Odyssey",
  description: "Immersive 3D nebula visualization with real-time rendering controls.",
};

export default function NebulaViewerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
