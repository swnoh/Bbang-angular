import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NgForm } from "@angular/forms";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import { Product } from "../product";
import { ProductCartService } from "../product-cart.service";
import { ToggleService } from "../toggle.service";

const productsListQuery = gql`
  query ProductListQuery {
    products {
      id
      imagePath
      title
      description
      price
    }
  }
`;

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  selectedItem: Product;

  selectedOption1: any;
  selectedOption2: string;
  selectedPrice: number;
  optionidx: number;
  inputType: string;
  isChosen: boolean;
  setItem: object;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ProductCartService: ProductCartService,
    private ToggleService: ToggleService,
    private apollo: Apollo
  ) {
    this.selectedOption1 = [];
    this.selectedOption2 = "";
    this.selectedPrice = 0;
    this.optionidx = 0;
    this.inputType = "radio";
    this.isChosen = true;
  }

  ngOnInit() {
    this.apollo
      .watchQuery<any>({ query: productsListQuery })
      .valueChanges.subscribe(({ data, loading }) => {
        this.selectedItem = data.products.filter(
          item => item.id === this.route.snapshot.paramMap.get("id")
        )[0];
      });
  }

  handleAddCart() {
    this.setItem = {
      imagePath: this.selectedItem.imagePath,
      selectedOption1: this.selectedOption1,
      selectedOption2: this.selectedOption2,
      price: this.selectedPrice
    };
    if (this.selectedOption1.length > 0 && this.selectedPrice) {
      this.ProductCartService.setProductCarts(this.setItem);
      this.ToggleService.cartToggle();
    } else {
      this.isChosen = false;
    }
  }

  handleSelectedOption1(option: String, price: number, isCheckbox: boolean) {
    if (this.selectedOption1.indexOf(option) > -1) {
      this.selectedOption1 = this.selectedOption1.filter(opt => opt !== option);
    } else {
      isCheckbox
        ? (this.selectedOption1 = [...this.selectedOption1, option])
        : (this.selectedOption1 = option);
    }
    if (price) this.selectedPrice = price;
    this.isChosen = true;
  }

  handleSelectedOption2(option: string, price: number) {
    this.selectedOption2 = option;
    this.selectedPrice = price;
    this.isChosen = true;
  }
}
