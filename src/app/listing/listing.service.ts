import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http:HttpClient) { }

  public getLocations(): Observable<any> {
    return this.http.get<any>('https://dddd1c09-b90a-4de4-ad4c-7b45e4fd70cc.mock.pstmn.io/location');
  }

}
