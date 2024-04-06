import { Action, createReducer, on } from '@ngrx/store';

import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { MenuItems, Meta } from '../../models/menu.models';
import * as MenuActions from './menu.actions';
import { MenuEntity } from './menu.models';
import { MenuDetails } from '../../models/menu-details.models';

export const MENU_FEATURE_KEY = 'menu';

export interface MenuState extends EntityState<MenuEntity> {
  isLoading: boolean;
  menuItems: MenuItems;
  menuDetails: MenuDetails;
}

export interface MenuPartialState {
  readonly [MENU_FEATURE_KEY]: MenuState;
}

export const menuAdapter: EntityAdapter<MenuEntity> =
  createEntityAdapter<MenuEntity>();

export const initialState: MenuState = menuAdapter.getInitialState({
  isLoading: true,
  menuItems: {
    data: [],
    meta: {} as Meta,
  },
  menuDetails: {
    data: [],
    meta: {} as Meta,
  },
});

const reducer = createReducer(
  initialState,
  on(MenuActions.loadMenuItemsSuccess, (state, { menuItems }) => ({
    ...state,
    menuItems,
    isLoading: false,
  })),
  on(MenuActions.loadMenuDetailsSuccess, (state, { menuDetails }) => ({
    ...state,
    menuDetails,
    isLoading: false,
  }))
);

export function menuReducer(state: MenuState | undefined, action: Action) {
  return reducer(state, action);
}
