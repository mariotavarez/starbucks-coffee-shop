import { Meta } from './menu.models';

export interface MenuDetails {
  data: DataDetails[];
  meta: Meta;
}

export interface DataDetails {
  id: number;
  attributes: AttributesDetails;
}

export interface AttributesDetails {
  name: string;
  uri: string;
  img: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  menu: Menu;
  drinks: Drinks;
}

export interface Drinks {
  data: DataDrinks[];
}

export interface DataDrinks {
  id: number;
  attributes: AttributesDrinks;
}

export interface AttributesDrinks {
  name: string;
  uri: string;
  img: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Menu {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
