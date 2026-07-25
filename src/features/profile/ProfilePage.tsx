"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

function ProfilePage() {
  const achievements = [
    { name: "Explorer Level 1", description: "Begin your space journey", icon: "🚀", unlocked: true },
    { name: "Planet Hopper", description: "Visit 3 planets", icon: "🌍", unlocked: true },
    { name: "Star Gazer", description: "Discover 5 stars", icon: "⭐", unlocked: false },
    { name: "Time Traveler", description: "View the cosmic timeline", icon: "⏰", unlocked: false },
  ];

  return (
    <PageContainer narrow>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-plasma-300 to-aurora-400 bg-clip-text text-transparent">
          Space Profile
        </h1>
      </div>

      <Card variant="glass" className="mb-8">
        <CardHeader>
          <CardTitle>Explorer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-plasma-500 to-cosmic-500 flex items-center justify-center text-2xl">
              🧑‍🚀
            </div>
            <div>
              <div className="text-lg font-semibold text-text-primary">Space Explorer</div>
              <div className="text-sm text-text-secondary">Level 1 • 0 XP</div>
            </div>
          </div>
          <div className="h-2 bg-surface-glass rounded-full overflow-hidden">
            <div className="h-full w-0 bg-gradient-to-r from-plasma-500 to-aurora-400 rounded-full" />
          </div>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold text-text-primary mb-4 font-[family-name:var(--font-display)]">Achievements</h2>
      <div className="grid grid-cols-2 gap-4">
        {achievements.map((ach) => (
          <div
            key={ach.name}
            className={`p-4 rounded-xl border transition-all ${
              ach.unlocked
                ? "bg-surface-glass border-plasma-500/30"
                : "bg-surface-primary border-border-default opacity-50"
            }`}
          >
            <div className="text-2xl mb-2">{ach.icon}</div>
            <div className="text-sm font-semibold text-text-primary">{ach.name}</div>
            <div className="text-xs text-text-secondary">{ach.description}</div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export { ProfilePage };
