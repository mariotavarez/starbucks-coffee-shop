import { Routes } from '@angular/router';
import { MenuComponent } from './components/pages/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    data: { title: 'Homepage | Starbucks' },
  },
  {
    path: 'menu/:id',
    loadComponent: () =>
      import('./components/pages/menu-details/menu-details.component').then(
        (m) => m.MenuDetailsComponent
      ),
    data: { animation: 'openClosePage' },
    children: [
      {
        path: 'product/:id',
        loadChildren: () =>
          import('./components/pages/products/product.routes').then(
            (m) => m.productRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/pages/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
