"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function HabitabilityZonesGuide() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>🌍</span> Habitable Zone
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-xs text-text-secondary">
            The habitable zone is the region around a star where liquid water could exist on a planet&apos;s surface.
          </p>

          <div className="bg-surface-glass rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-nebula-500" />
              <span className="text-[10px] text-text-muted">Too Hot - Water boils</span>
            </div>
            <div className="h-2 bg-gradient-to-r from-nebula-500 via-aurora-400 to-plasma-500 rounded-full mb-2" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-aurora-400" />
                <span className="text-[10px] text-text-muted">Habitable Zone</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-plasma-500" />
                <span className="text-[10px] text-text-muted">Too Cold - Water freezes</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-text-muted">
            The exact boundaries depend on the star&apos;s temperature and luminosity. M-dwarfs have closer habitable zones.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { HabitabilityZonesGuide };
