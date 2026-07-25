export function fuzzySearch(query: string, items: { name: string; [key: string]: unknown }[]): typeof items {
  const lowerQuery = query.toLowerCase();
  return items
    .map((item) => ({
      item,
      score: calculateScore(lowerQuery, item.name.toLowerCase()),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.item);
}

function calculateScore(query: string, target: string): number {
  if (target.includes(query)) return 100;

  let queryIndex = 0;
  let score = 0;
  let consecutive = 0;

  for (let i = 0; i < target.length && queryIndex < query.length; i++) {
    if (target[i] === query[queryIndex]) {
      queryIndex++;
      consecutive++;
      score += consecutive * 10;
    } else {
      consecutive = 0;
    }
  }

  return queryIndex === query.length ? score : 0;
}
