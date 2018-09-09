import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { IProduct } from "../home/product";
import { ProductService } from "../product.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnChanges {
  @Input()
  product: IProduct;

  @Output()
  onProduct = new EventEmitter();

  editForm: FormGroup;
  newProd: IProduct;

  constructor(private ser: ProductService, private fb: FormBuilder) {}

  ngOnChanges() {
    this.editForm = this.fb.group({
      id: this.product._id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price
    });
  }

  updateData(id) {
    const data = {
      _id: parseInt(this.editForm.value.id),
      name: this.editForm.value.name,
      description: this.editForm.value.description,
      price: parseInt(this.editForm.value.price)
    };
    console.log(this.editForm.value);
    this.ser.updateData(id, data).subscribe(response => {
      this.onProduct.emit(response);
    });
  }
}
