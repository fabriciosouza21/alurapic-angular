import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case-validate';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

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
      lowerCaseValidator,
      Validators.minLength(2),
      Validators.maxLength(30)
    ], this.userNotTakenValidatorService.checkUserNameTaken()],
    password: ['',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(14)
    ]]
  });

  constructor(private fb: FormBuilder, private userNotTakenValidatorService :UserNotTakenValidatorService) { }

  get email() { return this.signupForm.get('email'); }

  get fullName() { return this.signupForm.get('fullName'); }

  get userName() { return this.signupForm.get('userName'); }

  get password() { return this.signupForm.get('password'); }

}
