export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function formatCompact(num: number): string {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(num);
}

export function formatWithCommas(num: number): string {
  return num.toLocaleString("en-US");
}

export function padZero(num: number, length: number = 2): string {
  return num.toString().padStart(length, "0");
}
