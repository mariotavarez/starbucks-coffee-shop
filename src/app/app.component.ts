import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Components
import { Store } from '@ngrx/store';
import { NavbarComponent } from './components/shared/organisms/navbar/navbar.component';
import { SidebarComponent } from './components/shared/organisms/sidebar/sidebar.component';
import { SubNavbarComponent } from './components/shared/organisms/sub-navbar/sub-navbar.component';
import { loadMenuItems } from './store/menu/menu.actions';
import { loadNavbar } from './store/navbar/navbar.actions';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    SubNavbarComponent,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  store = inject(Store);

  constructor() {
    this.store.dispatch(loadNavbar());
    this.store.dispatch(loadMenuItems());
  }
}
