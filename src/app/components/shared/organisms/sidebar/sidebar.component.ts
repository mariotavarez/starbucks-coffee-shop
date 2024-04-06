import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Data } from '../../../../models/menu.models';
import { MenuService } from '../../../../services/menu/menu.service';
import { selectMenu } from '../../../../store/menu/menu.selectors';

@Component({
  selector: 'Sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside
      id="default-sidebar"
      class="mx-20 my-16 w-64 h-auto transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-white">
        <ul class="space-y-2 font-medium">
          @for (section of menuItems(); track section.id) {
          <li>
            <p
              class="flex items-center p-2 font-semibold text-lg text-gray-900 rounded-lg dark:text-gray-900 group"
            >
              <span class="ms-3">{{ section.attributes.name }}</span>
            </p>
          </li>
          @for (item of section.attributes.menu_details.data; track item.id) {
          <li>
            <a
              href="{{ item.attributes.uri }}"
              class="flex items-center p-2 font-normal text-gray-500 rounded-lg dark:text-gray-500 group"
            >
              <span class="ms-3">{{ item.attributes.name }}</span>
            </a>
          </li>
          } }
        </ul>
      </div>
    </aside>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit {
  menuService = inject(MenuService);
  menuItems = signal<Data[]>([]);
  store = inject(Store);

  ngAfterViewInit(): void {
    this.onListenMenuItems();
  }

  /**
   * Listens to the menu items from the store and sets them in the component.
   */
  onListenMenuItems = () => {
    this.store.select(selectMenu).subscribe((menuItems) => {
      if (!menuItems.isLoading) {
        this.menuItems.set(menuItems.menuItems.data);
      }
    });
  };
}
