import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
@Component({
  selector: 'app-emp-details',
  template: `<h2>Employee details</h2>
  <h3>defining the array of list of employee</h3>
  <ul *ngFor="let e of employee">
  <li>{{e.id}}.  {{e.name}} - {{e.age}}</li>
  </ul>
  `,
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  public employee=[];

  constructor(private _employeeServiceService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employee=this._employeeServiceService.getEmployee();
  }

}