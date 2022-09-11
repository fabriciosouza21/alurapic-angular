import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm : FormGroup = this.fb.group({
    userName: ['',Validators.required],
    password: ['',Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get userName() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }

}
