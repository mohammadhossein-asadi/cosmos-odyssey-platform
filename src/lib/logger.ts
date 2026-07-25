type LogLevel = "debug" | "info" | "warn" | "error";

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const currentLevel = process.env.NODE_ENV === "development" ? "debug" : "warn";

function shouldLog(level: LogLevel): boolean {
  return LOG_LEVELS[level] >= LOG_LEVELS[currentLevel as LogLevel];
}

export const logger = {
  debug: (...args: unknown[]) => shouldLog("debug") && console.debug("[DEBUG]", ...args),
  info: (...args: unknown[]) => shouldLog("info") && console.info("[INFO]", ...args),
  warn: (...args: unknown[]) => shouldLog("warn") && console.warn("[WARN]", ...args),
  error: (...args: unknown[]) => shouldLog("error") && console.error("[ERROR]", ...args),
};
