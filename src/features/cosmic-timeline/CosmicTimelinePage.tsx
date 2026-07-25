"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { cosmicTimeline } from "@/data/timeline";

function CosmicTimelinePage() {
  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-star-400 to-nebula-400 bg-clip-text text-transparent">
          Cosmic Timeline
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Journey through 13.8 billion years of cosmic history.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-plasma-500/50 via-star-500/50 to-aurora-500/50" />

        <div className="space-y-8">
          {cosmicTimeline.map((event, i) => (
            <div key={event.id} className="relative pl-16">
              <div className="absolute left-6 top-2 w-4 h-4 rounded-full border-2 border-plasma-500 bg-cosmic-900" />
              <div className="bg-surface-primary rounded-xl border border-border-default p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-plasma-400 font-mono">
                    {event.year < 0 ? `${Math.abs(event.year / 1e9).toFixed(1)}B years ago` : event.year}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cosmic-500/20 text-cosmic-200">
                    {event.era}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-display)]">
                  {event.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export { CosmicTimelinePage };
