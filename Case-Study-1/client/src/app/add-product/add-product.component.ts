import { Component, OnInit} from "@angular/core";
import { IProduct } from "../home/product";
import { ProductService } from "../product.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Router } from "@angular/router";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;
  constructor(private ser: ProductService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required]
    });
  }

  get f() { return this.addForm.controls; }

  addData() {
    this.submitted = true;

    if(this.addForm.invalid) return;

    const data = {
      _id: parseInt(this.addForm.value.id),
      name: this.addForm.value.name,
      description: this.addForm.value.description,
      price: parseFloat(this.addForm.value.price)
    };
    this.ser.addData(data).subscribe(response => {
      this.router.navigateByUrl("/home");
    });
  }
}
