import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { loginForm } from '../interfaces/loginForm';

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
}
