import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "src/app/app-routing.module";


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
],
  exports:[
    SignUpComponent,
    LoginComponent
  ]
})
export class AuthModule { }
