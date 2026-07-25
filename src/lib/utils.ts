import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatNumber(num: number): string {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
  return num.toFixed(0);
}

export function formatDistance(km: number): string {
  if (km >= 1e9) return (km / 1e9).toFixed(2) + " billion km";
  if (km >= 1e6) return (km / 1e6).toFixed(1) + " million km";
  if (km >= 1e3) return (km / 1e3).toFixed(0) + ",000 km";
  return km.toLocaleString() + " km";
}

export function formatMass(kg: number): string {
  const earthMasses = kg / 5.972e24;
  if (earthMasses >= 1) return earthMasses.toFixed(2) + " Earth masses";
  return kg.toExponential(2) + " kg";
}

export function formatTemperature(celsius: number): string {
  return `${celsius}°C / ${Math.round(celsius * 9/5 + 32)}°F`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
