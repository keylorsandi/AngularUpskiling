import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegisterForm } from '../interfaces/register-form.interface';
import { tap } from 'rxjs/operators';

const base_url = environment.base_URL
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpC: HttpClient) { }

  createUser(formData: RegisterForm) {
    return this.httpC.post(`${base_url}users`, formData).pipe(
      tap((res:any) =>{
        localStorage.setItem('token',res.token);
      })
    );
  }

}
