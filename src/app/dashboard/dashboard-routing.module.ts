import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
{
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: 'employee',
            loadChildren: ()=> 
                import('../employ/employ.module').then(m=>m.EmployModule)
        },
        {
            path: 'user',
            loadChildren: ()=>
                import('../user/user.module').then(m=>m.UserModule)
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}