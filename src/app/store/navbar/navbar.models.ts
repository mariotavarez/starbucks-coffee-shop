import { NavbarData } from "../../models/navbar.models";

export interface NavbarEntity {
  navbarItems: NavbarData[];
  subNavbarItems: NavbarData[];
}