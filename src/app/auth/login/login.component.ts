import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
email = '';
password = '';
constructor(private router: Router){}

logIn(){
  console.log({
    email: this.email,
  password:  this.password
  }); 
  alert('login successfull')
  this.router.navigate(['/employe-list'])
}


}
