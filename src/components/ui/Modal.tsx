"use client";

import { useEffect, useRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg";
}

function Modal({ isOpen, onClose, title, size = "md", children, className, ...props }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={cn(
          "relative w-full bg-surface-primary border border-border-default rounded-xl shadow-cosmic animate-scale-in",
          {
            "max-w-sm": size === "sm",
            "max-w-md": size === "md",
            "max-w-lg": size === "lg",
          },
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        {...props}
      >
        {title && (
          <div className="flex items-center justify-between p-4 border-b border-border-default">
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-display)]">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-surface-glass text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function ModalFooter({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center justify-end gap-2 mt-4 pt-4 border-t border-border-default", className)} {...props}>
      {children}
    </div>
  );
}

export { Modal, ModalFooter };
