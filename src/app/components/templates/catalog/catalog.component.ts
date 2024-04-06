import { CommonModule, IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuDataDetails } from '../../../models/menu.models';
import { ImageCatalogComponent } from '../../shared/molecules/image-catalog/image-catalog.component';

@Component({
  selector: 'Catalog',
  standalone: true,
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        width: 100,
      },
    },
  ],
  imports: [CommonModule, ImageCatalogComponent, NgOptimizedImage],
  template: `
    <section class="mt-10">
      <div class="grid grid-cols-2 justify-center gap-x-16 items-center">
        @for( drink of items | slice:0:15; track drink.id ) {
        <div class="flex m-4 gap-3 items-center">
          <ImageCatalog
            [img]="drink.attributes.img"
            [text]="drink.attributes.name"
            [textOrientation]="'right'"
            [size]="'200'"
            [sizeContainer]="'52'"
            [customClass]="'min-w-28 min-h-28 w-28 max-w-28 h-28 max-h-28'"
            (onClick)="navigateToMenuDetail(drink.id)"
          />
        </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  @Input() items: MenuDataDetails[] = [];

  private router = inject(Router);

  /**
   * Navigates to the menu detail page.
   *
   * @param menuDetailUri - The URI of the menu detail.
   */
  navigateToMenuDetail = (id: number) => {
    this.router.navigate([`menu/${id}`]);
  };
}
