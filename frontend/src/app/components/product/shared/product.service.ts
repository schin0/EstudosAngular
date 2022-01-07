import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:3001/products';

  constructor(private http: HttpClient) { }

  criar(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }

  ler(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }
}
