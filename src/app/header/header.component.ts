import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //menuType is defined to check user type
  menuType: string = 'default';
  //adminName is define to display admin's name in navbar after logging in
  adminName: string = '';
  //to display searched keyword onscreen
  searchResult: undefined | product[];

  //router service to check route change
  constructor(private route: Router, private product: ProductService) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('admin') && val.url.includes('admin')) {
          console.warn('in seller area');
          //to display as admin
          this.menuType = 'admin';
          //to display admin name in navbar
          if (localStorage.getItem('admin')) {
            let adminStore = localStorage.getItem('admin');
            let adminData = adminStore && JSON.parse(adminStore)[0]; //converting in JSON because localstorage stores data in string
            this.adminName = adminData.name;
          }
        } else {
          console.warn('outside seller');
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('admin');
    this.route.navigate(['/']);
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5;
        }
        this.searchResult = result;
      });
    }
  }

  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(val: string) {
    this.route.navigate([`search/${val}`]);
  }

  redirectToDetails(id: number) {
    this.route.navigate(['/product-details/' + id]);
  }
}
