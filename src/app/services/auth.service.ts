import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { JwtHelperService } from '@angular/cli';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  

  ifUserExist(userName: any, password: any): Observable<any> {
    const headers = new HttpHeaders({
       'content-type': 'application/json' 
    })
    const params = new HttpParams()
      .set("userName", userName)
      .set("password", password);
    return this.http.get(`${environment.apiUrl}Account/UserLogin`, { headers:headers, params: params })
  }

  logout(): void {
    // Clear the stored token
    localStorage.removeItem('token');
  }

  // isLoggedIn(): boolean {
  //   // Check if the token is valid and not expired
  //   const token = localStorage.getItem('token');
  //   return token && !this.jwtHelper.isTokenExpired(token);
  // }
}
