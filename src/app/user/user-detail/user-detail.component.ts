import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/AuthService';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

constructor(private authService: AuthService){}

tokenMsg:string = ''

ngOnInit(): void {
  this.authService.messager$.subscribe(msg=> { this.tokenMsg = msg})
  console.log("Message Recieved by user: ", this.tokenMsg)
}

}
