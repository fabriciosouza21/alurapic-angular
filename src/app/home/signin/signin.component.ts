import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('userNameInput')
  userNameInput!: ElementRef<HTMLInputElement>;
  
  loginForm : FormGroup = this.fb.group({
    userName: ['',Validators.required],
    password: ['',Validators.required]
  });

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private platformDetectorService : PlatformDetectorService
    ) { }

  ngOnInit(): void {
  }

  login(){
    const userName = this.userName?.value;
    const password = this.password?.value;
    this.authService.authenticate(userName, password).subscribe(
      {
        next: (v) => console.log(v),
        complete : () => this.router.navigate(['user', userName]),
        error : err => {
          this.loginForm.reset();
          this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password');
        },
      }
      );
  }

  get userName() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }

}
