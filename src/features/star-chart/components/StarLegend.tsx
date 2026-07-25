"use client";

import { Card, CardContent } from "@/components/ui/Card";

function StarLegend() {
  return (
    <Card variant="glass">
      <CardContent className="p-3">
        <h3 className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Legend</h3>
        <div className="space-y-1.5">
          <LegendItem size={8} color="#aaccff" label="Bright star (mag < 1)" />
          <LegendItem size={5} color="#aaccff" label="Medium star (mag 1-3)" />
          <LegendItem size={3} color="#aaccff" label="Faint star (mag 3-5)" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-plasma-400" />
            <span className="text-[9px] text-text-muted">Constellation line</span>
          </div>
          <LegendItem size={6} color="#ff6b8a" label="Nebula" shape="circle" />
          <LegendItem size={6} color="#b8a0e0" label="Galaxy" shape="circle" />
          <LegendItem size={6} color="#aaccff" label="Star cluster" shape="circle" />
        </div>
      </CardContent>
    </Card>
  );
}

function LegendItem({ size, color, label, shape = "circle" }: { size: number; color: string; label: string; shape?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={shape === "circle" ? "rounded-full" : ""}
        style={{ width: size, height: size, backgroundColor: color, boxShadow: `0 0 ${size}px ${color}` }}
      />
      <span className="text-[9px] text-text-muted">{label}</span>
    </div>
  );
}

export { StarLegend };
