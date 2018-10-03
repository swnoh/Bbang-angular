import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import { Product } from "./product";

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

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient, private apollo: Apollo) {}
  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>("../../assets/products.json");
  // }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("../../assets/products.json");
  }
}
