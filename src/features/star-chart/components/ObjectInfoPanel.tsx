"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skyStars } from "../data/stars";
import { skyConstellations } from "../data/constellations";
import { deepSkyObjects } from "../data/deep-sky";

interface ObjectInfoPanelProps {
  objectId: string;
  objectType: "star" | "constellation" | "deep-sky";
  onClose: () => void;
}

function ObjectInfoPanel({ objectId, objectType, onClose }: ObjectInfoPanelProps) {
  if (objectType === "star") {
    const star = skyStars.find((s) => s.id === objectId);
    if (!star) return null;

    return (
      <Card variant="glass" className="w-64">
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: star.color, boxShadow: `0 0 8px ${star.color}` }} />
              <div>
                <h3 className="text-sm font-semibold text-text-primary">{star.name}</h3>
                <Badge variant="cosmic" size="sm">{star.spectralClass}</Badge>
              </div>
            </div>
            <button onClick={onClose} className="p-1 rounded hover:bg-surface-glass text-text-muted">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-text-secondary mb-2">{star.description}</p>
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Magnitude</div>
              <div className="text-text-primary">{star.magnitude}</div>
            </div>
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Constellation</div>
              <div className="text-text-primary">{star.constellation}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (objectType === "constellation") {
    const constellation = skyConstellations.find((c) => c.id === objectId);
    if (!constellation) return null;

    return (
      <Card variant="glass" className="w-64">
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-text-primary">{constellation.name}</h3>
            <button onClick={onClose} className="p-1 rounded hover:bg-surface-glass text-text-muted">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-text-secondary mb-2">{constellation.mythology}</p>
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Best Month</div>
              <div className="text-text-primary">{constellation.bestMonth}</div>
            </div>
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Hemisphere</div>
              <div className="text-text-primary capitalize">{constellation.hemisphere}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (objectType === "deep-sky") {
    const obj = deepSkyObjects.find((o) => o.id === objectId);
    if (!obj) return null;

    return (
      <Card variant="glass" className="w-64">
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-sm font-semibold text-text-primary">{obj.name}</h3>
              <Badge variant="cosmic" size="sm">{obj.type.replace("-", " ")}</Badge>
            </div>
            <button onClick={onClose} className="p-1 rounded hover:bg-surface-glass text-text-muted">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-text-secondary mb-2">{obj.description}</p>
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Magnitude</div>
              <div className="text-text-primary">{obj.magnitude}</div>
            </div>
            <div className="bg-surface-glass rounded p-1.5">
              <div className="text-text-muted">Constellation</div>
              <div className="text-text-primary">{obj.constellation}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
}

export { ObjectInfoPanel };
