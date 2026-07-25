"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-display)]">
          System Malfunction
        </h1>
        <p className="text-text-secondary mb-6">Something went wrong during navigation.</p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg bg-plasma-500 hover:bg-plasma-400 text-white transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
