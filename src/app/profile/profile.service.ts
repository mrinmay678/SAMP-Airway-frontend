import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  public getProfile(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem('access-token')
    });
    return this.http.get<any>('http://localhost:8085/api/profile', {headers: headers});
  }
}
