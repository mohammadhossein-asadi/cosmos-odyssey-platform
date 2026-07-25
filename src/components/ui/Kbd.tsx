import { cn } from "@/lib/utils";

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono bg-surface-secondary border border-border-default rounded text-text-muted",
        className
      )}
    >
      {children}
    </kbd>
  );
}

export { Kbd };
