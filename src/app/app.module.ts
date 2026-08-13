import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployModule } from './employ/employ.module';
import { AuthModule } from './auth/auth.module';
import { MessageService } from './Service/MessageService';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
      EmployModule,
      AuthModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
