"use client";

import { useState, useMemo } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { PlanetCatalog } from "./components/PlanetCatalog";
import { Input } from "@/components/ui/Input";
import { planets } from "@/data/planets";
import { categories } from "./components/CategoryTabs";

function EncyclopediaPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredPlanets = useMemo(() => {
    return planets.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || p.type === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-cosmic-200 to-plasma-300 bg-clip-text text-transparent">
          Encyclopedia
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Explore detailed information about every celestial object in our solar system.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <Input
          placeholder="Search planets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
              category === cat.id
                ? "bg-plasma-500/20 border-plasma-500/30 text-plasma-300"
                : "bg-surface-glass border-border-default text-text-secondary hover:text-text-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <PlanetCatalog planets={filteredPlanets} />
    </PageContainer>
  );
}

export { EncyclopediaPage };
