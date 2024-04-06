import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectNavbar } from '../../../../store/navbar/navbar.selectors';
import { NavbarData } from '../../../../models/navbar.models';

@Component({
  selector: 'SubNavbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubNavbarComponent {
  store = inject(Store);
  subNavbarItems = signal<NavbarData[]>([]);

  ngAfterViewInit(): void {
    this.onListenSubNavbar();
  }

  /**
   * Listens to the menu items from the store and sets them in the component.
   */
  onListenSubNavbar = () => {
    this.store.select(selectNavbar).subscribe((subNavbarItems) => {
      if (!subNavbarItems.isLoading) {
        this.subNavbarItems.set(subNavbarItems.subNavbarItems);
      }
    });
  };
}
