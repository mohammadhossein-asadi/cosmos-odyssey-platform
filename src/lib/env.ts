export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  SITE_URL: process.env.SITE_URL || "https://cosmos-odyssey-platform.vercel.app",
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
};
