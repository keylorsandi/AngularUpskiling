import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleService } from './google.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private googleS: GoogleService) { }

  logOut() {
    localStorage.removeItem('token');
    this.googleS.signOut();
  }



}
