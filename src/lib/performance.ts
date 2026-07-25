export function reportWebVitals(metric: { name: string; value: number; id: string }) {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Web Vitals] ${metric.name}: ${metric.value}`);
  }
}
