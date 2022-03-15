import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { GoogleService } from '../../services/google.service';



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

  constructor(private fb: FormBuilder,
    private router: Router,
    private _loginS: LoginService,
    private googleS: GoogleService,
    private ngZone:NgZone
    ) { }

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
      this.router.navigateByUrl('/dashboard');
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
  async startApp() {
    await this.googleS.googleInit();
    this.auth2 = this.googleS.auth2;
    this.attachSignin(document.getElementById('my-signin2'));
  }

  attachSignin(element: any) {
    this.auth2.attachClickHandler(element, {},
      (googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token;
        this._loginS.loginGoogle(id_token).subscribe(res=>{
          this.ngZone.run(()=>{
            this.router.navigateByUrl('/dashboard');
          });
        });

      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}




