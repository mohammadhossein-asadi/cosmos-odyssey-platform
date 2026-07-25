import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AlertProps {
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
}

function Alert({ children, variant = "info", title }: AlertProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border text-sm",
        variant === "info" && "bg-plasma-500/10 border-plasma-500/30 text-plasma-300",
        variant === "success" && "bg-aurora-500/10 border-aurora-500/30 text-aurora-400",
        variant === "warning" && "bg-star-500/10 border-star-500/30 text-star-400",
        variant === "error" && "bg-nebula-500/10 border-nebula-500/30 text-nebula-400"
      )}
      role="alert"
    >
      {title && <div className="font-semibold mb-1">{title}</div>}
      {children}
    </div>
  );
}

export { Alert };
