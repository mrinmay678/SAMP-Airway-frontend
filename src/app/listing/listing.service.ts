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
    return this.http.get<any>('https://0fc20aac-e28a-41a2-98a2-5239726a08c2.mock.pstmn.io/flights', {params: params});
  }

}
