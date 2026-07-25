"use client";

import { Card } from "@/components/ui/Card";

interface FactCardProps {
  facts: string[];
}

function FactCard({ facts }: FactCardProps) {
  return (
    <Card variant="glass">
      <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-display)]">
        Interesting Facts
      </h3>
      <ul className="space-y-2">
        {facts.map((fact, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-plasma-400 mt-1 shrink-0">★</span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export { FactCard };
