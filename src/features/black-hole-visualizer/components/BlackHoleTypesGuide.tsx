"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { BlackHoleType } from "../types";

const blackHoleTypes: { type: BlackHoleType; name: string; massRange: string; description: string; color: string; example: string }[] = [
  {
    type: "stellar",
    name: "Stellar Black Holes",
    massRange: "5-100 M☉",
    description: "Formed from the collapse of massive stars. The most common type.",
    color: "#4a90d9",
    example: "Cygnus X-1",
  },
  {
    type: "intermediate",
    name: "Intermediate Black Holes",
    massRange: "100-100,000 M☉",
    description: "Larger than stellar but smaller than supermassive. Still being studied.",
    color: "#6c5ce7",
    example: "HLX-1",
  },
  {
    type: "supermassive",
    name: "Supermassive Black Holes",
    massRange: "> 100,000 M☉",
    description: "Found at the center of galaxies. Millions to billions of solar masses.",
    color: "#ff6b8a",
    example: "Sagittarius A*",
  },
  {
    type: "primordial",
    name: "Primordial Black Holes",
    massRange: "Any mass",
    description: "Theoretical black holes formed in the early universe. Not yet confirmed.",
    color: "#ffd93d",
    example: "Hypothetical",
  },
];

function BlackHoleTypesGuide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {blackHoleTypes.map((bht) => (
        <Card key={bht.type} variant="glass">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-8 h-8 rounded-full"
                style={{
                  background: `radial-gradient(circle, #000 40%, ${bht.color}40 100%)`,
                  border: `2px solid ${bht.color}60`,
                }}
              />
              <div>
                <h3 className="text-xs font-semibold text-text-primary font-[family-name:var(--font-display)]">
                  {bht.name}
                </h3>
                <div className="text-[9px] text-plasma-300">{bht.massRange}</div>
              </div>
            </div>
            <p className="text-[10px] text-text-secondary mb-1">{bht.description}</p>
            <div className="text-[9px] text-text-muted">Example: {bht.example}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export { BlackHoleTypesGuide };
