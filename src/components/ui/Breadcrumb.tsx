import Link from "next/link";
import { BreadcrumbItem } from "@/types/common";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-text-muted">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-text-muted">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-plasma-300 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-text-secondary">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export { Breadcrumb };
