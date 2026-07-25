"use client";

import { Destination, TravelRecord } from "../types";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/formatters";

interface ArrivalPanelProps {
  destination: Destination;
  record?: TravelRecord;
  onClose: () => void;
}

function ArrivalPanel({ destination, record, onClose }: ArrivalPanelProps) {
  return (
    <Card variant="glass" className="w-full max-w-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
            style={{
              backgroundColor: `${destination.color}15`,
              border: `2px solid ${destination.color}30`,
            }}
          >
            {destination.icon}
          </div>
          <div>
            <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">
              {destination.name}
            </h2>
            <p className="text-sm text-text-secondary">{destination.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <InfoItem label="Distance from Earth" value={formatDistance(destination.distance)} />
          <InfoItem label="Travel Time" value={destination.travelTime} />
          {destination.diameter && <InfoItem label="Diameter" value={`${destination.diameter.toLocaleString()} km`} />}
          {destination.gravity && <InfoItem label="Surface Gravity" value={`${destination.gravity} m/s²`} />}
          {destination.temperature && <InfoItem label="Temperature" value={`${destination.temperature}°C`} />}
          {destination.atmosphere && <InfoItem label="Atmosphere" value={destination.atmosphere} />}
        </div>

        {destination.funFacts && destination.funFacts.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h4>
            <ul className="space-y-2">
              {destination.funFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-plasma-400 mt-0.5 shrink-0">★</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        )}

        {record && (
          <div className="bg-surface-glass rounded-lg p-3 mb-4">
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Mission Log</h4>
            <div className="flex items-center gap-4 text-xs text-text-secondary">
              <span>Duration: {Math.round(record.duration)}s</span>
              <span>•</span>
              <span>Date: {new Date(record.date).toLocaleDateString()}</span>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full px-4 py-2.5 rounded-lg bg-plasma-500 hover:bg-plasma-400 text-white text-sm font-medium transition-colors"
        >
          Continue Exploring
        </button>
      </CardContent>
    </Card>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-glass rounded-lg p-3">
      <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{label}</div>
      <div className="text-sm font-medium text-text-primary">{value}</div>
    </div>
  );
}

export { ArrivalPanel };
