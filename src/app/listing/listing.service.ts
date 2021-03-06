import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http:HttpClient) { }

  public getLocations(): Observable<any> {
    return this.http.get<any>('http://localhost:8085/public/location');
  }
  public getFlights(data:any): Observable<any> {
    
    let params:any = new HttpParams();
    params = params.append('source', data.source);
    params = params.append('destination', data.destination);
    params = params.append('departure_date', data.departure);
    console.log(params);
    return this.http.get<any>('http://localhost:8085/public/flights/search', {params: params});
  }

}
