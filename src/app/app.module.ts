import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MybuttonsComponent } from './mybuttons/mybuttons.component';
import { Page2Component } from './page2/page2.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddstudentComponent,
    LoginPageComponent,
    MybuttonsComponent,
    Page2Component,
    UpdatestudentComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule

   

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
