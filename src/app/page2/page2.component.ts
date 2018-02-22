import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page2',
  template: `
  
  <app-mybuttons></app-mybuttons>
  <table *ngFor="let x of studetail" style="width:10%">
  <td>{{x.id}}</td>
  <td>{{x.name}}</td>
  <td>{{x.age}}</td>
  </table>
  
 `,
  
  styles: []
})
export class Page2Component implements OnInit {
   public studetail=[];
  constructor(private _studetailService: StudentService) { }

  ngOnInit() 
  { 
    this.studetail=this._studetailService.getstudetail();

  }

}
