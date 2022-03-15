import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare const gapi:any;
@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  public auth2:any;
  constructor(private router:Router,private ngZone:NgZone) {
    this.googleInit();
   }

  googleInit(){

    return new Promise( resolve =>{
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '889803693701-nqbj21q68ki0j9108g8v6n6me58da7ja.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve(this.auth2);
      });
    });
  }
  signOut() {
    //this.auth2 = gapi.auth2.getAuthInstance();
    this.auth2.signOut().then(() => {
      this.ngZone.run(()=>{this.router.navigateByUrl('/login');})

    });
  }
}
