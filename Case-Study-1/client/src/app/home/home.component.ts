import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { IProduct } from "./product";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products: IProduct[];
  editProduct: boolean = false;
  addProduct: boolean = false;
  formProduct: IProduct;
  constructor(private ser: ProductService) {}

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
    console.log(id);
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
    this.addProduct = true;
  }
}
