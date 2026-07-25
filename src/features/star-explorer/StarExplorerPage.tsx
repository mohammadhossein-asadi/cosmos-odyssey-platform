"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { StarMap } from "./components/StarMap";
import { StarDetail } from "./components/StarDetail";
import { StarFilters } from "./components/StarFilters";
import { stars } from "@/data/stars";

function StarExplorerPage() {
  const [selectedStar, setSelectedStar] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredStars = filter === "all"
    ? stars
    : stars.filter((s) => {
        if (filter === "brightest") return s.luminosity > 10;
        if (filter === "nearest") return s.distance < 50;
        return true;
      });

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-star-400 to-plasma-300 bg-clip-text text-transparent">
          Star Explorer
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Discover the stars that light up our night sky. Click on a star to learn more.
        </p>
      </div>

      <StarFilters filter={filter} onFilterChange={setFilter} />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StarMap stars={filteredStars} onSelect={setSelectedStar} selectedStar={selectedStar} />
        </div>
        <div>
          {selectedStar ? (
            <StarDetail starId={selectedStar} />
          ) : (
            <div className="bg-surface-primary rounded-xl border border-border-default p-8 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <p className="text-text-secondary">Select a star to view its details</p>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}

export { StarExplorerPage };
