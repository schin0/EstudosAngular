import { map } from 'rxjs/operators';
import { Product } from 'src/app/components/product/shared/product.model';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductBancocService {

  readonly url: string = 'https://localhost:7230/api';

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/produto`)
      .pipe(
        retry(2),
        catchError(this.manipulaErro)
      );
  }

  addProduto(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/produto`, product).pipe(
      map((obj) => obj),
      catchError(this.manipulaErro)
    );
  }

  manipulaErro(error: HttpErrorResponse) {
    let mensagemErro = '';
    if (error.error instanceof ErrorEvent) {
      // Erro no lado do cliente
      mensagemErro = error.error.message;
    } else {
      // Erro no lado do servidor
      mensagemErro = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(mensagemErro);
  };

}
