import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
 
export interface LoginContext {
  email: String;
  password: String;
  remember_me?: Boolean;
}

export interface RegisterContext {
  name: String;
  email: String;
  password: String;
  password_confirmation: String;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser = {};
  startpoint: string = 'http://localhost:3000/admin';
  // startpoint: string = 'http://api.winorball.com/admin';
  constructor(private httpClient: HttpClient, public router: Router){}

  register(user): Observable<any> {
    return this.httpClient.post(`${this.startpoint}/register`, user).pipe(
      map((res: Response) => {
        return res || {}
      }),
      (error) => {
        return error;
      }
    )
  }

  login(user): Observable<any> {
    return this.httpClient.post<any>(`${this.startpoint}/login`, user).pipe(
      map((res: any) => {
        return res || {}
      }, (error) => {
        return error;
      })
    )    
  }

  logout() {
    if (localStorage.removeItem('token') == null) {
      this.router.navigate(['/login']);
    }
  }

  // getUserProfile(token): Observable<any> {
  //   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  //   console.log(headers);
  //   return this.httpClient.get(`${this.startpoint}/user`, { headers: headers }).pipe(
  //     map((res: Response) => {
  //       return res || {}
  //     }),
  //     catchError(this.handleError)
  //   )
  // }

  getAccessToken() {
    return localStorage.getItem('token');
  }


  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
