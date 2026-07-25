"use client";

import { useState } from "react";
import { SolarSystemScene } from "@/components/space/SolarSystemScene";
import { PlanetSelector } from "@/components/space/PlanetSelector";
import { PlanetDetailPanel } from "@/components/space/PlanetDetailPanel";
import { PageContainer } from "@/components/layout/PageContainer";

function SolarSystemPage() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-plasma-300 to-aurora-400 bg-clip-text text-transparent">
          Solar System Explorer
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Navigate through our solar system. Click on a planet to explore its details.
        </p>
      </div>

      <div className="relative">
        <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
          <SolarSystemScene
            selectedPlanet={selectedPlanet}
            onPlanetSelect={setSelectedPlanet}
          />
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <PlanetSelector
            selectedPlanet={selectedPlanet}
            onSelect={setSelectedPlanet}
          />
        </div>
      </div>

      {selectedPlanet && (
        <div className="mt-8 flex justify-center">
          <PlanetDetailPanel
            planetId={selectedPlanet}
            onClose={() => setSelectedPlanet(null)}
          />
        </div>
      )}
    </PageContainer>
  );
}

export { SolarSystemPage };
