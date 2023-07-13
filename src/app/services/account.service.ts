import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // private userSubject: BehaviorSubject<User | null>;
  // public user: Observable<User | null>;

  constructor(
    private http: HttpClient,
      private router: Router,
  ) {
      
  }

  
  validateUserName(username : string): Observable<string> {
      const headers = new HttpHeaders({ 'content-type': 'application/json' });
      const params = new HttpParams().set("username", username);
    return this.http.get<string>(`${environment.apiUrl}Account/ValidateUsername`,{'headers': headers, 'params': params});

  }

  validateEmail(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const params = new HttpParams().set("email", email);
    return this.http.get(`${environment.apiUrl}Account/ValidateEmail`,{ 'headers': headers, 'params': params })
  }
  

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}Account/UserRegistration`,  user );
  }


}
