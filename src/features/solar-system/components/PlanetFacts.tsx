"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const funFacts = [
  { planet: "Mercury", fact: "A day on Mercury is longer than its year.", icon: "⏱️" },
  { planet: "Venus", fact: "Venus rotates backwards compared to other planets.", icon: "🔄" },
  { planet: "Earth", fact: "Earth is the only planet not named after a god.", icon: "🌍" },
  { planet: "Mars", fact: "Mars has the tallest volcano: Olympus Mons at 21.9 km.", icon: "🏔️" },
  { planet: "Jupiter", fact: "Jupiter's Great Red Spot is larger than Earth.", icon: "🔴" },
  { planet: "Saturn", fact: "Saturn is less dense than water - it would float!", icon: "💧" },
  { planet: "Uranus", fact: "Uranus rotates on its side at 97.77° tilt.", icon: "🏈" },
  { planet: "Neptune", fact: "Neptune has winds up to 2,100 km/h.", icon: "💨" },
];

function PlanetFacts() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>💡</span> Planet Fun Facts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {funFacts.map((item) => (
            <div key={item.planet} className="flex items-start gap-2 p-2 bg-surface-glass rounded-lg">
              <span className="text-sm">{item.icon}</span>
              <div>
                <div className="text-[10px] font-semibold text-text-primary">{item.planet}</div>
                <div className="text-[10px] text-text-secondary">{item.fact}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { PlanetFacts };
