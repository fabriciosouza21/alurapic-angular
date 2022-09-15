import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  signupForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    fullName: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40)
    ]],
    userName: ['',[
      Validators.required,
      Validators.pattern(/^[a-z0-9_\-]+$/),
      Validators.minLength(2),
      Validators.maxLength(30)
    ]],
    password: ['',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(14)
    ]]
  });

  constructor(private fb: FormBuilder) { }

  get email() { return this.signupForm.get('email'); }

  get fullName() { return this.signupForm.get('fullName'); }

  get userName() { return this.signupForm.get('userName'); }

  get password() { return this.signupForm.get('password'); }

}
