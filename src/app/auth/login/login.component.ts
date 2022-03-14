import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public auth2: any;

  public loginForm: FormGroup = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    remember: [false]
  });

  constructor(private fb: FormBuilder, private router: Router, private _loginS: LoginService) { }

  ngOnInit(): void {
    this.renderButton();
  }

  login() {
    this._loginS.loginServ(this.loginForm.value).subscribe(res => {
      if (this.loginForm.get('remember')?.value) {
        localStorage.setItem('email', this.loginForm.get('email')?.value);
      } else {
        localStorage.removeItem('email');
      }
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    });
    //this.router.navigateByUrl('/');
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',

    });
    this.startApp();
  }
  startApp() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '889803693701-nqbj21q68ki0j9108g8v6n6me58da7ja.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  }

  attachSignin(element: any) {
    this.auth2.attachClickHandler(element, {},
      (googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token;
        this._loginS.loginGoogle(id_token).subscribe();
      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}




