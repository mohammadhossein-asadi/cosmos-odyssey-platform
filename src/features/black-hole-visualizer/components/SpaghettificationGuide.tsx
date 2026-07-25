"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function SpaghettificationGuide() {
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span>🍝</span> Spaghettification
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-xs text-text-secondary">
            Spaghettification is the vertical stretching and horizontal compression of objects caused by extreme tidal forces.
          </p>

          <div className="bg-surface-glass rounded-lg p-3">
            <h4 className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">The Process</h4>
            <div className="flex items-center gap-2">
              <Step num={1} text="Falling toward black hole" />
              <Arrow />
              <Step num={2} text="Tidal forces stretch vertically" />
              <Arrow />
              <Step num={3} text="Compressed horizontally" />
              <Arrow />
              <Step num={4} text="Stretched into a thin strand" />
            </div>
          </div>

          <div className="text-[10px] text-text-muted">
            <strong className="text-text-secondary">Fun fact:</strong> For stellar-mass black holes, spaghettification happens well outside the event horizon.
            For supermassive black holes, you could cross the event horizon before being spaghettified.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Step({ num, text }: { num: number; text: string }) {
  return (
    <div className="text-center flex-1">
      <div className="w-6 h-6 rounded-full bg-plasma-500/20 flex items-center justify-center text-[10px] text-plasma-300 mx-auto mb-1">
        {num}
      </div>
      <div className="text-[8px] text-text-muted">{text}</div>
    </div>
  );
}

function Arrow() {
  return <div className="text-text-muted text-[10px]">→</div>;
}

export { SpaghettificationGuide };
