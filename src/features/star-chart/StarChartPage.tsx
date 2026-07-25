"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { SkyChart } from "./components/SkyChart";
import { ChartControls } from "./components/ChartControls";
import { ObjectInfoPanel } from "./components/ObjectInfoPanel";
import { StarLegend } from "./components/StarLegend";
import { SeasonalGuide } from "./components/SeasonalGuide";
import { ChartConfig } from "./types";

function StarChartPage() {
  const [config, setConfig] = useState<ChartConfig>({
    hemisphere: "northern",
    season: "winter",
    showConstellations: true,
    showLabels: true,
    showDeepSky: true,
    magnitudeLimit: 4,
    gridLines: false,
    rotation: 0,
  });

  const [selectedObject, setSelectedObject] = useState<string | null>(null);
  const [objectType, setObjectType] = useState<"star" | "constellation" | "deep-sky" | null>(null);

  const handleObjectSelect = (id: string, type: "star" | "constellation" | "deep-sky") => {
    setSelectedObject(id === selectedObject ? null : id);
    setObjectType(id === selectedObject ? null : type);
  };

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-plasma-300 to-star-400 bg-clip-text text-transparent">
            Star Chart
          </h1>
          <p className="text-text-secondary text-xs mt-1">
            Interactive night sky map - explore constellations, stars, and deep sky objects
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <ChartControls config={config} onConfigChange={(partial) => setConfig((prev) => ({ ...prev, ...partial }))} />
          <StarLegend />
        </div>

        <div className="lg:col-span-3">
          <div className="relative">
            <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-border-default">
              <SkyChart
                config={config}
                onObjectSelect={handleObjectSelect}
                selectedObject={selectedObject}
              />
            </div>

            {selectedObject && objectType && (
              <div className="absolute top-4 right-4">
                <ObjectInfoPanel
                  objectId={selectedObject}
                  objectType={objectType}
                  onClose={() => { setSelectedObject(null); setObjectType(null); }}
                />
              </div>
            )}

            <div className="absolute bottom-4 left-4">
              <div className="px-3 py-1.5 rounded-lg bg-surface-glass/80 backdrop-blur-md border border-border-default text-[10px] text-text-muted">
                {config.hemisphere === "northern" ? "Northern" : "Southern"} Hemisphere • {config.season.charAt(0).toUpperCase() + config.season.slice(1)} Sky
              </div>
            </div>
          </div>

          <div className="mt-4">
            <SeasonalGuide />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export { StarChartPage };
