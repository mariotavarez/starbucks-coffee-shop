import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  inject,
} from '@angular/core';

@Directive({
  selector: '[intersected]',
  standalone: true,
})
export class IntersectedDirective implements OnInit, AfterViewInit {
  @Output() triggerReached = new EventEmitter<boolean>();

  element: ElementRef = inject(ElementRef);

  observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    this.setupObserver();
  }

  ngAfterViewInit(): void {
    if (this.observer) {
      this.observer.observe(this.element.nativeElement);
    }
  }

  /**
   * Sets up the IntersectionObserver to track when an element enters the viewport.
   */
  setupObserver = () => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.triggerReached.emit(true);
      }
    }, options);
  };
}
