export class AppError extends Error {
  code: string;
  statusCode: number;

  constructor(message: string, code: string = "UNKNOWN_ERROR", statusCode: number = 500) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}

export function handleError(error: unknown): { message: string; code: string } {
  if (error instanceof AppError) {
    return { message: error.message, code: error.code };
  }
  if (error instanceof Error) {
    return { message: error.message, code: "INTERNAL_ERROR" };
  }
  return { message: "An unexpected error occurred", code: "UNKNOWN_ERROR" };
}
