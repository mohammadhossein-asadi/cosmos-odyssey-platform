import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

function PageContainer({ children, className, narrow = false }: PageContainerProps) {
  return (
    <main className={cn("min-h-screen pt-20 pb-12", className)}>
      <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", narrow ? "max-w-4xl" : "max-w-7xl")}>
        {children}
      </div>
    </main>
  );
}

export { PageContainer };
