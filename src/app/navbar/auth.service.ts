import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(data:any): Observable<any> {
    return this.http.post<any>('https://mock-server-samp.herokuapp.com/login', data);
  }

  public refreshToken(data:any): Observable<any> {
    return this.http.post<any>('https://mock-server-samp.herokuapp.com/refresh-token', data);
  }

  public signup(data:any): Observable<any> {
    return this.http.post<any>('https://mock-server-samp.herokuapp.com/signup', data);
  }


}
