import { Component, OnInit } from "@angular/core";
import { ToggleService } from "../toggle.service";
import { ProductCartService } from "../product-cart.service";
import { Product } from "../product";

@Component({
  selector: "app-sidebar-cart",
  templateUrl: "./sidebar-cart.component.html",
  styleUrls: ["./sidebar-cart.component.css"]
})
export class SidebarCartComponent implements OnInit {
  isCartOpen = false;
  items: object;

  constructor(
    private ToggleService: ToggleService,
    private ProductCartService: ProductCartService
  ) {}

  ngOnInit() {
    this.ToggleService.cartChange.subscribe(isCartOpen => {
      this.isCartOpen = isCartOpen;
    });
    this.items = this.ProductCartService.getProductCarts();
  }

  closeSidebar() {
    this.ToggleService.cartToggle();
  }

  itemCount = this.ProductCartService.getProductCartCount();
}
