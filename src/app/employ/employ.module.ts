import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployFormComponent } from './employ-form/employ-form.component';
import { EmployDirective } from './directives/EmployDirective';
import { BonusPipe } from './pipes/BonusPipe';
import { numberMask } from './pipes/numberMask';
import { CustomName } from './pipes/CustomName';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { MessageService } from '../Service/MessageService';
import { ViewEmployComponent } from './view-employ/view-employ.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { EmployRoutingModule } from './employ-routing.module';

@NgModule({
  declarations: [
    EmployListComponent,
    EmployFormComponent,
    NavbarComponent,
    EmployDirective,
    BonusPipe,
    numberMask,
    CustomName, 
       HomeComponent,
          EmpDetailComponent,
          ViewEmployComponent,
          EmployeesComponent,
          AddEmployComponent,
       
  ],

  providers:[
MessageService,
  ],

  imports: [
    CommonModule,
    RouterModule,
    EmployRoutingModule
  ],
  exports:[
    EmployListComponent,
    EmployFormComponent,
    HomeComponent,
    EmpDetailComponent
  ]
})


export class EmployModule { }
