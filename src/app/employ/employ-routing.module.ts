import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployFormComponent } from './employ-form/employ-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { ViewEmployComponent } from './view-employ/view-employ.component';

const routes: Routes = [
{
    path: '', component: EmployeesComponent,
    children: [
     { path: '', redirectTo: 'list', pathMatch: 'full'},
     {
        path: 'list', component: EmployListComponent
     },
     {
        path: 'add', component: AddEmployComponent
     },
    //   {
    //      path: 'view-employe/:id', component: ViewEmployComponent
    //    },
        {
         path: 'list/view', component: ViewEmployComponent
       },
       {
        path: 'list/edit', component: EmployFormComponent
       }
    ]
},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployRoutingModule { }
