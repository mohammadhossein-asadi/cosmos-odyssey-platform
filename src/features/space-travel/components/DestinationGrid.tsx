"use client";

import { Destination } from "../types";
import { formatDistance } from "@/lib/formatters";

interface DestinationGridProps {
  destinations: Destination[];
  onSelect: (id: string) => void;
}

function DestinationGrid({ destinations, onSelect }: DestinationGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {destinations.map((dest) => (
        <button
          key={dest.id}
          onClick={() => onSelect(dest.id)}
          className="group relative p-5 rounded-xl bg-surface-primary border border-border-default hover:border-plasma-500/40 transition-all duration-300 text-left overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${dest.color}15 0%, transparent 70%)`,
            }}
          />

          <div className="relative">
            <div className="flex items-start justify-between mb-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${dest.color}15`,
                  border: `1px solid ${dest.color}30`,
                }}
              >
                {dest.icon}
              </div>
              <div className="text-right">
                <div className="text-[10px] text-text-muted uppercase tracking-wider">Distance</div>
                <div className="text-xs font-medium text-text-secondary">{formatDistance(dest.distance)}</div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-text-primary group-hover:text-plasma-300 transition-colors font-[family-name:var(--font-display)] mb-1">
              {dest.name}
            </h3>
            <p className="text-xs text-text-muted mb-3">Travel time: {dest.travelTime}</p>
            <p className="text-sm text-text-secondary line-clamp-2">{dest.description}</p>

            <div className="mt-4 flex items-center gap-2 text-xs text-plasma-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Launch Mission</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export { DestinationGrid };
