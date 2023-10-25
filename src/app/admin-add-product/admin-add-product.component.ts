import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css'],
})
export class AdminAddProductComponent {
  //to display msg after adding product
  addProductMessage: string | undefined;

  constructor(private product: ProductService) {}

  //to add product
  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is successfully added !';
      }
      //to remove addProduct Msg after certain time
      setTimeout(() => (this.addProductMessage = undefined), 3000);
    });
  }
}
