import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(data:any): Observable<any> {
    return this.http.post<any>('https://6dd470be-7e68-43a2-8261-c9b8975e6c52.mock.pstmn.io/auth/login', data);
  }

  public refreshToken(data:any): Observable<any> {
    return this.http.post<any>('https://6dd470be-7e68-43a2-8261-c9b8975e6c52.mock.pstmn.io/auth/refresh-token', data);
  }

  public signup(data:any): Observable<any> {
    
    return this.http.post<any>('https://6dd470be-7e68-43a2-8261-c9b8975e6c52.mock.pstmn.io/auth/signup', data);
  }


}
