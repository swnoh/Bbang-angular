import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  selectedItem: Product;

  selectedOption1: object;
  selectedOption2: string;
  selectedPrice: number;
  optionidx: number;
  inputType: string;
  isChosen: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) {
    this.selectedOption1 = null;
    this.selectedOption2 = "";
    this.selectedPrice = 0;
    this.optionidx = 0;
    this.inputType = "radio";
    this.isChosen = true;
  }

  ngOnInit() {
    this.getSelectedProduct();
  }

  getSelectedProduct(): void {
    this.productService.getProducts().subscribe(data => {
      this.selectedItem = data.filter(
        item => item.id === this.route.snapshot.paramMap.get("id")
      )[0];
    });
  }

  isString(value) {
    return typeof value !== "string";
  }

  // handleSelectedOption = event => {
  //   let selections = event.target.dataset;
  //   let checked = event.target.childNodes[0].checked;
  //   let inputType = event.target.childNodes[0].type;
  //   this.setState(prevState => {
  //     return {
  //       selectedOption1:
  //         selections.option1 !== undefined
  //           ? checked
  //             ? inputType === "radio"
  //               ? selections.option1
  //               : [...this.state.selectedOption1, selections.option1]
  //             : this.state.selectedOption1.filter(
  //                 selectedOption1 => selectedOption1 !== selections.option1
  //               )
  //           : prevState.selectedOption1,
  //       selectedOption2:
  //         selections.option2 !== undefined
  //           ? selections.option2
  //           : prevState.selectedOption2,
  //       selectedPrice:
  //         selections.price !== undefined
  //           ? selections.price
  //           : prevState.selectedPrice,
  //       optionidx:
  //         selections.optionidx !== undefined
  //           ? parseInt(selections.optionidx, 10)
  //           : prevState.optionidx,
  //       inputType:
  //         inputType !== undefined && selections.option1 !== undefined
  //           ? inputType
  //           : prevState.inputType,
  //       isChosen: true
  //     };
  //   });
  // };
}
