"use client";

import { VisualNebula } from "../types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface FactsPanelProps {
  nebula: VisualNebula;
}

function FactsPanel({ nebula }: FactsPanelProps) {
  return (
    <div className="absolute bottom-4 left-4 w-64">
      <Card variant="glass">
        <CardContent className="p-3">
          <h3 className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Fun Facts</h3>
          <ul className="space-y-1.5">
            {nebula.funFacts.map((fact, i) => (
              <li key={i} className="text-[10px] text-text-secondary flex items-start gap-1.5">
                <span className="text-plasma-400 shrink-0">★</span>
                {fact}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export { FactsPanel };
