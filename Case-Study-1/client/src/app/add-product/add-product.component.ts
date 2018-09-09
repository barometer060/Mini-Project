import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IProduct } from "../home/product";
import { ProductService } from "../product.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  @Output()
  onAdd = new EventEmitter();

  addForm: FormGroup;
  constructor(private ser: ProductService, private fb: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required]
    });
  }

  addData() {
    const data = {
      _id: parseInt(this.addForm.value.id),
      name: this.addForm.value.name,
      description: this.addForm.value.description,
      price: parseFloat(this.addForm.value.price);
    }
    this.ser.addData(data).subscribe(response => {
      this.onAdd.emit(response);
    })
  }
}
