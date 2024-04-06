export interface Navbar {
  data: NavbarData[];
  meta: MetaNavbar;
}

interface MetaNavbar {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface NavbarData {
  id: number;
  attributes: NavbarOptions;
}

export interface NavbarOptions {
  name: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
