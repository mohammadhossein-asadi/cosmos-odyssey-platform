"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  label: string;
  href: string;
  category: string;
}

const commands: CommandItem[] = [
  { id: "solar", label: "Solar System", href: "/solar-system", category: "Explore" },
  { id: "travel", label: "Space Travel", href: "/space-travel", category: "Explore" },
  { id: "stars", label: "Star Explorer", href: "/star-explorer", category: "Explore" },
  { id: "encyclopedia", label: "Encyclopedia", href: "/encyclopedia", category: "Learn" },
  { id: "timeline", label: "Cosmic Timeline", href: "/cosmic-timeline", category: "Learn" },
  { id: "missions", label: "Space Missions", href: "/missions", category: "Learn" },
  { id: "blackhole", label: "Black Holes", href: "/black-hole", category: "Discover" },
  { id: "profile", label: "My Profile", href: "/profile", category: "Account" },
];

function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 bg-surface-primary border border-border-default rounded-xl shadow-cosmic animate-scale-in">
        <div className="p-3 border-b border-border-default">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command..."
            className="w-full bg-transparent text-text-primary outline-none text-sm"
          />
        </div>
        <div className="max-h-64 overflow-y-auto p-2">
          {filtered.map((cmd) => (
            <Link
              key={cmd.id}
              href={cmd.href}
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-glass transition-colors"
            >
              <span className="text-sm text-text-primary">{cmd.label}</span>
              <span className="text-xs text-text-muted">{cmd.category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export { CommandPalette };
