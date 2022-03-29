import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http:HttpClient) { }

  public getFlightDetail(id:any): Observable<any> {
    
    let params:any = new HttpParams();
    params = params.append('id', id);
    return this.http.get<any>('https://mock-server-samp.herokuapp.com/flight', {params: params});
  }

  public bookTicket(data:any): Observable<any> {
    return this.http.post<any>('https://mock-server-samp.herokuapp.com/book-ticket', data);
  }

}
