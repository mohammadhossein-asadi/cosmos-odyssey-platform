import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Hole Visualizer | Cosmos Odyssey",
  description: "Explore the most extreme objects in the universe where gravity warps space and time.",
};

export default function BlackHoleVisualizerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
