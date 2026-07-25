"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { NebulaScene } from "./components/NebulaScene";
import { NebulaCatalog } from "./components/NebulaCatalog";
import { NebulaDetailPanel } from "./components/NebulaDetailPanel";
import { NebulaFilter } from "./components/NebulaFilter";
import { NebulaTypeGuide } from "./components/NebulaTypeGuide";
import { nebulae } from "./data/nebulae";
import { NebulaType, NebulaCategory } from "./types";

function NebulaExplorerPage() {
  const [viewMode, setViewMode] = useState<"3d" | "catalog">("catalog");
  const [selectedNebula, setSelectedNebula] = useState<string | null>(null);
  const [type, setType] = useState<NebulaType | "all">("all");
  const [category, setCategory] = useState<NebulaCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filteredNebulae = useMemo(() => {
    return nebulae.filter((n) => {
      const matchesType = type === "all" || n.type === type;
      const matchesCategory = category === "all" || n.category === category;
      const matchesSearch = n.name.toLowerCase().includes(search.toLowerCase()) ||
        n.description.toLowerCase().includes(search.toLowerCase());
      return matchesType && matchesCategory && matchesSearch;
    });
  }, [type, category, search]);

  const selectedNebulaData = nebulae.find((n) => n.id === selectedNebula);

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-nebula-500 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
            Nebula Explorer
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Discover the stellar nurseries and cosmic clouds of the universe
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
              {mode === "3d" ? "3D View" : "Catalog"}
            </button>
          ))}
        </div>
      </div>

      <NebulaTypeGuide />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <NebulaFilter
            type={type}
            onTypeChange={setType}
            category={category}
            onCategoryChange={setCategory}
            search={search}
            onSearchChange={setSearch}
          />

          {viewMode === "catalog" && (
            <NebulaCatalog
              nebulae={filteredNebulae}
              onSelect={setSelectedNebula}
              selectedNebula={selectedNebula}
            />
          )}
        </div>

        <div className="lg:col-span-3">
          <div className="relative">
            <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border-default bg-cosmic-900">
              <NebulaScene
                selectedNebula={selectedNebula}
                onNebulaSelect={setSelectedNebula}
              />
            </div>

            {selectedNebulaData && (
              <div className="absolute top-4 right-4 max-h-[calc(100%-2rem)] overflow-y-auto">
                <NebulaDetailPanel
                  nebula={selectedNebulaData}
                  onClose={() => setSelectedNebula(null)}
                />
              </div>
            )}

            <div className="absolute bottom-4 left-4">
              <button
                onClick={() => setSelectedNebula(null)}
                className="px-3 py-1.5 rounded-lg bg-surface-glass/80 backdrop-blur-md border border-border-default text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                {selectedNebula ? "View All Nebulae" : `${filteredNebulae.length} nebulae found`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export { NebulaExplorerPage };
