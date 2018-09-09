import { Component, OnInit, Input } from "@angular/core";
import { IProduct } from "../home/product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  @Input()
  product: IProduct;

  constructor(private ser: ProductService) {}

  ngOnInit() {}

  addData() {}
}
