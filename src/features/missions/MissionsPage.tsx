"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const missions = [
  {
    name: "Apollo 11",
    agency: "NASA",
    year: 1969,
    destination: "Moon",
    status: "completed",
    description: "First crewed mission to land on the Moon. Neil Armstrong and Buzz Aldrin walked on the lunar surface.",
    achievements: ["First humans on the Moon", "21.5 kg of lunar samples", "First lunar EVA"],
    duration: "8 days",
  },
  {
    name: "Voyager 1",
    agency: "NASA",
    year: 1977,
    destination: "Interstellar Space",
    status: "active",
    description: "The most distant human-made object, now in interstellar space.",
    achievements: ["First to enter interstellar space", "Detailed images of Jupiter and Saturn", "Golden Record"],
    duration: "47+ years",
  },
  {
    name: "Hubble Space Telescope",
    agency: "NASA/ESA",
    year: 1990,
    destination: "Low Earth Orbit",
    status: "active",
    description: "One of the most important telescopes in history, revolutionizing astronomy.",
    achievements: ["Over 1.5 million observations", "Confirmed accelerating expansion", "Deep Field images"],
    duration: "34+ years",
  },
  {
    name: "James Webb Space Telescope",
    agency: "NASA/ESA/CSA",
    year: 2021,
    destination: "L2 Lagrange Point",
    status: "active",
    description: "The most powerful space telescope ever built, studying the earliest galaxies.",
    achievements: ["Deepest infrared images", "First detection of CO2 in exoplanet atmosphere", "Stellar nursery images"],
    duration: "3+ years",
  },
  {
    name: "Mars 2020 (Perseverance)",
    agency: "NASA",
    year: 2020,
    destination: "Mars",
    status: "active",
    description: "Searching for signs of ancient microbial life on Mars.",
    achievements: ["First helicopter flight on another planet", "Sample caching", "Oxygen production from CO2"],
    duration: "4+ years",
  },
  {
    name: "Cassini-Huygens",
    agency: "NASA/ESA/ASI",
    year: 1997,
    destination: "Saturn",
    status: "completed",
    description: "Studied Saturn and its moons for 13 years.",
    achievements: ["Liquid methane lakes on Titan", "Water geysers on Enceladus", "Ring structure mapping"],
    duration: "20 years",
  },
  {
    name: "Artemis I",
    agency: "NASA",
    year: 2022,
    destination: "Moon",
    status: "completed",
    description: "First flight of the Space Launch System for crewed lunar missions.",
    achievements: ["Successful uncrewed lunar orbit", "Farthest human-rated spacecraft", "Validated Artemis II systems"],
    duration: "25 days",
  },
  {
    name: "Europa Clipper",
    agency: "NASA",
    year: 2024,
    destination: "Jupiter (Europa)",
    status: "planned",
    description: "Studying Jupiter's moon Europa for signs of habitability.",
    achievements: ["Launch scheduled", "Will study Europa's ocean", "Search for habitable conditions"],
    duration: "Planned: 6 years",
  },
];

function MissionsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? missions
    : missions.filter((m) => m.status === filter);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-aurora-400 to-plasma-300 bg-clip-text text-transparent">
          Space Missions
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Explore the history of human space exploration
        </p>
      </div>

      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {["all", "active", "completed", "planned"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs font-medium transition-all capitalize",
              filter === f
                ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((mission) => (
          <Card key={mission.name} variant="glass">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-display)]">
                    {mission.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-text-muted mt-0.5">
                    <span>{mission.agency}</span>
                    <span>•</span>
                    <span>{mission.year}</span>
                    <span>•</span>
                    <span>{mission.destination}</span>
                  </div>
                </div>
                <Badge
                  variant={mission.status === "active" ? "success" : mission.status === "completed" ? "primary" : "default"}
                  size="sm"
                >
                  {mission.status}
                </Badge>
              </div>

              <p className="text-xs text-text-secondary mb-3">{mission.description}</p>

              <div className="flex items-center gap-2 mb-3 text-[10px] text-text-muted">
                <span>⏱️ {mission.duration}</span>
              </div>

              <div>
                <h4 className="text-[10px] text-text-muted uppercase tracking-wider mb-1.5">Key Achievements</h4>
                <ul className="space-y-1">
                  {mission.achievements.map((ach, i) => (
                    <li key={i} className="text-[11px] text-text-secondary flex items-start gap-1.5">
                      <span className="text-aurora-400 shrink-0">✓</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export { MissionsPage };
