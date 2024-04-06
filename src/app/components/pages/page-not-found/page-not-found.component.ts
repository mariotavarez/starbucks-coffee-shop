import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CoffeeComponent } from '../../../icons/coffee/coffee.component';

@Component({
  selector: 'NotFound',
  standalone: true,
  imports: [CommonModule, CoffeeComponent],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements AfterViewInit {
  @ViewChild('coffeeCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private erasedAreas: { x: number; y: number; radius: number }[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.drawCoffee();
  }

  drawCoffee(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    const texts = ["You're tea-riffic!"];
    const fontSize = 30;
    const font = `${fontSize}px Arial`;
    this.ctx.font = font;

    for (let i = 0; i < texts.length; i++) {
      const x = 0.43509421470671588 * (canvas.width - 200);
      const y = 0.43509421470671588 * (canvas.height - fontSize) + fontSize;

      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      this.ctx.fillText("You're tea-riffic!", x, y);
    }
  }

  eraseCoffee(event: MouseEvent): void {
    const canvas = this.canvasRef.nativeElement;
    const bounds = canvas.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;
    const radius = 10;
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.beginPath();
    this.ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();

    this.erasedAreas.push({ x: mouseX, y: mouseY, radius });
  }

  restoreErasedAreas(): void {
    this.erasedAreas.forEach(({ x, y, radius }) => {
      this.ctx.save();
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  clearCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
