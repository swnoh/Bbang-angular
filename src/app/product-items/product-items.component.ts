import { Component, OnInit } from "@angular/core";

import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-items",
  templateUrl: "./product-items.component.html",
  styleUrls: ["./product-items.component.css"]
})
export class ProductItemsComponent implements OnInit {
  items: Product[];
  selectedId: string;

  constructor(private productService: ProductService) {
    this.items = [];
    this.selectedId = "";
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.items = data;
    });
  }

  onSelect(item): void {
    this.selectedId = item.id;
  }
}
