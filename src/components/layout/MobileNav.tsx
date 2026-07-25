"use client";

import { useEffect } from "react";
import { Icon } from "@/components/ui/Icon";
import { allNavigation } from "@/lib/navigation";
import { NavigationItem } from "./NavigationItem";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-cosmic-900 border-l border-border-default p-4 animate-slide-in-right">
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg font-bold font-[family-name:var(--font-display)] text-text-primary">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface-glass text-text-secondary"
            aria-label="Close menu"
          >
            <Icon name="close" size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {allNavigation.map((item) => (
            <NavigationItem key={item.href} item={item} variant="vertical" />
          ))}
        </nav>
      </div>
    </div>
  );
}

export { MobileNav };
