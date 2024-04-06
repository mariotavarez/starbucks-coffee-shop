import { createAction, props } from '@ngrx/store';
import { MenuItems } from '../../models/menu.models';
import { MenuDetails } from '../../models/menu-details.models';

export const loadMenuItems = createAction('[Menu] Load Menu');

export const loadMenuItemsSuccess = createAction(
  '[Menu] Load Menu Items',
  props<{ menuItems: MenuItems }>()
);

export const loadMenuDetailsSuccess = createAction(
  '[Menu] Load Menu Details',
  props<{ menuDetails: MenuDetails }>()
);
