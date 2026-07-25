import type { Metadata } from "next";
export const metadata: Metadata = { title: "Space Missions | Cosmos Odyssey", description: "Explore the history of space exploration missions." };
export default function MissionsLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
