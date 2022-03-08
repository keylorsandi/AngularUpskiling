import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({

    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    remember:[false]
  });

  constructor(private fb:FormBuilder, private router:Router, private _loginS:LoginService) { }

  ngOnInit(): void {
  }

  login(){
this._loginS.loginServ(this.loginForm.value).subscribe( res =>{

  console.log()
},(err)=>{
  Swal.fire('Error',err.error.msg,'error');
});
    //this.router.navigateByUrl('/');
  }
  validations(){

  }
}
