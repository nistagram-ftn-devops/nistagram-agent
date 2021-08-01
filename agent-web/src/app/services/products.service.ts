import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly BASE_PATH = environment.apiProductsService

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.BASE_PATH)
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(this.BASE_PATH + '/' + id)
  }

  removeProduct(id: number): Observable<any> {
    return this.http.delete(this.BASE_PATH + '/' + id)
  }

  add(payload: Product): Observable<any> {
    return this.http.post(this.BASE_PATH, payload)
  }
}
