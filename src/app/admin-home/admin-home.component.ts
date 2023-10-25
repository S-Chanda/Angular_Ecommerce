import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  //defining property for listing products
  productList: undefined | product[];

  //definig property for delete message
  deleteMessage: undefined | string;

  //property for delete and edit icon
  deleteIcon = faTrash;
  editIcon = faEdit;

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.list();
  }

  //to list the product present
  list() {
    this.product.productList().subscribe((result) => {
      console.warn(result);
      this.productList = result;
    });
  }

  deleteProduct(id: number) {
    console.warn('test id', id);
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) this.deleteMessage = 'Product is deleted!';
      this.list(); //to show refreshed page after deleting product
    });
    setTimeout(() => {
      this.deleteMessage = undefined;
    }, 3000);
  }
}
