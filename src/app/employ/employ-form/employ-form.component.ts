import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../Service/MessageService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employ-form',
  templateUrl: './employ-form.component.html',
  styleUrls: ['./employ-form.component.scss']
})
export class EmployFormComponent implements OnInit, OnDestroy {
constructor(private messageService: MessageService){}

 name = 'Employ-Form';
 isDisable = true;
 isActive = true;
 value = "Ruchi";

 show(value:string){
  console.log(value);
 }

//  showMsg(){
//   console.log("show message from service",this.messageService.getMesasge());
//  }


press(event: KeyboardEvent) {
console.log(event.key);
 }

 username = '';
 color = "pink"



 Empname = 'Ruchi Prabha'
// isActive = true;
employ = {
  id:1,
  name: 'Ruchi',
  Department: 'IT'
}

employees :string []= [];
mesg:string = '';
private subscription !: Subscription;
ngOnInit(): void {
  console.log('Componet intialized');

  this.employees =[
    "Ruchi","Yashi", 'Riya'
  ]
  
 this.subscription = this.messageService.message$.subscribe(msg=> {this.mesg = msg });
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

today = new Date();
role = "user"
salary = 50000.76654;
price = 34000.6756;
quantity = 0.5;
phoneNumber = '57468574672';
}
