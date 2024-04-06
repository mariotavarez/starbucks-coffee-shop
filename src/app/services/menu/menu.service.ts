import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MenuItems } from '../../models/menu.models';
import { MenuDetails } from '../../models/menu-details.models';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private http = inject(HttpClient);

  /**
   * Retrieves the menu details from the server.
   * @returns {Observable<MenuItems>} An observable that emits the menu details.
   */
  getMenu = () => {
    return this.http.get<MenuItems>(
      'http://localhost:1337/api/menus?populate=*'
    );
  };

  /**
   * Retrieves the menu details from the server.
   * @returns {Observable<MenuDetails>} An observable that emits the menu details.
   */
  getMenuDetails = () => {
    return this.http.get<MenuDetails>(
      'http://localhost:1337/api/menu-details?populate=*'
    );
  };
}
