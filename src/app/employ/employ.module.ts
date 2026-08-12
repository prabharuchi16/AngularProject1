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
import { MessageService } from './Service/MessageServive';
import { ViewEmployComponent } from './view-employ/view-employ.component';

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
       
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    EmployListComponent,
    EmployFormComponent,
    HomeComponent,
    EmpDetailComponent
  ]
})


export class EmployModule { }
