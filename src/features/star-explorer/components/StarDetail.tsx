"use client";

import { stars } from "@/data/stars";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface StarDetailProps {
  starId: string;
}

function StarDetail({ starId }: StarDetailProps) {
  const star = stars.find((s) => s.id === starId);
  if (!star) return null;

  return (
    <Card variant="glass">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: star.color, boxShadow: `0 0 20px ${star.color}` }}
          />
          <div>
            <CardTitle>{star.name}</CardTitle>
            <Badge variant="cosmic" size="sm">{star.spectralClass}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text-secondary mb-4">{star.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <InfoItem label="Temperature" value={`${star.temperature.toLocaleString()} K`} />
          <InfoItem label="Luminosity" value={`${star.luminosity} L☉`} />
          <InfoItem label="Mass" value={`${star.mass} M☉`} />
          <InfoItem label="Radius" value={`${star.radius} R☉`} />
          <InfoItem label="Distance" value={`${star.distance} ly`} />
          <InfoItem label="Constellation" value={star.constellation || "N/A"} />
        </div>

        {star.funFacts.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h4>
            <ul className="space-y-1">
              {star.funFacts.map((fact, i) => (
                <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                  <span className="text-star-400">★</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-glass rounded-lg p-2">
      <div className="text-[10px] text-text-muted uppercase">{label}</div>
      <div className="text-xs text-text-primary font-medium">{value}</div>
    </div>
  );
}

export { StarDetail };
