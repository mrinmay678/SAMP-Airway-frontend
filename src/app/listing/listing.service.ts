import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http:HttpClient) { }

  public getLocations(): Observable<any> {
    return this.http.get<any>('https://dddd1c09-b90a-4de4-ad4c-7b45e4fd70cc.mock.pstmn.io/location');
  }
  public getFlights(data:any): Observable<any> {
    
    let params:any = new HttpParams();
    params = params.append('source', data.source);
    params = params.append('destination', data.destination);
    params = params.append('departure', data.departure);
    return this.http.get<any>('https://b4e8c308-c2c4-445a-b725-5454f3447511.mock.pstmn.io/flights', {params: params});
  }

}
