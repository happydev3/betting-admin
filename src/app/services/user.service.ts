import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public startpoint: string = 'http://localhost:3000/admin';
  public startpoint: string = 'http://api.winorball.com/admin';
  public token = this.authService.getAccessToken();
  public headers = new HttpHeaders().set('Authorization', 'Bear ' + this.token);

  constructor(
    private httpClient: HttpClient, 
    public router: Router,
    public authService: AuthService
  ) { }
  
  getUser(): Observable<any> {
    console.log(this.headers);
    return this.httpClient.get(`${this.startpoint}/`, {headers: this.headers}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getOnlineUser(): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/onlineuser`, {headers: this.headers}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getBlockOnlineUser(): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/blockuser`, {headers: this.headers}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getLockUser(): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/lockuser`, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  blockUser(id): Observable<any> {
    console.log(id);
    return this.httpClient.post(`${this.startpoint}/block-user`, { id: id }, {headers: this.headers}).pipe(
      map((res:Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  lockUser(id): Observable<any> {
    console.log(id);
    return this.httpClient.post(`${this.startpoint}/lock-user`, { id: id }, {headers: this.headers}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getDispute(): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/dispute`, {headers: this.headers}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  deleteDispute(id): Observable<any> {
    return this.httpClient.post(`${this.startpoint}/delete-dispute`, {id: id}, {headers:this.headers}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      })
    )
  }

  getAllPosts(): Observable<any> {
    return this.httpClient.get(`${this.startpoint}/all-posts`, {headers: this.headers}).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {}
      }),
      catchError(this.handleError)
    )
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
