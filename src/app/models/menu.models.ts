export interface MenuItems {
  data: Data[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Data {
  id: number;
  attributes: MenuTitle;
}

export interface MenuTitle {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  menu_details: DataDetails;
}

interface DataDetails {
  data: MenuDataDetails[];
}

export interface MenuDataDetails {
  id: number;
  attributes: MenuDetails;
}


export interface MenuDetails {
  name: string;
  uri: string;
  img: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
