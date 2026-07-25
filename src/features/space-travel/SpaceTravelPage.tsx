"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { DestinationGrid } from "./components/DestinationGrid";
import { TravelStats } from "./components/TravelStats";
import { TravelSequence } from "./components/TravelSequence";
import { Destination } from "./types";

const destinations: Destination[] = [
  { id: "moon", name: "The Moon", description: "Earth's closest companion, 384,400 km away.", distance: 384400, travelTime: "3 days", color: "#c0c0c0", icon: "🌙" },
  { id: "mars", name: "Mars", description: "The Red Planet, our next frontier.", distance: 225000000, travelTime: "7 months", color: "#c1440e", icon: "🔴" },
  { id: "jupiter", name: "Jupiter", description: "The gas giant king with its Great Red Spot.", distance: 628730000, travelTime: "2.7 years", color: "#c88b3a", icon: "🟠" },
  { id: "saturn", name: "Saturn", description: "Famous for its stunning ring system.", distance: 1200000000, travelTime: "7 years", color: "#e4c46e", icon: "🪐" },
  { id: "neptune", name: "Neptune", description: "The windiest planet in the solar system.", distance: 4300000000, travelTime: "12 years", color: "#4b70dd", icon: "🔵" },
  { id: "pluto", name: "Pluto", description: "The dwarf planet at the edge of the solar system.", distance: 5900000000, travelTime: "15 years", color: "#c4a882", icon: "⚫" },
];

function SpaceTravelPage() {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [isTraveling, setIsTraveling] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedDestination(id);
    setIsTraveling(true);
  };

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-aurora-400 to-plasma-300 bg-clip-text text-transparent">
          Space Travel
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Choose your destination and begin your journey through the cosmos.
        </p>
      </div>

      <TravelStats />

      {isTraveling && selectedDestination ? (
        <TravelSequence
          destination={destinations.find((d) => d.id === selectedDestination)!}
          onComplete={() => setIsTraveling(false)}
        />
      ) : (
        <DestinationGrid destinations={destinations} onSelect={handleSelect} />
      )}
    </PageContainer>
  );
}

export { SpaceTravelPage };
