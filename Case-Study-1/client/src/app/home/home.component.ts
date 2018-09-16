import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { IProduct } from "./product";

import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products: IProduct[];
  editProduct = false;
  addProduct = false;
  formProduct: IProduct;
  constructor(private ser: ProductService, private router: Router) {}

  ngOnInit() {
    this.ser.getData().subscribe(data => {
      console.log("Data Received");
      this.products = data;
    });
  }

  delete(id) {
    this.ser.deleteData(id).subscribe((response: IProduct) => {
      const index = this.products.findIndex(prod => prod._id === response._id);
      this.products.splice(index, 1);
    });
  }

  update(id) {
    this.editProduct = true;
    this.addProduct = false;
    const index = this.products.findIndex(prod => prod._id === id);
    this.formProduct = this.products[index];
  }

  handleUpdate(response) {
    const index = this.products.findIndex(
      prod => prod._id === this.formProduct._id
    );
    this.products[index] = response;
    this.editProduct = false;
  }

  addToProducts() {
    this.editProduct = false;
    this.router.navigateByUrl("/add");
  }

  handleAdd(response) {
    this.products.push(response);
    this.addProduct = false;
    this.editProduct = false;
  }
}
