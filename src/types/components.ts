import { ReactNode } from "react";

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export interface PageProps {
  children: ReactNode;
}

export interface WithClassName {
  className?: string;
}
