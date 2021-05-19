import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
@Component({
  selector: 'app-emp-list',
  template: `
  <h2>Employee List</h2>\
  <ul *ngFor="let e of employees">
  <li>{{e.name}}</li>
  </ul>
  `,
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public employees=[];

  constructor(private _employeeServiceService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employees=this._employeeServiceService.getEmployee();
  }

}
