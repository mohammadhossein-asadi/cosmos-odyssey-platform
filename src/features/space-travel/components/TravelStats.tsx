"use client";

function TravelStats() {
  const stats = [
    { label: "Destinations", value: "8", icon: "🌍" },
    { label: "Avg Distance", value: "150M km", icon: "📏" },
    { label: "Travel Routes", value: "24", icon: "🚀" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center p-4 rounded-lg bg-surface-glass border border-border-default">
          <div className="text-2xl mb-1">{stat.icon}</div>
          <div className="text-lg font-bold text-text-primary">{stat.value}</div>
          <div className="text-xs text-text-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export { TravelStats };
