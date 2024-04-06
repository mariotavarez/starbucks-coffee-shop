import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'Alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50"
      role="alert"
    >
      <div class="flex items-center">
        <svg
          class="flex-shrink-0 w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">{{ title }}</span>
        <h3 class="text-lg font-medium">{{ title }}</h3>
      </div>
      <div class="mt-2 mb-2 text-sm w-full">
        {{ message }}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() title = '';
  @Input() message = '';
}
