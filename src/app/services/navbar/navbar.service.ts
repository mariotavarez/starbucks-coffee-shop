import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
// Models
import { Navbar } from '../../models/navbar.models';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private http = inject(HttpClient);

  /**
   * Retrieves the navbar items from the server.
   * @returns An Observable that emits the navbar items.
   */
  getNavbarItems = (): Observable<Navbar> => {
    return this.http.get<Navbar>('http://localhost:1337/api/navbar-items');
  };

  /**
   * Retrieves the sub-navbar items from the server.
   * @returns An Observable that emits the sub-navbar items.
   */
  getSubNavbarItems = (): Observable<Navbar> => {
    return this.http.get<Navbar>('http://localhost:1337/api/sub-navbar-items');
  };
}
