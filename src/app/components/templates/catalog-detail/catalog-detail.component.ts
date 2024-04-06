import { CommonModule, IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import {
  DataDrinks
} from '../../../models/menu-details.models';
import { AlertComponent } from '../../shared/molecules/alert/alert.component';
import { ImageCatalogComponent } from '../../shared/molecules/image-catalog/image-catalog.component';

@Component({
  selector: 'CatalogDetail',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    AlertComponent,
    ImageCatalogComponent,
  ],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        width: 100,
      },
    },
  ],
  template: `
    @if(drinks.length > ZERO_DRINKS()) {
    <div class="grid grid-cols-3 justify-center mt-10 gap-y-5 items-start">
      @for(drink of drinks; track drink.id) {
      <ImageCatalog
        [img]="drink.attributes.img"
        [text]="drink.attributes.name"
        [textOrientation]="'down'"
        [size]="'200'"
        [sizeContainer]="'52'"
        [customClass]="'min-w-40 min-h-40 w-40 max-w-40 h-40 max-h-40'"
      />
      }
    </div>
    } @else {
    <div class="flex items-center w-[30rem] h-1/5">
      <Alert
        class="flex-grow"
        [title]="'No Drinks Available'"
        [message]="'Sorry, we don´t have this menu available'"
      />
    </div>

    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogDetailComponent {
  ZERO_DRINKS = signal<number>(0);
  @Input() drinks: DataDrinks[] = [];
}
