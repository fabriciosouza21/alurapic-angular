import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/componet/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ SigninComponent ],
  imports: [  
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule  
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class HomeModule { }
