import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployFormComponent } from './employ/employ-form/employ-form.component';
import { EmployListComponent } from './employ/employ-list/employ-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './employ/home/home.component';
import { EmpDetailComponent } from './employ/emp-detail/emp-detail.component';
import { ViewEmployComponent } from './employ/view-employ/view-employ.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployComponent } from './employ/add-employ/add-employ.component';



const routes: Routes = [
  // {
  //   path: 'employe-form' , component: EmployFormComponent
  // },
  //   {
  //   path: 'employe-list' , component: EmployListComponent
  // },
  {
    path: '', component: SignUpComponent
  },
    {
    path: 'logIn', component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'logIn',
    pathMatch: 'full'
  },
  // {
  //   path:'home', component:HomeComponent
  // },
  // {
  //   path:'employe-detail', component: EmpDetailComponent
  // },
  // {
  //   path: 'view-employe/:id', component: ViewEmployComponent
  // },
  //  {
  //   path: 'view-employe', component: ViewEmployComponent
  // },
  // {
  //   path: 'user-detail', component: UserDetailComponent
  // },
  {
    path: 'dashboard', loadChildren: ()=> import('./dashboard/dashboard.module').then(m=> m.DashboardModule)
  },

  {
path: 'add-employ',component:AddEmployComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
