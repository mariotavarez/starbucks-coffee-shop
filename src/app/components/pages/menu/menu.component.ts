import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { IntersectedDirective } from '../../../directives/intersection-observer.directive';
import { HeaderComponent } from '../../shared/molecules/header/header.component';
import { CatalogComponent } from '../../templates/catalog/catalog.component';

import { Store } from '@ngrx/store';
import { MenuState } from '../../../store/menu/menu.reducer';
import {
  selectMenu
} from '../../../store/menu/menu.selectors';
import { SpinnerComponent } from '../../shared/atom/spinner/spinner.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CatalogComponent,
    IntersectedDirective,
    SpinnerComponent,
  ],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  MAX_ITEMS = 1;
  store = inject(Store);
  menuState = signal<MenuState>({} as MenuState);

  ngOnInit(): void {
    this.onListenMenu();
  }

  /**
   * Listens to the menu selection and sets the menu state.
   */
  onListenMenu = () => {
    const subscription = this.store
      .select(selectMenu)
      .subscribe((menuItems) => {
        this.menuState.set(menuItems);
        subscription.unsubscribe();
      });
  };

  /**
   * Increases the maximum number of items.
   */
  increaseMaxItems = (): void => {
    this.MAX_ITEMS += 1;
  };
}
