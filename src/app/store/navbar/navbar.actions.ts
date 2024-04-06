import { createAction, props } from '@ngrx/store';
import { NavbarData } from '../../models/navbar.models';

export const loadNavbar = createAction(
  '[Navbar] Load Navbar and Sub Navbar Items'
);

export const loadNavbarItems = createAction(
  '[Navbar] Load Navbar Items',
  props<{ options: NavbarData[] }>()
);

export const loadNavbarSubItems = createAction(
  '[Navbar] Load Sub Navbar Details',
  props<{ options: NavbarData[] }>()
);
