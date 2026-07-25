"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { NavLink } from "@/types/common";

interface NavigationItemProps {
  item: NavLink;
  variant?: "horizontal" | "vertical";
}

function NavigationItem({ item, variant = "horizontal" }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        "hover:bg-surface-glass",
        isActive
          ? "bg-plasma-500/20 text-plasma-300 border border-plasma-500/30"
          : "text-text-secondary hover:text-text-primary",
        variant === "vertical" && "w-full"
      )}
    >
      {item.icon && <Icon name={item.icon} size={18} />}
      <span>{item.label}</span>
    </Link>
  );
}

export { NavigationItem };
