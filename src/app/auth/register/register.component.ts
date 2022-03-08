import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    password2: ['', [Validators.required, Validators.minLength(3)]],
    terms: [false, Validators.required]
  });

  constructor(private fb: FormBuilder, private userServ: UserService,private router:Router) { }

  public submitted = false;
  public message ='';
  public pwmessage ='';

  createUser() {
    this.registerForm.markAllAsTouched();
    if (this.validateSubmitForm()&& !this.validPassword()) {
      this.userServ.createUser(this.registerForm.value).subscribe(res=>{
       console.log(res)
      },(err)=>{
        Swal.fire('Error',err.error.msg, 'error');
      });

    } else {
      this.submitted=false;
      alert("The form was not submitted");
    }

  }

  validateSubmitForm(): boolean {
    console.log(this.submitted);
    if (this.registerForm.valid) {
      return true;
    }
    else {
      alert("FILL ALL FIELDS");
      return false;
    }
  }

  formvalidations (field: string) {
    const regxEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g ;
    if (field == 'terms') {
      return !this.registerForm.get(field)?.value && this.registerForm.controls[field].touched;
    };
    if (field == 'email') {
      if (!this.registerForm.get(field)?.value && this.registerForm.controls.email.touched) {
        this.message = 'Please instert an email';
        return true;
      }else{
        this.message='Please insert a valid email';
        return !regxEmail.test(this.registerForm.get(field)?.value) && this.registerForm.controls.email.touched && !this.submitted;
      };
    };
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched;
  };


  validPassword(){
    const pw1 = this.registerForm.get('password')?.value;
    const pw2 = this.registerForm.get('password2')?.value;

    if (!pw2 && this.registerForm.controls['password2'].touched) {
      this.pwmessage = 'Please insert the password confirmation';
      return true;
    }else {
      if (pw1!==pw2&& this.registerForm.controls['password2'].touched) {
        this.pwmessage = 'This password does not match';
        return true;
       }else {
        return false;
        }
    };
  };

};
