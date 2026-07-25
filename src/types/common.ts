export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  href: string;
  icon?: string;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export type SortDirection = "asc" | "desc";

export interface SortOption {
  field: string;
  direction: SortDirection;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  children?: NavLink[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
