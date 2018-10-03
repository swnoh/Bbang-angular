import { Component, OnInit } from "@angular/core";
import { ProductCartService } from "../product-cart.service";

@Component({
  selector: "app-modal-checkout",
  templateUrl: "./modal-checkout.component.html",
  styleUrls: ["./modal-checkout.component.css"]
})
export class ModalCheckoutComponent implements OnInit {
  itemCount: number = 0;
  itemTotalPrice: number = 0;

  constructor(private ProductCartService: ProductCartService) {}

  ngOnInit() {
    this.ProductCartService.cartChange.subscribe(() => {
      this.itemCount = this.ProductCartService.getProductCartCount();
      this.itemTotalPrice = this.ProductCartService.getProductCartTotal();
    });
  }
}
