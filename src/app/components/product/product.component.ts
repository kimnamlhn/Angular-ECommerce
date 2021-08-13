import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = products;

  constructor() { }

  addToCart() {
    window.alert('The product has been added!');
  }

  ngOnInit(): void {
  }

}
