import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

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
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    const userName = this.userName?.value;
    const password = this.password?.value;
    this.authService.authenticate(userName, password).subscribe(
      {
        next: (v) => console.log(v),
        complete : () => console.log('complete'),
        error : err => console.log('error'),
      }
      );
  }

  get userName() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }

}
