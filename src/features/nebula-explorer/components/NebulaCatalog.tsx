"use client";

import { NebulaData } from "../types";
import { Badge } from "@/components/ui/Badge";
import { formatDistance } from "@/lib/formatters";

interface NebulaCatalogProps {
  nebulae: NebulaData[];
  onSelect: (id: string) => void;
  selectedNebula: string | null;
}

function NebulaCatalog({ nebulae, onSelect, selectedNebula }: NebulaCatalogProps) {
  return (
    <div className="space-y-2">
      {nebulae.map((nebula) => (
        <button
          key={nebula.id}
          onClick={() => onSelect(nebula.id)}
          className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
            selectedNebula === nebula.id
              ? "bg-plasma-500/10 border-plasma-500/30"
              : "bg-surface-primary border-border-default hover:border-plasma-500/20"
          }`}
        >
          <div className="flex items-start gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-lg shrink-0"
              style={{
                background: `radial-gradient(circle, ${nebula.color}60 0%, ${nebula.color}20 70%)`,
                border: `1px solid ${nebula.color}40`,
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-display)]">
                  {nebula.name}
                </h3>
                <Badge variant="cosmic" size="sm">{nebula.type}</Badge>
              </div>
              <p className="text-[10px] text-text-muted">{nebula.designation}</p>
            </div>
          </div>
          <p className="text-xs text-text-secondary line-clamp-2 mb-2">{nebula.description}</p>
          <div className="flex items-center gap-2 text-[10px] text-text-muted">
            <span>{nebula.constellation}</span>
            <span>•</span>
            <span>{formatDistance(nebula.distance * 3.26)}</span>
            <span>•</span>
            <span>{nebula.diameter} ly</span>
          </div>
        </button>
      ))}
    </div>
  );
}

export { NebulaCatalog };
