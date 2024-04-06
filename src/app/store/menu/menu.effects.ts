import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
// Actions
import { MenuDetails } from '../../models/menu-details.models';
import { MenuItems } from '../../models/menu.models';
import { MenuService } from '../../services/menu/menu.service';
import * as MenuActions from './menu.actions';

@Injectable()
export class MenuEffects {
  private actions = inject(Actions);
  private menu: MenuService = inject(MenuService);

  loadMenuItems = createEffect(() =>
    this.actions.pipe(
      ofType(MenuActions.loadMenuItems),
      switchMap(() =>
        from(this.menu.getMenu()).pipe(
          map((menuItems: MenuItems) =>
            MenuActions.loadMenuItemsSuccess({ menuItems })
          )
        )
      )
    )
  );
  loadMenuDetailsItems = createEffect(() =>
    this.actions.pipe(
      ofType(MenuActions.loadMenuItems),
      switchMap(() =>
        from(this.menu.getMenuDetails()).pipe(
          map((menuDetails: MenuDetails) =>
            MenuActions.loadMenuDetailsSuccess({ menuDetails })
          )
        )
      )
    )
  );
}
