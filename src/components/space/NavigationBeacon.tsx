"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationBeaconProps {
  href: string;
  label: string;
  color?: string;
  className?: string;
}

function NavigationBeacon({ href, label, color = "#6c5ce7", className }: NavigationBeaconProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 p-3 rounded-lg border border-border-default hover:border-plasma-500/30 transition-all",
        className
      )}
    >
      <div
        className="w-3 h-3 rounded-full group-hover:scale-125 transition-transform"
        style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}60` }}
      />
      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
        {label}
      </span>
    </Link>
  );
}

export { NavigationBeacon };
