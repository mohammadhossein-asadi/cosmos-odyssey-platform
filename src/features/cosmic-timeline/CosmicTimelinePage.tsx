"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";

const timelineEvents = [
  { id: 1, year: -13800000000, era: "Big Bang", title: "The Big Bang", description: "The universe begins from an infinitely dense singularity. Space, time, matter, and energy come into existence.", icon: "💥", color: "#ff6b8a" },
  { id: 2, year: -13500000000, era: "Cosmic Dawn", title: "First Stars Form", description: "The first stars ignite, ending the cosmic dark ages. These massive stars create the first heavy elements.", icon: "⭐", color: "#ffd93d" },
  { id: 3, year: -13200000000, era: "Galactic Evolution", title: "Milky Way Formation", description: "Our home galaxy begins to form from merging proto-galaxies over billions of years.", icon: "🌌", color: "#b8a0e0" },
  { id: 4, year: -4600000000, era: "Solar System Birth", title: "Solar System Forms", description: "A cloud of gas and dust collapses to form our Sun and the planets of our solar system.", icon: "☀️", color: "#ffd93d" },
  { id: 5, year: -4500000000, era: "Solar System Birth", title: "Earth Forms", description: "Our planet coalesces from debris in the protoplanetary disk around the young Sun.", icon: "🌍", color: "#4a90d9" },
  { id: 6, year: -3800000000, era: "Origins of Life", title: "First Life on Earth", description: "Simple single-celled organisms appear in the oceans, marking the beginning of biology.", icon: "🦠", color: "#00d4aa" },
  { id: 7, year: -2400000000, era: "Great Oxidation", title: "Great Oxidation Event", description: "Cyanobacteria produce oxygen, transforming Earth's atmosphere and enabling complex life.", icon: "💨", color: "#4a90d9" },
  { id: 8, year: -600000000, era: "Cambrian Explosion", title: "Cambrian Explosion", description: "Rapid diversification of complex life forms. Most major animal groups appear.", icon: "🐚", color: "#ff9500" },
  { id: 9, year: -230000000, era: "Age of Reptiles", title: "First Dinosaurs", description: "Dinosaurs appear and begin to dominate Earth for the next 165 million years.", icon: "🦕", color: "#c1440e" },
  { id: 10, year: -66000000, era: "Mass Extinction", title: "K-Pg Extinction", description: "An asteroid impact ends the age of dinosaurs and paves the way for mammals.", icon: "☄️", color: "#ff4500" },
  { id: 11, year: -300000, era: "Human History", title: "First Humans", description: "Homo sapiens evolve in Africa, beginning the story of human civilization.", icon: "🧑", color: "#e8cda0" },
  { id: 12, year: 1969, era: "Space Age", title: "Moon Landing", description: "Humans first set foot on another celestial body. Neil Armstrong takes one small step.", icon: "🌙", color: "#c0c0c0" },
  { id: 13, year: 1990, era: "Space Age", title: "Hubble Launched", description: "The Hubble Space Telescope begins revolutionizing our understanding of the universe.", icon: "🔭", color: "#4a90d9" },
  { id: 14, year: 2021, era: "Modern Era", title: "James Webb Launched", description: "The most powerful space telescope begins observing the earliest galaxies.", icon: "🛰️", color: "#ffd93d" },
];

function CosmicTimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const eras = [...new Set(timelineEvents.map((e) => e.era))];
  const filtered = filter === "all" ? timelineEvents : timelineEvents.filter((e) => e.era === filter);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-star-400 to-nebula-400 bg-clip-text text-transparent">
          Cosmic Timeline
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Journey through 13.8 billion years of cosmic history
        </p>
      </div>

      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={cn(
            "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
            filter === "all"
              ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
              : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
          )}
        >
          All Events
        </button>
        {eras.map((era) => (
          <button
            key={era}
            onClick={() => setFilter(era)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
              filter === era
                ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
            )}
          >
            {era}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-plasma-500/50 via-star-500/50 to-aurora-500/50" />

        <div className="space-y-8">
          {filtered.map((event, i) => {
            const isLeft = i % 2 === 0;
            const isSelected = selectedEvent === event.id;

            return (
              <div
                key={event.id}
                className={cn(
                  "relative flex items-start gap-4",
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-plasma-500 bg-cosmic-900 z-10" />

                {/* Content */}
                <div className={cn("ml-16 md:ml-0 md:w-[calc(50%-2rem)]", isLeft ? "md:pr-8 md:text-right" : "md:pl-8")}>
                  <button
                    onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                    className={cn(
                      "w-full p-4 rounded-xl border text-left transition-all duration-300",
                      isSelected
                        ? "bg-plasma-500/10 border-plasma-500/30"
                        : "bg-surface-primary border-border-default hover:border-plasma-500/20"
                    )}
                  >
                    <div className={cn("flex items-center gap-2 mb-2", isLeft ? "md:justify-end" : "")}>
                      <span className="text-xs font-mono text-plasma-400">
                        {event.year < 0 ? `${Math.abs(event.year / 1e9).toFixed(1)}B years ago` : event.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{event.icon}</span>
                      <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary">{event.description}</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export { CosmicTimelinePage };
