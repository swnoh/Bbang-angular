import { Component, OnInit } from "@angular/core";

import { Product } from "../product";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

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
  selector: "app-product-items",
  templateUrl: "./product-items.component.html",
  styleUrls: ["./product-items.component.css"]
})
export class ProductItemsComponent implements OnInit {
  items: Product[];
  selectedId: string;
  loading: boolean;

  constructor(private apollo: Apollo) {
    this.items = [];
    this.selectedId = "";
  }

  ngOnInit() {
    this.apollo
      .watchQuery<any>({ query: productsListQuery })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.items = data.products;
      });
  }

  onSelect(item): void {
    this.selectedId = item.id;
  }
}
