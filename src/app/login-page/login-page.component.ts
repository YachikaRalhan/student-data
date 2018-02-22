import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  template: `
  
     <h2>Welcome to my app</h2>

    <h2>Username:<input #user type="text"></h2>

    <h2>Password:<input #pass type="password"></h2>
  
  <button (click)="onclick(user.value,pass.value)">Login</button>
 
  `,
  styles: []
})
export class LoginPageComponent implements OnInit {

  constructor(private route: Router, private router: Router) { }

  ngOnInit() {
  }
  onclick(a,b){
    if(a==b && a.length==0 )
        {
      alert("Please fill the required spaces");
         }
   
     else if (a.length==0) {
       alert("please enter the Username");
     }
     else if (b.length==0) {
       alert("please enter the password");
     } 
     else if
    (a==b)
      {
        this.router.navigate(['/page2']);
       
      }
   }
  }


