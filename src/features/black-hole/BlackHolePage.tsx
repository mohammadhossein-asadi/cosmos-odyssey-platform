"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function BlackHolePage() {
  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-cosmic-200 to-nebula-500 bg-clip-text text-transparent">
          Black Hole Experience
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Explore the most extreme objects in the universe. Where gravity warps space and time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="h-[400px] rounded-xl border border-border-default bg-cosmic-900 flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-black border-4 border-plasma-500/30" style={{ boxShadow: "0 0 60px rgba(108, 92, 231, 0.4), 0 0 120px rgba(108, 92, 231, 0.2)" }} />
            <div className="absolute inset-0 rounded-full border-2 border-star-500/20 animate-rotate-slow" style={{ transform: "scale(1.3) rotateX(75deg)" }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="glass">
            <CardHeader><CardTitle>Event Horizon</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">The point of no return where not even light can escape the gravitational pull.</p>
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardHeader><CardTitle>Accretion Disk</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">A disk of superheated matter spiraling into the black hole at near-light speed.</p>
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardHeader><CardTitle>Time Dilation</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">Time passes slower near a black hole relative to distant observers.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}

export { BlackHolePage };
