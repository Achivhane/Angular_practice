import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployee(){
    return[
    {"id": 1 , "name":"Asmita" , "age": 23},
    {"id": 2, "name":"Divya" , "age": 28},
    {"id":3 , "name": "Shubham" , "age":26} 
  ];
}
}
