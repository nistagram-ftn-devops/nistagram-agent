import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private readonly BASE_PATH = environment.apiReportService

  constructor(private http: HttpClient) { }

  getMostSelling(): Observable<any> {
    return this.http.get(this.BASE_PATH + '/most-selling')
  }

  getMostValuable(): Observable<any> {
    return this.http.get(this.BASE_PATH + '/most-valuable')
  }
}
