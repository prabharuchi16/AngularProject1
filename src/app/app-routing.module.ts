import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployFormComponent } from './employ/employ-form/employ-form.component';
import { EmployListComponent } from './employ/employ-list/employ-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './employ/home/home.component';
import { EmpDetailComponent } from './employ/home/emp-detail/emp-detail.component';
import { ViewEmployComponent } from './employ/view-employ/view-employ.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';



const routes: Routes = [
  {
    path: 'employe-form' , component: EmployFormComponent
  },
    {
    path: 'employe-list' , component: EmployListComponent
  },
  {
    path: '', component: SignUpComponent
  },
    {
    path: 'logIn', component: LoginComponent
  },{
    path:'home', component:HomeComponent
  },
  {
    path:'employe-detail', component: EmpDetailComponent
  },
  // {
  //   path: 'view-employe/:id', component: ViewEmployComponent
  // },
   {
    path: 'view-employe', component: ViewEmployComponent
  },
  {
    path: 'user-detail', component: UserDetailComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
