export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value);
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

export function isValidPlanetId(id: string): boolean {
  const validIds = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  return validIds.includes(id);
}

export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}
