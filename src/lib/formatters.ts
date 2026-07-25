export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`;
  if (year < 1000) return `${year} CE`;
  return year.toLocaleString();
}

export function formatDuration(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

export function formatScientific(num: number, decimals = 2): string {
  return num.toExponential(decimals);
}

export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

export function formatDistance(km: number): string {
  if (km >= 1e9) return (km / 1e9).toFixed(2) + " billion km";
  if (km >= 1e6) return (km / 1e6).toFixed(1) + " million km";
  if (km >= 1e3) return (km / 1e3).toFixed(0) + ",000 km";
  return km.toLocaleString() + " km";
}

export function formatTemperature(celsius: number): string {
  return `${celsius}°C / ${Math.round(celsius * 9 / 5 + 32)}°F`;
}
