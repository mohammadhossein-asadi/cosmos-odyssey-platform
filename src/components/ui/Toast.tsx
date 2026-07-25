"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Toast {
  id: string;
  message: string;
  type?: "info" | "success" | "error";
}

interface ToastContextType {
  addToast: (message: string, type?: Toast["type"]) => void;
}

const ToastContext = createContext<ToastContextType>({ addToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: Toast["type"] = "info") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "px-4 py-3 rounded-lg shadow-lg text-sm animate-slide-up",
              toast.type === "success" && "bg-aurora-500 text-white",
              toast.type === "error" && "bg-nebula-500 text-white",
              toast.type === "info" && "bg-plasma-500 text-white"
            )}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
