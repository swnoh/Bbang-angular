import { Component, OnInit } from "@angular/core";

import { Product } from "../product";
import { ProductCartService } from "../product-cart.service";

@Component({
  selector: "app-cart-items",
  templateUrl: "./cart-items.component.html",
  styleUrls: ["./cart-items.component.css"]
})
export class CartItemsComponent implements OnInit {
  items: object;

  constructor(private ProductCartService: ProductCartService) {}

  ngOnInit() {
    this.items = this.ProductCartService.getProductCarts();
  }
}
