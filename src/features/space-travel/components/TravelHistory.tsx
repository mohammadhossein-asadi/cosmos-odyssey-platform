"use client";

import { TravelRecord } from "../types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface TravelHistoryProps {
  records: TravelRecord[];
}

function TravelHistory({ records }: TravelHistoryProps) {
  if (records.length === 0) return null;

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🚀</span> Travel Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {records.map((record) => (
            <div
              key={record.id}
              className="flex items-center justify-between p-3 bg-surface-glass rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-plasma-500/20 flex items-center justify-center text-plasma-400 text-xs">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary">{record.destination}</div>
                  <div className="text-xs text-text-muted">{new Date(record.date).toLocaleDateString()}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-text-secondary">{Math.round(record.duration)}s</div>
                <div className="text-[10px] text-text-muted">{(record.distance / 1e6).toFixed(0)}M km</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { TravelHistory };
