import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { MenuEffects } from './store/menu/menu.effects';
import { menuReducer } from './store/menu/menu.reducer';
import { NavbarEffects } from './store/navbar/navbar.effects';
import { navbarReducer } from './store/navbar/navbar.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    provideStore({
      menu: menuReducer,
      navbar: navbarReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'Menu Store DevTools',
    }),
    provideEffects(MenuEffects, NavbarEffects),
  ],
};
