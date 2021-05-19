import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
   public employee=[];
  constructor(private _employeeService: EmployeeService) { }

  

  ngOnInit(): void {
    this._employeeService.getEmployees();
     

  }
}
