"use client";

function SearchTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-glass border border-border-default text-text-muted hover:text-text-secondary transition-colors text-sm"
      aria-label="Open search"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span className="hidden sm:inline">Search</span>
      <kbd className="hidden sm:inline text-[10px] bg-surface-secondary rounded px-1">⌘K</kbd>
    </button>
  );
}

export { SearchTrigger };
