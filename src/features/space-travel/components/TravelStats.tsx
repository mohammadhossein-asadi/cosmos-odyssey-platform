"use client";

interface TravelStatsProps {
  totalJourneys?: number;
  destinationsVisited?: number;
  totalDistance?: number;
}

function TravelStats({ totalJourneys = 0, destinationsVisited = 0, totalDistance = 0 }: TravelStatsProps) {
  const stats = [
    { label: "Destinations", value: "8", icon: "🌍", color: "from-plasma-500/20 to-cosmic-500/20" },
    { label: "Journeys Taken", value: totalJourneys.toString(), icon: "🚀", color: "from-aurora-500/20 to-cosmic-500/20" },
    { label: "Planets Visited", value: destinationsVisited.toString(), icon: "⭐", color: "from-star-500/20 to-cosmic-500/20" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center p-4 rounded-xl bg-surface-glass border border-border-default">
          <div className="text-2xl mb-2">{stat.icon}</div>
          <div className="text-xl font-bold text-text-primary font-[family-name:var(--font-display)]">{stat.value}</div>
          <div className="text-[10px] text-text-muted uppercase tracking-wider mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export { TravelStats };
