import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galaxy Mapper | Cosmos Odyssey",
  description: "Navigate the cosmic web from local groups to the observable universe.",
};

export default function GalaxyMapperLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
