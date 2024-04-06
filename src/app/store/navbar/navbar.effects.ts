import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
// Actions
import { MenuDetails } from '../../models/menu-details.models';
import { MenuItems } from '../../models/menu.models';
import { MenuService } from '../../services/menu/menu.service';
import * as NavbarActions from './navbar.actions';
import { NavbarService } from '../../services/navbar/navbar.service';
import { Navbar } from '../../models/navbar.models';

@Injectable()
export class NavbarEffects {
  private actions = inject(Actions);
  private navbar: NavbarService = inject(NavbarService);

  loadNavbarItems = createEffect(() =>
    this.actions.pipe(
      ofType(NavbarActions.loadNavbar),
      switchMap(() =>
        from(this.navbar.getNavbarItems()).pipe(
          map((navbar: Navbar) =>
            NavbarActions.loadNavbarItems({ options: navbar.data })
          )
        )
      )
    )
  );
  loadSubNavbarItems = createEffect(() =>
    this.actions.pipe(
      ofType(NavbarActions.loadNavbar),
      switchMap(() =>
        from(this.navbar.getSubNavbarItems()).pipe(
          map((navbar: Navbar) =>
            NavbarActions.loadNavbarSubItems({ options: navbar.data })
          )
        )
      )
    )
  );
}
