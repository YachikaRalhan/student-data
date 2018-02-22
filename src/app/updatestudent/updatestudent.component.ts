import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatestudent',
  template: `
  <app-mybuttons></app-mybuttons>
  <table *ngFor="let x of studetail" style="width:10%">
  <td>{{x.id}}</td>
  <td>{{x.name}}</td>
  <td>{{x.age}}</td> 
  <button (click)="func(x.id)">edit</button>
  </table>
<div *ngIf="showrslt">
<label>Id</label><input [(ngModel)]="studentedit.id" type="number" readonly>
<label>Name</label><input  [(ngModel)]="studentedit.name" type="text">
<label>Age</label><input [(ngModel)]="studentedit.age" type="number">
<button (click)="save()">saveme</button>
</div>
  `,
  styles: []
})
export class UpdatestudentComponent implements OnInit {

  showrslt=false
  public studetail=[];
  public a;
  
  public studentedit;

 
  constructor(private _studetailService: StudentService) { }

  ngOnInit() {
    this.studetail=this._studetailService.getstudetail();
  }
func(id){
  
  this.showrslt=true;
  this.a=(this.studetail.filter(a=> a.id==id)[0]);
  this.studentedit = JSON.parse(JSON.stringify(this.a))

}
save()
{
    this.studetail.forEach(student =>
    {
      if(student.id===this.studentedit.id)
      {
        student.name=this.studentedit.name;
        student.age=this.studentedit.age;
        


      }
    })

}
}


