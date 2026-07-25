import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Travel | Cosmos Odyssey",
  description: "Travel between celestial bodies in our solar system.",
};

export default function SpaceTravelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
