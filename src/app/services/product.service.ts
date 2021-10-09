import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.backendApiUrl;

  constructor(private httpClient: HttpClient) { } // this will call my backend

  getAllProducts(pageNumber: number = 1): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(`${this.url}/products/page=${pageNumber}&per_page=10`);
    // check this documentation https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-products
  }

  getSingleProduct(id: number): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(`${this.url}/products/${id}`);
    // check this documentation https://woocommerce.github.io/woocommerce-rest-api-docs/#retrieve-a-product
  }

  searchProducts(keyword: string): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(`${this.url}/products?search=${keyword}`);
    // check this documentation https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-products
  }

  getAllCategories() {
    return this.httpClient.get(`${this.url}/products/categories?per_page=100&hide_empty=true&parent=0`).toPromise();
  }
}
