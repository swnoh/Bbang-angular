import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable()
export class ToggleService {
  isCheckoutOpen: boolean = false;
  isCartOpen: boolean = false;

  @Output()
  checkoutChange: EventEmitter<boolean> = new EventEmitter();
  cartChange: EventEmitter<boolean> = new EventEmitter();

  checkoutToggle() {
    this.isCheckoutOpen = !this.isCheckoutOpen;
    this.checkoutChange.emit(this.isCheckoutOpen);
  }

  cartToggle() {
    this.isCartOpen = !this.isCartOpen;
    this.cartChange.emit(this.isCartOpen);
  }
}
