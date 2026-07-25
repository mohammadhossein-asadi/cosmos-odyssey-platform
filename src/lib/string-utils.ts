export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(str: string): string {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
}

export function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[\s_]+/g, "-");
}

export function truncateWords(str: string, maxWords: number): string {
  const words = str.split(" ");
  if (words.length <= maxWords) return str;
  return words.slice(0, maxWords).join(" ") + "...";
}
