import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavbarData } from '../../../../models/navbar.models';
import { selectNavbar } from '../../../../store/navbar/navbar.selectors';
import { LogoComponent } from '../../atom/logo/logo.component';

@Component({
  selector: 'Navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  navbarItems = signal<NavbarData[]>([]);

  store = inject(Store);

  ngAfterViewInit(): void {
    this.onListenNavbar();
  }

  /**
   * Listens to the menu items from the store and sets them in the component.
   */
  onListenNavbar = () => {
    this.store.select(selectNavbar).subscribe((navbarItems) => {
      if (!navbarItems.isLoading) {
        this.navbarItems.set(navbarItems.navbarItems);
      }
    });
  };
}
