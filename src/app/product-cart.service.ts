import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductCartService {
  items = [];
  cartStatus: boolean = false;

  @Output()
  cartChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.items = [];
  }

  getProductCarts() {
    return this.items;
  }

  setProductCarts(item): void {
    this.items.push(item);
    this.cartChange.emit(!this.cartStatus);
  }

  getProductCartCount(): number {
    return this.items.length;
  }

  getProductCartTotal(): number {
    return this.items
      .map(product => {
        let priceArr = 0;
        return (priceArr += +product.price);
      })
      .reduce((a, b) => a + b, 0);
  }

  removeProductCart(selectItem): void {
    this.items = this.items.filter(item => item.selectedOption1 !== selectItem);
    this.cartChange.emit(!this.cartStatus);
  }
}
