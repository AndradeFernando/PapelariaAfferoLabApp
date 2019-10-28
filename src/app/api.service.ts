import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { produto } from './produto';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8091/produtos";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProdutos (): Observable<produto[]> {
    return this.http.get<produto[]>(apiUrl)
      .pipe(
        tap(produtos => console.log('Fetch produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getproduto(id: number): Observable<produto> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<produto>(url).pipe(
      tap(_ => console.log(`fetched produto id=${id}`)),
      catchError(this.handleError<produto>(`getproduto id=${id}`))
    );
  }

  addProduto (produto): Observable<produto> {
    return this.http.post<produto>(apiUrl, produto, httpOptions).pipe(
      tap((produto: produto) => console.log(`Produto Incluido`)),
      catchError(this.handleError<produto>('addProduto'))
    );
  }

  updateProduto (id, produto): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, produto, httpOptions).pipe(
      tap(_ => console.log(`Produto Atualizado id=${id}`)),
      catchError(this.handleError<any>('updateProduto'))
    );
  }

  deleteProduto (id): Observable<produto> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<produto>(url, httpOptions).pipe(
      tap(_ => console.log(`Produto Deletado id=${id}`)),
      catchError(this.handleError<produto>('deleteProduto'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: tratar melhor esse erro atraves de uma tool
      console.error(error); // log to console instead

      
      return of(result as T);
    };
  }
}
