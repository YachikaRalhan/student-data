import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

const routes: Routes = [

  {path : '', redirectTo : "login-page",pathMatch:'full' },
  {path: 'login-page',component:LoginPageComponent},
  {path : 'page2', component: Page2Component},
  {path : 'addstudent',component:AddstudentComponent},
  {path: 'updatestudent', component:UpdatestudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Page2Component,LoginPageComponent,
                            AddstudentComponent,UpdatestudentComponent,
]