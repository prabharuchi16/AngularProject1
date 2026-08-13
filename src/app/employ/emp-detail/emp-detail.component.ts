import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})
export class EmpDetailComponent implements OnChanges{

  
@Input() name = '';

@Input() employ:any = {};

ngOnChanges(changes: SimpleChanges): void {
  console.log("current value:", changes['name'].currentValue);
if(changes['employ']) {
  console.log('Previous Employ', changes['employ'].previousValue);
  console.log('Current Employ', changes['employ'].currentValue);
}
}

 @Output() 
 messageEvent  = new EventEmitter<string>();
 sendMessage(){
  this.messageEvent.emit("Hello Parent from child employ-details");
 }

 @Output()
 idEvent = new EventEmitter<number>();
 sendEmpId() {
  this.idEvent.emit(10);
 }

showMessgae():string{
return "hello from employ details";
}

@ViewChild('childHeading')
  heading!: ElementRef;
  // @Output()
  // changeTitle = new EventEmitter<string>();

  // changeParent(){
  //   this.changeTitle.emit("Title changed from child")
  // }
}
