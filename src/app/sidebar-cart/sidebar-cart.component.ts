import { Component, OnInit } from "@angular/core";
import { ToggleService } from "../toggle.service";
import { ProductCartService } from "../product-cart.service";

@Component({
  selector: "app-sidebar-cart",
  templateUrl: "./sidebar-cart.component.html",
  styleUrls: ["./sidebar-cart.component.css"]
})
export class SidebarCartComponent implements OnInit {
  isCartOpen = false;
  itemCount: number = 0;
  itemTotalPrice: number;

  constructor(
    private ToggleService: ToggleService,
    private ProductCartService: ProductCartService
  ) {}

  ngOnInit() {
    this.ProductCartService.cartChange.subscribe(() => {
      this.itemCount = this.ProductCartService.getProductCartCount();
      this.itemTotalPrice = this.ProductCartService.getProductCartTotal();
    });
    this.ToggleService.cartChange.subscribe(isCartOpen => {
      this.isCartOpen = isCartOpen;
    });
  }

  closeSidebar() {
    this.ToggleService.cartToggle();
  }

  openCheckout() {
    this.ToggleService.checkoutToggle();
    this.closeSidebar();
  }
}
