import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployModule } from './employ/employ.module';
import { AuthModule } from './auth/auth.module';
import { MessageService } from './Service/MessageService';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
      EmployModule,
      AuthModule,
      DashboardModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
