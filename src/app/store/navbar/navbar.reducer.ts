import { Action, createReducer, on } from '@ngrx/store';

import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { NavbarData } from '../../models/navbar.models';
import * as NavbarActions from './navbar.actions';
import { NavbarEntity } from './navbar.models';

export const NAVBAR_FEATURE_KEY = 'navbar';

export interface NavbarState extends EntityState<NavbarEntity> {
  isLoading: boolean;
  navbarItems: NavbarData[];
  subNavbarItems: NavbarData[];
}

export interface NavbarPartialState {
  readonly [NAVBAR_FEATURE_KEY]: NavbarState;
}

export const navbarAdapter: EntityAdapter<NavbarEntity> =
  createEntityAdapter<NavbarEntity>();

export const initialState: NavbarState = navbarAdapter.getInitialState({
  isLoading: true,
  navbarItems: [],
  subNavbarItems: [],
});

const reducer = createReducer(
  initialState,
  on(NavbarActions.loadNavbarItems, (state, { options }) => ({
    ...state,
    navbarItems: options,
    isLoading: false,
  })),
  on(NavbarActions.loadNavbarSubItems, (state, { options }) => ({
    ...state,
    subNavbarItems: options,
    isLoading: false,
  }))
);

export function navbarReducer(state: NavbarState | undefined, action: Action) {
  return reducer(state, action);
}
