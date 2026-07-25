"use client";

import { VisualNebula } from "../types";

interface NebulaSelectorProps {
  nebulae: VisualNebula[];
  selected: string;
  onSelect: (id: string) => void;
}

function NebulaSelector({ nebulae, selected, onSelect }: NebulaSelectorProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-surface-glass/80 backdrop-blur-md rounded-xl border border-border-default px-3 py-2">
      <div className="flex items-center gap-1">
        {nebulae.map((n) => (
          <button
            key={n.id}
            onClick={() => onSelect(n.id)}
            className={cn(
              "flex items-center gap-2 px-2 py-1 rounded-lg text-[10px] transition-all",
              selected === n.id
                ? "bg-plasma-500/20 text-plasma-300"
                : "text-text-muted hover:text-text-secondary hover:bg-surface-glass"
            )}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: n.primaryColor }} />
            <span className="hidden sm:inline">{n.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export { NebulaSelector };
