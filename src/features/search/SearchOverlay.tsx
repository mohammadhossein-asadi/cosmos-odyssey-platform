"use client";

import { useState, useEffect } from "react";
import { searchIndex } from "@/lib/search-index";
import { SearchResult } from "@/types/common";
import Link from "next/link";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query.length > 1) {
      setResults(searchIndex(query));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 bg-surface-primary border border-border-default rounded-xl shadow-cosmic animate-scale-in">
        <div className="flex items-center gap-3 p-4 border-b border-border-default">
          <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search planets, stars, missions..."
            className="flex-1 bg-transparent text-text-primary outline-none"
          />
          <kbd className="px-2 py-0.5 text-xs bg-surface-glass rounded text-text-muted">ESC</kbd>
        </div>

        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto p-2">
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.href}
                onClick={onClose}
                className="block px-4 py-3 rounded-lg hover:bg-surface-glass transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text-primary">{result.title}</span>
                  <span className="text-xs text-text-muted capitalize">{result.type}</span>
                </div>
                <p className="text-xs text-text-secondary mt-1 line-clamp-1">{result.description}</p>
              </Link>
            ))}
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="p-8 text-center text-text-muted text-sm">No results found</div>
        )}
      </div>
    </div>
  );
}

export { SearchOverlay };
