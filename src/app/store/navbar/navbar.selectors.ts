import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NAVBAR_FEATURE_KEY, NavbarState } from './navbar.reducer';

export const selectNavbarState =
  createFeatureSelector<NavbarState>(NAVBAR_FEATURE_KEY);

export const selectNavbar = createSelector(selectNavbarState, (state) => state);

export const selectNavbarIsLoading = createSelector(
  selectNavbarState,
  (state) => state.isLoading
);
