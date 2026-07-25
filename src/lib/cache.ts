const cache = new Map<string, { data: unknown; expiry: number }>();

export function setCache(key: string, data: unknown, ttlMs: number = 300000) {
  cache.set(key, { data, expiry: Date.now() + ttlMs });
}

export function getCache<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiry) {
    cache.delete(key);
    return null;
  }
  return entry.data as T;
}

export function clearCache() {
  cache.clear();
}
