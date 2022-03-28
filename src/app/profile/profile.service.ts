import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  public getProfile(): Observable<any> {
    return this.http.get<any>('https://2c3dcdb8-7454-4bd3-8561-a8740a5b1927.mock.pstmn.io/profile');
  }
}
