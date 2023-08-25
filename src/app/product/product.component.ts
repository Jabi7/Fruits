import { Component } from '@angular/core';

interface Product {
  name: string;
  totalOrders: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [
    { name: 'Apple', totalOrders: 5 },
    { name: 'Banana', totalOrders: 2 },
    { name: 'Cherry', totalOrders: 8 }
  ];

  sortProducts() {
    this.products.sort((a, b) => a.totalOrders - b.totalOrders);
  }

  randomizeProducts() {
    for (let i = this.products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.products[i], this.products[j]] = [this.products[j], this.products[i]];
    }
  }
}
