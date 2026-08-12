import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { EmployListService } from '../Service/EmployListService';
import { MessageService } from '../Service/MessageServive';
import { EmpDetailComponent } from '../emp-detail/emp-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private messageService: MessageService, private empService: EmployListService, private renderer: Renderer2){}

employees:any=[];
message: string = ''
Id : number = 0;

ngOnInit(): void {
  this.empService.message$.subscribe(employs => {this.employees = employs});

 
}
send(){
    this.messageService.sendMessage ("Hello form component from home");
  }
  EmpData = {
    id:1,
    name: "ruchi",
    email: "ruchi@email.com"
  }
  empName = "Ruchi";

  recievedMsg(msg: string){
// console.log(msg);
this.message = msg;

  }
  recievedEmpId(id: number){
    // console.log(id);   
    this.Id = id
  }

  @ViewChild(EmpDetailComponent)
  empDetail !: EmpDetailComponent;

msg = ''

getEmployee(){
   this.msg =  this.empDetail.showMessgae();   
  }

  ngAfterViewInit(): void {
    console.log("viewChild",this.empDetail);
    
  }

  changeChild(){
    this.renderer.setProperty(this.empDetail.heading.nativeElement, 'innerText' , 'Employee Details change from Parent');  
   this.renderer.setStyle( this.empDetail.heading.nativeElement, 'backgroundColor' , 'pink');
  }
  // title = 'Home Page'
  
  // changeParentTitle(newTitle: string){
  //   this.title = newTitle
  // }

}
