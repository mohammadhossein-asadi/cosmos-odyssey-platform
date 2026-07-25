"use client";

import { useState, useCallback, useEffect } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { DestinationGrid } from "./components/DestinationGrid";
import { TravelStats } from "./components/TravelStats";
import { TravelSequence } from "./components/TravelSequence";
import { ArrivalPanel } from "./components/ArrivalPanel";
import { TravelHistory } from "./components/TravelHistory";
import { useTravelState } from "./hooks/useTravelState";
import { destinations } from "./data/destinations";
import { Destination } from "./types";

function SpaceTravelPage() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [showArrival, setShowArrival] = useState(false);
  const { phase, progress, speed, distanceCovered, startTravel, cancelTravel, travelHistory } = useTravelState();

  const uniqueVisited = new Set(travelHistory.map((r) => r.destination)).size;

  const handleSelect = useCallback((id: string) => {
    const dest = destinations.find((d) => d.id === id);
    if (dest) {
      setSelectedDestination(dest);
      startTravel(dest);
    }
  }, [startTravel]);

  const handleComplete = useCallback(() => {
    setShowArrival(true);
  }, []);

  const handleReturn = useCallback(() => {
    setSelectedDestination(null);
    setShowArrival(false);
    cancelTravel();
  }, [cancelTravel]);

  useEffect(() => {
    if (phase === "arrived" && !showArrival) {
      const timer = setTimeout(() => setShowArrival(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [phase, showArrival]);

  const isTraveling = phase !== "idle";

  return (
    <PageContainer>
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-3 bg-gradient-to-r from-aurora-400 via-plasma-300 to-star-400 bg-clip-text text-transparent">
          Space Travel
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto text-sm">
          Choose your destination and begin your journey through the cosmos.
        </p>
      </div>

      <TravelStats
        totalJourneys={travelHistory.length}
        destinationsVisited={uniqueVisited}
      />

      {isTraveling && selectedDestination ? (
        showArrival && phase === "arrived" ? (
          <div className="flex flex-col items-center gap-6">
            <TravelSequence
              destination={selectedDestination}
              progress={progress}
              phase={phase}
              speed={speed}
              distanceCovered={distanceCovered}
              onCancel={handleReturn}
            />
            <ArrivalPanel
              destination={selectedDestination}
              record={travelHistory[0]}
              onClose={handleReturn}
            />
          </div>
        ) : (
          <TravelSequence
            destination={selectedDestination}
            progress={progress}
            phase={phase}
            speed={speed}
            distanceCovered={distanceCovered}
            onCancel={handleReturn}
          />
        )
      ) : (
        <div className="space-y-8">
          <DestinationGrid destinations={destinations} onSelect={handleSelect} />
          {travelHistory.length > 0 && (
            <TravelHistory records={travelHistory} />
          )}
        </div>
      )}
    </PageContainer>
  );
}

export { SpaceTravelPage };
