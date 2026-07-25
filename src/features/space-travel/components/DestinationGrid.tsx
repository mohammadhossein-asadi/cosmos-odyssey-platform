"use client";

import { Destination } from "../types";

interface DestinationGridProps {
  destinations: Destination[];
  onSelect: (id: string) => void;
}

function DestinationGrid({ destinations, onSelect }: DestinationGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {destinations.map((dest) => (
        <button
          key={dest.id}
          onClick={() => onSelect(dest.id)}
          className="group p-6 rounded-xl bg-surface-primary border border-border-default hover:border-plasma-500/30 transition-all duration-300 text-left hover:shadow-glow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${dest.color}20`, border: `1px solid ${dest.color}40` }}
            >
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: dest.color }} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-plasma-300 transition-colors font-[family-name:var(--font-display)]">
                {dest.name}
              </h3>
              <p className="text-xs text-text-muted">{dest.travelTime}</p>
            </div>
          </div>
          <p className="text-sm text-text-secondary">{dest.description}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-plasma-400">
            <span>Start Journey</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </button>
      ))}
    </div>
  );
}

export { DestinationGrid };
