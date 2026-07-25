import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🌌</div>
        <h1 className="text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-display)]">
          Lost in Space
        </h1>
        <p className="text-text-secondary mb-6">The page you are looking for has drifted into the void.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-plasma-500 hover:bg-plasma-400 text-white transition-colors"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
}
