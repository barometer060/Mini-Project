import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {IProduct} from './product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	products: IProduct[];
  constructor(private ser: ProductService) { }

  ngOnInit() {
  	this.ser.getData().subscribe(data => {
  		console.log("Data Received");
  		this.products = data;
  	})
  }

}
