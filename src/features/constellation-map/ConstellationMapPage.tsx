"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ConstellationScene } from "./components/ConstellationScene";
import { ConstellationCatalog } from "./components/ConstellationCatalog";
import { ConstellationDetailPanel } from "./components/ConstellationDetailPanel";
import { ConstellationFilter } from "./components/ConstellationFilter";
import { SeasonGuide } from "./components/SeasonGuide";
import { constellations } from "./data/constellations";
import { Season, Hemisphere } from "./types";

function ConstellationMapPage() {
  const [viewMode, setViewMode] = useState<"3d" | "catalog">("catalog");
  const [selectedConstellation, setSelectedConstellation] = useState<string | null>(null);
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);
  const [season, setSeason] = useState<Season | "all">("all");
  const [hemisphere, setHemisphere] = useState<Hemisphere | "all">("all");
  const [search, setSearch] = useState("");
  const [showLines, setShowLines] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  const filteredConstellations = useMemo(() => {
    return constellations.filter((c) => {
      const matchesSeason = season === "all" || c.season === season;
      const matchesHemisphere = hemisphere === "all" || c.hemisphere === hemisphere;
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase());
      return matchesSeason && matchesHemisphere && matchesSearch;
    });
  }, [season, hemisphere, search]);

  const selectedConstellationData = constellations.find((c) => c.id === selectedConstellation);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-plasma-300 to-star-400 bg-clip-text text-transparent">
            Constellation Map
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Explore the patterns of stars that have guided humanity for millennia
          </p>
        </div>
        <div className="flex gap-1.5">
          {(["3d", "catalog"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                viewMode === mode
                  ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                  : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
              }`}
            >
              {mode === "3d" ? "3D Star Map" : "Catalog"}
            </button>
          ))}
        </div>
      </div>

      <SeasonGuide />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <ConstellationFilter
            season={season}
            onSeasonChange={setSeason}
            hemisphere={hemisphere}
            onHemisphereChange={setHemisphere}
            search={search}
            onSearchChange={setSearch}
            showLines={showLines}
            onShowLinesChange={setShowLines}
            showLabels={showLabels}
            onShowLabelsChange={setShowLabels}
            showGrid={showGrid}
            onShowGridChange={setShowGrid}
          />

          {viewMode === "catalog" && (
            <ConstellationCatalog
              constellations={filteredConstellations}
              onSelect={setSelectedConstellation}
              selectedConstellation={selectedConstellation}
            />
          )}
        </div>

        <div className="lg:col-span-3">
          <div className="relative">
            <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
              <ConstellationScene
                selectedConstellation={selectedConstellation}
                onConstellationSelect={setSelectedConstellation}
                showLines={showLines}
                showLabels={showLabels}
                showGrid={showGrid}
                highlightedStar={hoveredStar}
              />
            </div>

            {selectedConstellationData && (
              <div className="absolute top-4 right-4">
                <ConstellationDetailPanel
                  constellation={selectedConstellationData}
                  onClose={() => setSelectedConstellation(null)}
                  onStarHover={setHoveredStar}
                />
              </div>
            )}

            <div className="absolute bottom-4 left-4">
              <button
                onClick={() => setSelectedConstellation(null)}
                className="px-3 py-1.5 rounded-lg bg-surface-glass/80 backdrop-blur-md border border-border-default text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                {selectedConstellation ? "View All" : `${filteredConstellations.length} constellations visible`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export { ConstellationMapPage };
