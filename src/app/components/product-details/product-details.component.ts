import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/models/product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // lay id produc tu route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // tim san pham voi id do
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}

