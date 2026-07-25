import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Constellation Map | Cosmos Odyssey",
  description: "Explore the patterns of stars that have guided humanity for millennia.",
};

export default function ConstellationMapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
