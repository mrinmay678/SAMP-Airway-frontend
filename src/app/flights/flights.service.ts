import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  constructor(private http:HttpClient) { }
  public getFlightDetail(id:any): Observable<any> {
    let params:any = new HttpParams();
    params = params.append('id', id);
    return this.http.get<any>('http://localhost:8085/public/flight', {params: params});
  }
  public bookTicket(data:any): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem('access-token'),
      "Access-Control-Allow-Origin": '*',
      "ContentType": "application/json"
    });
    return this.http.post<any>('http://localhost:8085/api/ticket/book', data, {headers: headers});
  }
}
