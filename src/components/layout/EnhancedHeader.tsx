"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SearchOverlay } from "@/features/search/SearchOverlay";

const navItems = [
  { label: "Solar System", href: "/solar-system", icon: "🪐" },
  { label: "Stars", href: "/star-catalog", icon: "⭐" },
  { label: "Galaxies", href: "/galaxy-explorer", icon: "🌌" },
  { label: "Nebulae", href: "/nebula-explorer", icon: "☁️" },
  { label: "Black Holes", href: "/black-hole-visualizer", icon: "🕳️" },
  { label: "Exoplanets", href: "/exoplanet-explorer", icon: "🌍" },
];

function EnhancedHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-cosmic-900 border-border-default shadow-lg"
          : "bg-cosmic-900/90 border-border-default/50"
      )}>
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-plasma-500 to-star-400 flex items-center justify-center">
              <span className="text-sm">✦</span>
            </div>
            <span className="text-sm font-bold font-[family-name:var(--font-display)] text-text-primary hidden sm:block">
              Cosmos Odyssey
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "bg-plasma-500/20 text-plasma-300"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-glass"
                )}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSearch(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-glass border border-border-default text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline text-[9px] bg-surface-secondary px-1 rounded">⌘K</kbd>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface-glass text-text-secondary"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-cosmic-900 border-l border-border-default p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-text-primary">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-text-muted">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all",
                    pathname === item.href
                      ? "bg-plasma-500/20 text-plasma-300"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-glass"
                  )}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <SearchOverlay isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
}

export { EnhancedHeader };
