import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstudent',
  template: `
  <app-mybuttons></app-mybuttons>

  <h3>Id:<input [(ngModel)]="id" type="number"></h3>
  <h3>Name:<input [(ngModel)]="name" type="text"></h3>
   <h3>Age:<input [(ngModel)]="age" type="number"></h3>
<button (click)="func()" type="submit">Add</button>

  `,
  styles: []
})
export class AddstudentComponent implements OnInit {

  public id;
  public name='';
  public age;
constructor(private _studentService : StudentService,private router: Router) { }

ngOnInit() {
}
func()
{   let student=
  {
  "id":this.id,
  "name":this.name,
  "age":this.age

}

this._studentService.student.push(student);
}

}