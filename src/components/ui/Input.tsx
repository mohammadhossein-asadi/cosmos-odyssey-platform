import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-text-secondary mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full h-10 px-3 rounded-lg bg-surface-secondary border border-border-default",
            "text-text-primary placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-plasma-500 focus:border-transparent",
            "transition-all duration-200",
            error && "border-nebula-500 focus:ring-nebula-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-nebula-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input, type InputProps };
