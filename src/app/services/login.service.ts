import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { loginForm } from '../interfaces/loginForm';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const base_url = environment.base_URL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpC: HttpClient) { }

  loginServ(formData: loginForm) {
    return this.httpC.post(`${base_url}login`, formData).pipe(
      tap((res:any) =>{
        localStorage.setItem('token',res.token);
      })
    );
  }
  loginGoogle(token:any){
    return this.httpC.post(`${base_url}login/googlesignin`,{token}).pipe(
      tap((res:any) =>{
        localStorage.setItem('token',res.token);
      })
    );
  }
  validateToken():Observable<boolean>{
    const token = localStorage.getItem('token')||'';
    return this.httpC.get(`${base_url}login/renew`,{
      headers:{
        'token':token
      }
    }).pipe(
      tap((res:any) =>{
        localStorage.setItem('token',res.token);
      }),map(res => true),
      catchError(error => of(false))
    );
  }
}
