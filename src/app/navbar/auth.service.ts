import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(data:any): Observable<any> {
    const headers:HttpHeaders = new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-type':'application/json'
    })
    return this.http.post<any>('http://localhost:8085/auth/login', data, { headers: headers });
  }

  public signup(data:any): Observable<any> {
    return this.http.post<any>('https://mock-server-samp.herokuapp.com/signup', data);
  }


}
