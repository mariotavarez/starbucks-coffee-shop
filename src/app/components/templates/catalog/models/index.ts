export interface Items {
  id: number;
  name: string;
  url: string;
  img: string;
}

export interface Menu {
  displayOrder: number;
  name: string;
  products: any[];
  children: Child2[];
  id: string;
  uri: string;
}

export interface Child2 {
  displayOrder: number;
  name: string;
  products: Product[];
  children: Child[];
  id: string;
  uri: string;
}

export interface Child {
  displayOrder: number;
  name: string;
  products: Product[];
  children: any[];
  id: string;
  uri: string;
}

export interface Product {
  name: string;
  formCode: string;
  displayOrder: number;
  productNumber: number;
  productType: string;
  availability: string;
  assets: Assets;
  sizes: Size[];
  uri: string;
}

export interface Size {
  sizeCode: string;
}

export interface Assets {
  masterImage: MasterImage;
}

export interface MasterImage {
  uri: string;
}
