"use client";

import { ReactNode } from "react";

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
}

export { PageTransition };
