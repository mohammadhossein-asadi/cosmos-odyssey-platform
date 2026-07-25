"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const encyclopediaEntries = [
  { id: "planets", title: "Planets", description: "Explore all 8 planets in our solar system with detailed information.", icon: "🪐", count: 8, href: "/solar-system", color: "from-plasma-500/20 to-cosmic-500/20" },
  { id: "dwarf-planets", title: "Dwarf Planets", description: "Learn about Pluto, Eris, Haumea, and other dwarf planets.", icon: "⚫", count: 5, href: "/solar-system", color: "from-cosmic-500/20 to-plasma-500/20" },
  { id: "moons", title: "Moons", description: "Discover the natural satellites orbiting planets.", icon: "🌙", count: 290, href: "/solar-system", color: "from-star-500/20 to-cosmic-500/20" },
  { id: "stars", title: "Stars", description: "Explore stars from our Sun to distant supergiants.", icon: "⭐", count: 50, href: "/star-catalog", color: "from-star-500/20 to-aurora-500/20" },
  { id: "constellations", title: "Constellations", description: "Learn the patterns of stars and their mythology.", icon: "✨", count: 88, href: "/constellation-map", color: "from-plasma-500/20 to-star-500/20" },
  { id: "galaxies", title: "Galaxies", description: "From the Milky Way to distant cosmic structures.", icon: "🌌", count: 25, href: "/galaxy-explorer", color: "from-aurora-500/20 to-nebula-500/20" },
  { id: "nebulae", title: "Nebulae", description: "Stellar nurseries and cosmic clouds of gas and dust.", icon: "☁️", count: 15, href: "/nebula-explorer", color: "from-nebula-500/20 to-plasma-500/20" },
  { id: "black-holes", title: "Black Holes", description: "The most extreme objects in the universe.", icon: "🕳️", count: 10, href: "/black-hole-visualizer", color: "from-plasma-500/20 to-nebula-500/20" },
  { id: "exoplanets", title: "Exoplanets", description: "Worlds beyond our solar system.", icon: "🌍", count: 12, href: "/exoplanet-explorer", color: "from-aurora-500/20 to-star-500/20" },
  { id: "missions", title: "Space Missions", description: "The history of human space exploration.", icon: "🚀", count: 8, href: "/missions", color: "from-star-500/20 to-plasma-500/20" },
  { id: "asteroids", title: "Asteroids", description: "Rocky bodies orbiting the Sun.", icon: "☄️", count: 4, href: "/solar-system", color: "from-cosmic-500/20 to-star-500/20" },
  { id: "comets", title: "Comets", description: "Icy bodies with spectacular tails.", icon: "💫", count: 3, href: "/solar-system", color: "from-star-500/20 to-aurora-500/20" },
];

function EncyclopediaPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Solar System", "Stars", "Deep Sky", "Exploration"];

  const filtered = useMemo(() => {
    return encyclopediaEntries.filter((entry) => {
      const matchesSearch = entry.title.toLowerCase().includes(search.toLowerCase()) ||
        entry.description.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [search]);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-cosmic-200 to-plasma-300 bg-clip-text text-transparent">
          Encyclopedia
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Your comprehensive guide to the cosmos
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search encyclopedia..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface-secondary border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-plasma-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((entry) => (
          <Link key={entry.id} href={entry.href}>
            <Card variant="glass" className="h-full hover:border-plasma-500/30 transition-all cursor-pointer group">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${entry.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="text-lg">{entry.icon}</span>
                  </div>
                  <Badge variant="cosmic" size="sm">{entry.count} entries</Badge>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-plasma-300 transition-colors font-[family-name:var(--font-display)]">
                  {entry.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">{entry.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}

export { EncyclopediaPage };
