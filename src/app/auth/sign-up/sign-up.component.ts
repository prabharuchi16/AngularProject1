import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {
fullName ='';
email='';
password = '';
role =''

constructor(private router: Router){}
register(){
  if(this.fullName || this.email || this.password || this.role){
    alert("Please Signup first")
    return;
  }
  console.log({
   fullName : this.fullName,
   email: this.email,
  password: this.password,
  role: this.role
  });
  this.router.navigate(['/logIn']);
  
}

}
