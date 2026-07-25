"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { mainNavigation } from "@/lib/navigation";
import { NavigationItem } from "./NavigationItem";
import { MobileNav } from "./MobileNav";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cosmic-900/80 backdrop-blur-md border-b border-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-plasma-400 to-cosmic-500 flex items-center justify-center">
              <Icon name="planet" size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold font-[family-name:var(--font-display)] text-text-primary">
              Cosmos Odyssey
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <NavigationItem key={item.href} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-surface-glass text-text-secondary"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </div>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
}

export { Header };
