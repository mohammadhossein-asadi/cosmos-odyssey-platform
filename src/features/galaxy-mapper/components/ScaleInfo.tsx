"use client";

import { MapScale } from "../types";
import { Card, CardContent } from "@/components/ui/Card";

interface ScaleInfoProps {
  scale: MapScale;
}

const scaleData: Record<MapScale, { name: string; size: string; description: string; galaxies: string; facts: string[] }> = {
  "local-group": {
    name: "Local Group",
    size: "10 million light-years",
    description: "Our cosmic neighborhood containing 50+ gravitationally bound galaxies.",
    galaxies: "50+",
    facts: [
      "The Milky Way and Andromeda are the two largest galaxies",
      "The group is dominated by two galaxy groups",
      "Will merge into one elliptical galaxy in 4.5 billion years",
    ],
  },
  "virgo-supercluster": {
    name: "Virgo Supercluster",
    size: "110 million light-years",
    description: "A supercluster containing the Local Group and thousands of other galaxies.",
    galaxies: "100,000+",
    facts: [
      "Contains at least 100 galaxy groups and clusters",
      "The Virgo Cluster is its dominant member",
      "Part of the larger Laniakea Supercluster",
    ],
  },
  "cosmic-web": {
    name: "Cosmic Web",
    size: "Billions of light-years",
    description: "The large-scale structure of the universe: filaments, walls, and voids.",
    galaxies: "Billions",
    facts: [
      "Galaxies form along filaments of dark matter",
      "Voids can be hundreds of millions of light-years across",
      "The cosmic web was seeded by quantum fluctuations",
    ],
  },
  "observable-universe": {
    name: "Observable Universe",
    size: "93 billion light-years",
    description: "The portion of the universe we can observe, limited by the speed of light.",
    galaxies: "2 trillion+",
    facts: [
      "Contains an estimated 2 trillion galaxies",
      "The cosmic microwave background is its oldest light",
      "The universe is expanding faster than light can travel",
    ],
  },
};

function ScaleInfo({ scale }: ScaleInfoProps) {
  const data = scaleData[scale];

  return (
    <div className="absolute top-4 right-4 w-64">
      <Card variant="glass">
        <CardContent className="p-3">
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-display)] mb-1">
            {data.name}
          </h3>
          <div className="text-[10px] text-plasma-300 mb-2">{data.size} • {data.galaxies} galaxies</div>
          <p className="text-[11px] text-text-secondary mb-2">{data.description}</p>
          <ul className="space-y-1">
            {data.facts.map((fact, i) => (
              <li key={i} className="text-[10px] text-text-muted flex items-start gap-1">
                <span className="text-plasma-400">★</span>
                {fact}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export { ScaleInfo };
