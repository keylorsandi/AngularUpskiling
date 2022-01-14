import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  constructor(private fb: FormBuilder) { }

  public submitted = false;
  public message ='';
  public pwmessage ='';

  createUser() {
    this.registerForm.markAllAsTouched();
    if (this.validateSubmitForm()) {
      this.submitted = true;
      console.log(this.registerForm.value);
      alert("The form was submitted");
    } else {
      console.log(this.registerForm.invalid);
      this.submitted=false;
      alert("The form was not submitted");
    }

  }

  validateSubmitForm(): boolean {

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
    }
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


  validPassword(password:string, password2:string){
    const pw1 = this.registerForm.get(password)?.value;
    const pw2 = this.registerForm.get(password2)?.value;

    if (!pw2 && this.registerForm.controls[password2].touched) {
      this.pwmessage = 'Please insert the password confirmation';
      return true;
    }else {
      if (pw1===pw2) {
        return false;
       }else {
         this.pwmessage = 'This password does not match';
         return true}
    };
  };
};
