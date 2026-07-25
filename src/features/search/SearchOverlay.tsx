"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchItems = [
  { title: "Solar System Explorer", href: "/solar-system", category: "Explore", icon: "🪐" },
  { title: "Space Travel", href: "/space-travel", category: "Experience", icon: "🚀" },
  { title: "Star Catalog", href: "/star-catalog", category: "Discover", icon: "⭐" },
  { title: "Star Chart", href: "/star-chart", category: "Discover", icon: "🗺️" },
  { title: "Galaxy Explorer", href: "/galaxy-explorer", category: "Discover", icon: "🌌" },
  { title: "Galaxy Mapper", href: "/galaxy-mapper", category: "Discover", icon: "🔍" },
  { title: "Nebula Explorer", href: "/nebula-explorer", category: "Discover", icon: "☁️" },
  { title: "Nebula Viewer", href: "/nebula-viewer", category: "Experience", icon: "🎨" },
  { title: "Black Hole Visualizer", href: "/black-hole-visualizer", category: "Experience", icon: "🕳️" },
  { title: "Exoplanet Explorer", href: "/exoplanet-explorer", category: "Discover", icon: "🌍" },
  { title: "Constellation Map", href: "/constellation-map", category: "Learn", icon: "✨" },
  { title: "Cosmic Timeline", href: "/cosmic-timeline", category: "Learn", icon: "⏳" },
  { title: "Space Missions", href: "/missions", category: "Learn", icon: "🛰️" },
  { title: "My Profile", href: "/profile", category: "Account", icon: "🧑‍🚀" },
];

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems;

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 bg-surface-primary border border-border-default rounded-xl shadow-cosmic animate-scale-in overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-border-default">
          <svg className="w-5 h-5 text-text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search modules, planets, stars..."
            className="flex-1 bg-transparent text-text-primary text-sm outline-none placeholder:text-text-muted"
          />
          <kbd className="text-[10px] bg-surface-secondary px-2 py-0.5 rounded text-text-muted">ESC</kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-text-muted text-sm">No results found</div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-glass transition-colors"
              >
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1">
                  <div className="text-sm text-text-primary">{item.title}</div>
                  <div className="text-[10px] text-text-muted">{item.category}</div>
                </div>
                <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))
          )}
        </div>

        <div className="p-3 border-t border-border-default text-center">
          <span className="text-[10px] text-text-muted">
            {filtered.length} items • Press ESC to close
          </span>
        </div>
      </div>
    </div>
  );
}
