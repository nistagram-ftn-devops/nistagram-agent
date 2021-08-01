import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly BASE_PATH = environment.apiOrderService

  constructor(private http: HttpClient) { }

  buy(payload: Order): Observable<any> {
    return this.http.post(this.BASE_PATH, payload)
  }
}
