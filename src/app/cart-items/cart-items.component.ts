import { Component, OnInit } from "@angular/core";

import { ProductCartService } from "../product-cart.service";
import { ToggleService } from "../toggle.service";

@Component({
  selector: "app-cart-items",
  templateUrl: "./cart-items.component.html",
  styleUrls: ["./cart-items.component.css"]
})
export class CartItemsComponent implements OnInit {
  items: object = [];

  constructor(
    private ProductCartService: ProductCartService,
    private ToggleService: ToggleService
  ) {}

  ngOnInit() {
    this.ProductCartService.cartChange.subscribe(() => {
      this.items = this.ProductCartService.getProductCarts();
    });
  }

  removeItem(selectedItem) {
    this.ProductCartService.removeProductCart(selectedItem);
  }
}
