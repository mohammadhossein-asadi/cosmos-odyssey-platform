"use client";

import { useState } from "react";
import { deepSkyObjects } from "../data/deep-sky-objects";
import { DeepSkyObjectType } from "../types";
import { Badge } from "@/components/ui/Badge";

function DeepSkyObjectsPanel() {
  const [filter, setFilter] = useState<DeepSkyObjectType | "all">("all");

  const filtered = filter === "all"
    ? deepSkyObjects
    : deepSkyObjects.filter((o) => o.type === filter);

  const types: (DeepSkyObjectType | "all")[] = ["all", "nebula", "star-cluster", "black-hole"];

  return (
    <div>
      <div className="flex gap-1.5 mb-4 flex-wrap">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === type
                ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
                : "bg-surface-glass text-text-muted hover:text-text-secondary border border-transparent"
            }`}
          >
            {type === "all" ? "All" : type.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((obj) => (
          <div key={obj.id} className="p-3 bg-surface-primary rounded-xl border border-border-default hover:border-plasma-500/20 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `${obj.color}30`, border: `1px solid ${obj.color}50` }} />
              <h4 className="text-xs font-semibold text-text-primary">{obj.name}</h4>
            </div>
            <p className="text-[11px] text-text-secondary mb-2 line-clamp-2">{obj.description}</p>
            <div className="flex items-center gap-2">
              <Badge variant="default" size="sm">{obj.type.replace("-", " ")}</Badge>
              {obj.magnitude && (
                <span className="text-[10px] text-text-muted">Mag: {obj.magnitude}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { DeepSkyObjectsPanel };
