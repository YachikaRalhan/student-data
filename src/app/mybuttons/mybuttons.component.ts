import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mybuttons',
  template: `
  <button (click)="studentlist()">Students List</button>
  <button (click)="add()">Student Add</button>
  <button (click)="update()">Student Update</button>
 
  `,
  styles: []
})
export class MybuttonsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
add()
{
  this.router.navigate(['/addstudent']);
}
studentlist()
{
  this.router.navigate(['/page2']);
}

update(){
  this.router.navigate(['/updatestudent']);
}

}
