"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const scales = [
  { id: "local-group", name: "Local Group", size: "10 Mly", galaxies: 54, description: "Our cosmic neighborhood containing 50+ galaxies.", icon: "🌍" },
  { id: "virgo-cluster", name: "Virgo Cluster", size: "54 Mly", galaxies: 1348, description: "The heart of the Virgo Supercluster.", icon: "🌌" },
  { id: "virgo-supercluster", name: "Virgo Supercluster", size: "110 Mly", galaxies: 100000, description: "Our home supercluster containing the Local Group.", icon: "🌀" },
  { id: "laniakea", name: "Laniakea", size: "520 Mly", galaxies: 1000000, description: "Our home supercluster, meaning 'immeasurable heaven'.", icon: "✨" },
  { id: "cosmic-web", name: "Cosmic Web", size: "Billions of ly", galaxies: "Billions", description: "The large-scale structure of the universe.", icon: "🕸️" },
  { id: "observable", name: "Observable Universe", size: "93 Gly", galaxies: "2 trillion+", description: "The portion of the universe we can observe.", icon: "🔭" },
];

const structures = [
  { name: "Sloan Great Wall", type: "Wall", size: "1.37 billion ly", distance: "1 billion ly", description: "One of the largest known structures." },
  { name: "Hercules-Corona Borealis Wall", type: "Wall", size: "10 billion ly", distance: "10 billion ly", description: "The largest known structure in the universe." },
  { name: "Boötes Void", type: "Void", size: "330 million ly", distance: "700 million ly", description: "One of the largest known voids." },
  { name: "Virgo Filament", type: "Filament", size: "50 million ly", distance: "50 million ly", description: "A filament connecting the Local Group to Virgo." },
];

function GalaxyMapperPage() {
  const [selectedScale, setSelectedScale] = useState("local-group");
  const [showStructures, setShowStructures] = useState(false);

  const currentScale = scales.find((s) => s.id === selectedScale);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-cosmic-200 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
          Galaxy Mapper
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Navigate the cosmic web from local groups to the observable universe
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {scales.map((scale) => (
          <Card
            key={scale.id}
            variant="glass"
            className={`cursor-pointer transition-all hover:border-plasma-500/30 ${
              selectedScale === scale.id ? "border-plasma-500/50" : ""
            }`}
            onClick={() => setSelectedScale(scale.id)}
          >
            <CardContent className="p-3 text-center">
              <div className="text-2xl mb-2">{scale.icon}</div>
              <h3 className="text-xs font-semibold text-text-primary font-[family-name:var(--font-display)] mb-1">
                {scale.name}
              </h3>
              <div className="text-[10px] text-text-muted">{scale.size}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {currentScale && (
        <Card variant="glass" className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{currentScale.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{currentScale.name}</h2>
                <p className="text-sm text-text-secondary">{currentScale.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-surface-glass rounded-lg p-3">
                <div className="text-xs text-text-muted">Size</div>
                <div className="text-sm font-semibold text-text-primary">{currentScale.size}</div>
              </div>
              <div className="bg-surface-glass rounded-lg p-3">
                <div className="text-xs text-text-muted">Galaxies</div>
                <div className="text-sm font-semibold text-text-primary">{typeof currentScale.galaxies === "number" ? currentScale.galaxies.toLocaleString() : currentScale.galaxies}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-display)]">Cosmic Structures</h2>
        <button
          onClick={() => setShowStructures(!showStructures)}
          className={cn(
            "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
            showStructures
              ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
              : "bg-surface-glass text-text-muted border border-transparent"
          )}
        >
          {showStructures ? "Hide" : "Show"} Structures
        </button>
      </div>

      {showStructures && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {structures.map((structure) => (
            <Card key={structure.name} variant="glass">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                    {structure.name}
                  </h3>
                  <Badge variant="cosmic" size="sm">{structure.type}</Badge>
                </div>
                <p className="text-xs text-text-secondary mb-3">{structure.description}</p>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-surface-glass rounded p-1.5">
                    <div className="text-text-muted">Size</div>
                    <div className="text-text-primary">{structure.size}</div>
                  </div>
                  <div className="bg-surface-glass rounded p-1.5">
                    <div className="text-text-muted">Distance</div>
                    <div className="text-text-primary">{structure.distance}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </PageContainer>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export { GalaxyMapperPage };
