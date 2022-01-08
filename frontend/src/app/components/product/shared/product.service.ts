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

  lerPeloId(id: number): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Product>(url);
  } 

  editar(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product}`;
    return this.http.put<Product>(url, product);
  }

  excluir(id: number): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Product>(url);
  }
}
