import { Component, OnInit, Input, HostListener } from "@angular/core";
import { ToggleService } from "../toggle.service";
import { ProductCartService } from "../product-cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  itemCount: number = 0;
  constructor(
    private ToggleService: ToggleService,
    private ProductCartService: ProductCartService
  ) {}

  ngOnInit() {
    this.ProductCartService.cartChange.subscribe(isCartOpen => {
      this.itemCount = this.ProductCartService.getProductCartCount();
    });
  }

  clickCheckout() {
    this.ToggleService.checkoutToggle();
  }

  clickCart() {
    this.ToggleService.cartToggle();
  }
}
