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
    return this.http.get<any>('https://4ddcfcfe-74f3-43bc-a711-332c6afec832.mock.pstmn.io/flight', {params: params});
  }

}
