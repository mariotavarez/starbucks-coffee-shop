import { MenuDetails } from "../../models/menu-details.models";
import { MenuItems } from "../../models/menu.models";

export interface MenuEntity {
  menuItems: MenuItems;
  menuDetails: MenuDetails;
}