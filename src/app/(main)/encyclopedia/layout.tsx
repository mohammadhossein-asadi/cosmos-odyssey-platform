import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encyclopedia | Cosmos Odyssey",
  description: "Explore detailed information about planets and celestial objects.",
};

export default function EncyclopediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
