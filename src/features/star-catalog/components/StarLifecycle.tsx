"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const lifecycle = [
  { stage: "Nebula", description: "Cloud of gas and dust collapses under gravity.", color: "#ff6b8a", icon: "☁️" },
  { stage: "Protostar", description: "Dense core forms, heating up from gravitational energy.", color: "#ff9500", icon: "⭐" },
  { stage: "Main Sequence", description: "Hydrogen fusion begins. Star spends most of its life here.", color: "#ffd93d", icon: "☀️" },
  { stage: "Red Giant", description: "Hydrogen exhausted, outer layers expand.", color: "#ff4500", icon: "🔴" },
  { stage: "Planetary Nebula", description: "Outer layers expelled, forming a colorful shell.", color: "#6c5ce7", icon: "💫" },
  { stage: "White Dwarf", description: "Dense core remains, slowly cooling over billions of years.", color: "#e0e0ff", icon: "💎" },
];

function StarLifecycle() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>🔄</span> Star Lifecycle
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {lifecycle.map((stage, i) => (
            <div key={stage.stage} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0"
                  style={{ backgroundColor: `${stage.color}20`, border: `2px solid ${stage.color}40` }}
                >
                  {stage.icon}
                </div>
                {i < lifecycle.length - 1 && <div className="w-px h-4 bg-border-default" />}
              </div>
              <div className="pb-2">
                <div className="text-xs font-semibold text-text-primary">{stage.stage}</div>
                <div className="text-[10px] text-text-secondary">{stage.description}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { StarLifecycle };
