"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const facts = [
  { category: "Inner Planets", items: [
    { title: "Mercury's Extreme Temperatures", content: "Mercury experiences temperature swings of over 600°C between day and night." },
    { title: "Venus's Retrograde Rotation", content: "Venus rotates backwards compared to most planets, with a day longer than its year." },
    { title: "Earth's Magnetic Field", content: "Earth's magnetic field protects us from solar wind and cosmic radiation." },
    { title: "Mars's Olympus Mons", content: "Olympus Mons is the tallest volcano in the solar system at 21.9 km high." },
  ]},
  { category: "Outer Planets", items: [
    { title: "Jupiter's Great Red Spot", content: "This storm has been raging for at least 350 years and is larger than Earth." },
    { title: "Saturn's Density", content: "Saturn is less dense than water - it would theoretically float in a giant bathtub." },
    { title: "Uranus's Axial Tilt", content: "Uranus rotates on its side with a 97.77° tilt, possibly from an ancient collision." },
    { title: "Neptune's Winds", content: "Neptune has the fastest winds in the solar system, reaching 2,100 km/h." },
  ]},
  { category: "Solar System", items: [
    { title: "The Sun's Mass", content: "The Sun contains 99.86% of all mass in the solar system." },
    { title: "Light Speed", content: "Light from the Sun takes 8 minutes 20 seconds to reach Earth." },
    { title: "Asteroid Belt", content: "The asteroid belt between Mars and Jupiter contains millions of rocky bodies." },
    { title: "Kuiper Belt", content: "The Kuiper Belt extends beyond Neptune and contains dwarf planets like Pluto." },
  ]},
];

function SolarSystemFacts() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>📚</span> Solar System Facts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {facts.map((category) => (
            <div key={category.category}>
              <h4 className="text-xs font-semibold text-plasma-300 mb-2">{category.category}</h4>
              <div className="space-y-2">
                {category.items.map((item, i) => (
                  <div key={i} className="p-2 bg-surface-glass rounded-lg">
                    <div className="text-[10px] font-semibold text-text-primary mb-0.5">{item.title}</div>
                    <div className="text-[10px] text-text-secondary">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { SolarSystemFacts };
