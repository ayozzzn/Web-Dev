import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input() product!: Product;

  currentImageIndex = 0;
  showGallery = false;

  getStarsArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  getStarType(star: number, rating: number): string {
    if (star <= Math.floor(rating)) return 'full';
    if (star == Math.ceil(rating) && rating % 1 !== 0) return 'half';
    return 'empty';
  }

  shareOnWhatsApp(): void {
    const text = `Check out this product: ${this.product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' - ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0 ?
      this.product.images.length - 1 :
      this.currentImageIndex - 1;
  }

  setImage(index: number): void {
    this.currentImageIndex = index;
  }

  toggleGallery(): void {
    this.showGallery = !this.showGallery;
  }

}
