"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function TimeDilationCalculator() {
  const [distance, setDistance] = useState(10);
  const [blackHoleMass, setBlackHoleMass] = useState(1000000);

  const schwarzschildRadius = 2 * 6.674e-11 * blackHoleMass * 1.989e30 / (9e16);
  const distanceMeters = distance * schwarzschildRadius;
  const timeDilationFactor = 1 / Math.sqrt(1 - schwarzschildRadius / distanceMeters);
  const yearsNearBH = 1;
  const yearsFarAway = yearsNearBH * timeDilationFactor;

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>⏱️</span> Time Dilation Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-text-secondary mb-1.5 block">Distance from Event Horizon (× R_s)</label>
            <input
              type="range"
              min="1.1"
              max="100"
              step="0.1"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full accent-plasma-500"
            />
            <div className="text-[10px] text-text-muted text-center mt-1">{distance.toFixed(1)}× Schwarzschild radius</div>
          </div>

          <div>
            <label className="text-xs text-text-secondary mb-1.5 block">Black Hole Mass (Solar Masses)</label>
            <input
              type="range"
              min="10"
              max="100000000"
              step="1000"
              value={blackHoleMass}
              onChange={(e) => setBlackHoleMass(Number(e.target.value))}
              className="w-full accent-plasma-500"
            />
            <div className="text-[10px] text-text-muted text-center mt-1">{blackHoleMass.toLocaleString()} M☉</div>
          </div>

          <div className="bg-surface-glass rounded-lg p-4">
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Result</h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-[10px] text-text-muted">1 year near BH</div>
                <div className="text-sm font-bold text-plasma-300">{yearsFarAway.toFixed(1)} years far away</div>
              </div>
              <div>
                <div className="text-[10px] text-text-muted">Time dilation factor</div>
                <div className="text-sm font-bold text-aurora-400">{timeDilationFactor.toFixed(2)}×</div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-text-muted">
            At the event horizon, time dilation becomes infinite. This is why nothing can escape — from the outside perspective, time stops.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export { TimeDilationCalculator };
