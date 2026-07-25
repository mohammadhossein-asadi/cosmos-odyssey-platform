"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="border border-border-default rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(item.id)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-surface-glass transition-colors"
          >
            <span className="text-sm font-medium text-text-primary">{item.title}</span>
            <svg
              className={cn("w-4 h-4 text-text-muted transition-transform", openItems.has(item.id) && "rotate-180")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openItems.has(item.id) && (
            <div className="px-4 pb-3 text-sm text-text-secondary">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export { Accordion };
