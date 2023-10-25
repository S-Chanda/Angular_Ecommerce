import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | product; //array of product is not taken here since we require to view singe product information
  productQuantity: number = 1;
  constructor(
    private activateRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    //getProduct function is defined in product.service
    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        this.productData = result;
      });
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else {
      if (this.productQuantity > 1 && val === 'minus') {
        this.productQuantity -= 1;
      }
    }
  }
}
