import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MENU_FEATURE_KEY, MenuState } from './menu.reducer';

export const selectMenuState =
  createFeatureSelector<MenuState>(MENU_FEATURE_KEY);

export const selectMenu = createSelector(selectMenuState, (state) => state);

export const selectMenuIsLoading = createSelector(
  selectMenuState,
  (state) => state.isLoading
);

export const selectDrinksByMenuName = (id: number) =>
  createSelector(selectMenuState, (state) => {
    return state.menuDetails.data.filter((drink) => drink.id === id);
  });
