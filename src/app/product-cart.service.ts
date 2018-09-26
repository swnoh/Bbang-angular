import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductCartService {
  items = [];

  constructor() {
    this.items = [
      {
        imagePath:
          "https://mirukuottawacom.files.wordpress.com/2018/03/25014119_156217788476333_751495092115603456_n-e1522254417236.jpg?w=300&h=280",
        selectedOption1: "Royal milk tea bottle",
        selectedOption2: "1 bottle (350ml)",
        price: "6.5"
      },
      {
        imagePath:
          "https://mirukuottawacom.files.wordpress.com/2018/03/28751760_192098984728624_3488322547471089664_n.jpg?w=476&h=476&crop=1",
        selectedOption1: "Matcha red bean bento",
        selectedOption2: "2 Bento (30oz)",
        price: "20"
      },
      {
        imagePath:
          "https://mirukuottawacom.files.wordpress.com/2018/04/img_7186.jpg?w=476&h=476&crop=1",
        selectedOption1: "Strawberry shortcake",
        price: "40"
      }
    ];
  }

  getProductCarts() {
    return this.items;
  }

  setProductCarts(item): void {
    this.items.push(item);
  }

  getProductCartCount() {
    return this.items.length;
  }
}
