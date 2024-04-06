import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
// Store
import { selectDrinksByMenuName } from '../../../store/menu/menu.selectors';
// Models
import { MenuDetails } from '../../../models/menu.models';
// Components
import { CatalogDetailComponent } from '../../templates/catalog-detail/catalog-detail.component';
import { AttributesDrinks, DataDrinks, Drinks } from '../../../models/menu-details.models';

@Component({
  selector: 'MenuDetails',
  standalone: true,
  imports: [CommonModule, CatalogDetailComponent],
  templateUrl: './menu-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDetailsComponent implements OnInit {
  idMenu = 0;
  activatedRoute = inject(ActivatedRoute);
  store = inject(Store);
  drinks = signal<DataDrinks[]>([]);
  menuTitle = signal<string>('');

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idMenu = Number(params.get('id'));

      const drinks = this.getDrinkDetailsById(this.idMenu);
    });
  }

  getDrinkDetailsById = async (id: number) => {
    const drinks = await firstValueFrom(
      this.store.select(selectDrinksByMenuName(id))
    );

    this.menuTitle.set(drinks[0].attributes.name);

    this.drinks.set(drinks[0].attributes.drinks.data);

    return drinks;
  };
}
