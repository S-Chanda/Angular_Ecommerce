import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //manually
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: undefined | product[];
  noSearchResult = false;
  searchedQuery: string | undefined | null;
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query'); //word query is used because we defined the keyword in app-routing.ts module while specifying path
    query &&
      this.product.searchProducts(query).subscribe((result) => {
        this.searchResult = result;
        if (this.searchResult.length < 1) {
          this.noSearchResult = true;
          this.searchedQuery = query;
        }
      });
  }
}
