"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const achievements = [
  { name: "First Steps", description: "Visit your first planet", icon: "🌍", unlocked: true, category: "exploration" },
  { name: "Solar Explorer", description: "Visit all 8 planets", icon: "🪐", unlocked: false, category: "exploration" },
  { name: "Star Gazer", description: "Discover 10 stars", icon: "⭐", unlocked: true, category: "discovery" },
  { name: "Nebula Hunter", description: "View 5 nebulae", icon: "☁️", unlocked: false, category: "discovery" },
  { name: "Galaxy Hopper", description: "Explore 3 galaxies", icon: "🌌", unlocked: true, category: "exploration" },
  { name: "Black Hole Expert", description: "Learn about black holes", icon: "🕳️", unlocked: false, category: "learning" },
  { name: "Time Traveler", description: "View the cosmic timeline", icon: "⏳", unlocked: true, category: "learning" },
  { name: "Space Tourist", description: "Complete 5 space journeys", icon: "🚀", unlocked: false, category: "travel" },
  { name: "Constellation Map", description: "Map 10 constellations", icon: "✨", unlocked: false, category: "discovery" },
  { name: "Exoplanet Hunter", description: "Discover habitable worlds", icon: "🔭", unlocked: true, category: "discovery" },
  { name: "Mission Control", description: "Track 10 space missions", icon: "🛰️", unlocked: false, category: "learning" },
  { name: "Universe Master", description: "Complete all modules", icon: "🏆", unlocked: false, category: "exploration" },
];

const stats = [
  { label: "Planets Visited", value: 5, max: 8, icon: "🪐" },
  { label: "Stars Discovered", value: 12, max: 50, icon: "⭐" },
  { label: "Galaxies Explored", value: 3, max: 25, icon: "🌌" },
  { label: "Nebulae Viewed", value: 4, max: 15, icon: "☁️" },
  { label: "Missions Tracked", value: 6, max: 10, icon: "🛰️" },
  { label: "Journeys Completed", value: 3, max: 10, icon: "🚀" },
];

const travelHistory = [
  { destination: "Mars", date: "2 hours ago", duration: "7 months travel" },
  { destination: "Jupiter", date: "1 day ago", duration: "2.7 years travel" },
  { destination: "Saturn", date: "3 days ago", duration: "7 years travel" },
];

function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"achievements" | "stats" | "history">("achievements");
  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalXP = stats.reduce((sum, s) => sum + s.value * 100, 0);

  return (
    <PageContainer narrow>
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-plasma-300 to-aurora-400 bg-clip-text text-transparent">
          Space Profile
        </h1>
        <p className="text-text-secondary text-xs mt-1">
          Track your exploration journey and achievements
        </p>
      </div>

      {/* Profile Card */}
      <Card variant="glass" className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-plasma-500 to-cosmic-500 flex items-center justify-center text-3xl">
              🧑‍🚀
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">Space Explorer</h2>
              <div className="text-sm text-text-secondary">Level 1 Explorer • {totalXP} XP</div>
              <div className="mt-2">
                <div className="flex items-center gap-2 text-xs text-text-muted mb-1">
                  <span>{unlockedCount}/{achievements.length} achievements</span>
                  <span>•</span>
                  <span>{Math.round((unlockedCount / achievements.length) * 100)}% complete</span>
                </div>
                <div className="h-2 bg-surface-secondary rounded-full overflow-hidden w-48">
                  <div
                    className="h-full bg-gradient-to-r from-plasma-500 to-aurora-400 rounded-full"
                    style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-surface-primary rounded-lg p-1 border border-border-default">
        {[
          { id: "achievements" as const, label: "Achievements", count: unlockedCount },
          { id: "stats" as const, label: "Statistics", count: null },
          { id: "history" as const, label: "Travel History", count: travelHistory.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all",
              activeTab === tab.id
                ? "bg-plasma-500/20 text-plasma-300"
                : "text-text-muted hover:text-text-secondary"
            )}
          >
            {tab.label}
            {tab.count !== null && (
              <span className="ml-1 text-[10px] opacity-70">({tab.count})</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "achievements" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {achievements.map((ach) => (
            <Card
              key={ach.name}
              variant="glass"
              className={cn(!ach.unlocked && "opacity-50")}
            >
              <CardContent className="p-3 text-center">
                <div className="text-2xl mb-2">{ach.icon}</div>
                <h3 className="text-xs font-semibold text-text-primary mb-0.5">{ach.name}</h3>
                <p className="text-[10px] text-text-muted">{ach.description}</p>
                {ach.unlocked && (
                  <Badge variant="success" size="sm" className="mt-2">Unlocked</Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "stats" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {stats.map((stat) => (
            <Card key={stat.label} variant="glass">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-text-primary font-[family-name:var(--font-display)]">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted mb-2">{stat.label}</div>
                <div className="h-1.5 bg-surface-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-plasma-500 to-aurora-400 rounded-full"
                    style={{ width: `${(stat.value / stat.max) * 100}%` }}
                  />
                </div>
                <div className="text-[10px] text-text-muted mt-1">{stat.value}/{stat.max}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "history" && (
        <div className="space-y-3">
          {travelHistory.map((trip, i) => (
            <Card key={i} variant="glass">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-plasma-500/20 flex items-center justify-center">
                    <span className="text-plasma-400">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{trip.destination}</h3>
                    <p className="text-[10px] text-text-muted">{trip.duration}</p>
                  </div>
                </div>
                <div className="text-xs text-text-muted">{trip.date}</div>
              </CardContent>
            </Card>
          ))}
          {travelHistory.length === 0 && (
            <div className="text-center py-8 text-text-muted text-sm">
              No travel history yet. Start your first journey!
            </div>
          )}
        </div>
      )}
    </PageContainer>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export { ProfilePage };
