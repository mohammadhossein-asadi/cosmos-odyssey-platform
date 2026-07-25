"use client";

import { useMemo } from "react";
import { stars } from "../data/stars";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface HRDiagramProps {
  onSelectStar: (id: string) => void;
  selectedStar: string | null;
}

function HRDiagram({ onSelectStar, selectedStar }: HRDiagramProps) {
  const points = useMemo(() => {
    return stars.filter((s) => s.id !== "sun").map((star) => {
      const x = ((Math.log10(star.temperature) - 3.4) / (4.2 - 3.4)) * 100;
      const y = ((Math.log10(star.luminosity) + 2) / 7) * 100;
      return {
        id: star.id,
        name: star.name,
        x: Math.max(5, Math.min(95, 100 - x)),
        y: Math.max(5, Math.min(95, 100 - y)),
        color: star.color,
        size: 4 + (star.mass / 20) * 6,
        selected: selectedStar === star.id,
      };
    });
  }, [selectedStar]);

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>📊</span> Hertzsprung-Russell Diagram
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-cosmic-900 rounded-lg overflow-hidden" style={{ height: 300 }}>
          <div className="absolute inset-0 p-4">
            <div className="relative w-full h-full border border-border-default rounded">
              {points.map((point) => (
                <button
                  key={point.id}
                  onClick={() => onSelectStar(point.id)}
                  className="absolute rounded-full transition-transform hover:scale-150"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    width: point.size,
                    height: point.size,
                    backgroundColor: point.color,
                    boxShadow: point.selected ? `0 0 10px ${point.color}` : "none",
                    transform: `translate(-50%, -50%) ${point.selected ? "scale(1.5)" : ""}`,
                  }}
                  title={point.name}
                />
              ))}
            </div>
          </div>

          <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] text-text-muted whitespace-nowrap">
            Luminosity →
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-text-muted">
            Temperature →
          </div>

          <div className="absolute right-2 top-2 text-[8px] text-text-muted space-y-0.5">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#aaccff]" />
              <span>Supergiants</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#ffa500]" />
              <span>Giants</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#fff4e0]" />
              <span>主序星</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { HRDiagram };
