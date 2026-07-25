import type { Metadata } from "next";
export const metadata: Metadata = { title: "Space Profile | Cosmos Odyssey", description: "Your space exploration profile and achievements." };
export default function ProfileLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
