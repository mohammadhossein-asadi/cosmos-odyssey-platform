import type { Metadata } from "next";
import { EnhancedHeader } from "@/components/layout/EnhancedHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmos Odyssey | Interactive Space Exploration",
  description:
    "An immersive interactive space exploration and astronomy experience platform. Explore planets, travel through the solar system, discover stars, and understand the cosmos.",
  keywords: [
    "space exploration",
    "astronomy",
    "solar system",
    "planets",
    "interactive",
    "3D",
    "universe",
    "cosmos",
  ],
  openGraph: {
    title: "Cosmos Odyssey | Interactive Space Exploration",
    description:
      "Explore the universe through immersive 3D visualizations and interactive experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-cosmic-900 text-white min-h-screen">
        <EnhancedHeader />
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
}
