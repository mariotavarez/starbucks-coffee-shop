import {
  CommonModule,
  IMAGE_CONFIG,
  NgClass,
  NgOptimizedImage,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'ImageCatalog',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        width: 100,
      },
    },
  ],
  template: `
    <div
      class="flex m-4 gap-1 items-center"
      [ngClass]="textOrientation === 'down' ? 'flex-col' : 'flex-row'"
    >
      <div
        (click)="onClick.emit()"
        class="rounded-full flex justify-center items-center overflow-hidden cursor-pointer"
        [ngClass]="customClass"
      >
        <img
          [width]="size"
          [height]="size"
          placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABoDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwYIBf/EACsQAAEEAQMDAwIHAAAAAAAAAAECAwQRBQASIQYHMRNBcRQiFlFSYXKBov/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABwRAAICAgMAAAAAAAAAAAAAAAECABESIQMxQf/aAAwDAQACEQMRAD8A0Vlc3GxzyI6kPyJa0FxMeM3vXsBrcrwlCb4tRA1E9S90WMVjZchprFmQ2g+lHdyza3Vr9h6bIWfP7j5GqLqpmEzm8FMmNtKRJfONeQ4m0uoWhakBQ8HatAIvxuVXk65+KUrC5rNfiHC4DG4hDyU4p6JRdkIPncgC7Hv80BxZlr8iCo20J+kusO5M3qyJknCiZDlONwzCdYWxGpagSWyBW8AKNkqNBV2NaQN2a5Hto0w0zJOZnHJyWdiZhl7OuuQ/p45aMdj6Z/ahd1yOB/V2b0ljxoQUO7izBtgSY7jNE9KSJaR9+PcanD+LawV/436NOshKOXiJaSTCWlNOoUR4Xak2PYp5q+fjTiUhQKVpCkngpI4I/LUZjmcbh4AxOdxj5RGKm2H24jjzbzO4+ny2DRCaBSqjY4sUdSyEsGEzcZLjD3oFqWnuFiGSr1ILSpCg5u3biG3QLNk8BQ8/qHxp3GpfHMImZuFIx2Odg4qC08EqdZLJeccCR9rZpQACTalAXYAvmqjWiiocaYCp/9k="
          [placeholderConfig]="{ blur: true }"
          ngSrc="{{ img }}"
          alt="{{ img }}"
          [ngClass]="classContainer()"
          loading="lazy"
        />
      </div>
      <p
        [ngClass]="textOrientation === 'down' ? 'text-center' : 'ml-2'"
         class="text-gray-900 dark:text-gray-900 text-[20px] max-w-[200px] text-pretty"
      >
        {{ text }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCatalogComponent {
  @Input() img = '';

  @Input() text = '';

  @Input() textOrientation: 'down' | 'right' = 'down';

  @Input() size = '';

  @Output() onClick = new EventEmitter<void>();

  @Input() customClass = ''

  @Input() set sizeContainer(value: string) {
    if (value === '') return;
    this.updateSizeClasses(value);
  }

  classContainer = signal({});

  /**
   * Updates the size classes of the image catalog component.
   */
  private updateSizeClasses = (value: string): void => {
    this.classContainer.set({
      [`w-${value}`]: true,
      [`min-w-${value}`]: true,
      [`h-${value}`]: true,
      [`min-h-${value}`]: true,
      'overflow-hidden': true,
      'rounded-full': true,
    });
  };
}
