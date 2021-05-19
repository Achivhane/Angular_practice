import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  welcome {{name}}
  </h2>
  <h2>Asmita</h2>
  <h2>class binding</h2>
  <h2 class="text-success">Asmita</h2>
  <h2 class="text-denger">Asmita</h2>
  <h2 class="text-special">Asmita</h2>
  <h2 [class.text-denger]="hasError">Divya</h2>
  <h2 [ngClass]="massegeClass">Pinki</h2>
  <h2>Style Binding</h2>
  <h2 [style.color]="'orange'">Asmita</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Asmita</h2>
  <h2 [ngStyle]="style">Asmita</h2>
  <h2>event binding</h2>
  <button (click)="onClick($event)">GREETING</button>
  {{greeti}}
  <button (click)="greeti='welcome asmita'">ASMITA</button>
  <h2>template referance variable</h2>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">log</button>
   <h2>two way binding</h2>
   <input [(ngModel)]="names" type="text">
   {{names}}
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-denger{
    color:red;
  }
  .text-special{
      font-style:italic;
  }

  `]
})
export class TestComponent implements OnInit {
 public name ="pinki";
 public isSuccess ="text-success";
 public hasError =true;
 public isSpecial=true;
 public greeti =" ";
 public names="";
 public style = {
      "color":'blue',
      "font-style":'italic',
 };
 
 public massegeClass={
  "text-success": !this.hasError,
  "text-denger": this.hasError,
  "text-special": this.isSpecial
}
 
  constructor() { }

  ngOnInit(): void {
  }
onClick(event: any) {
 console.log(event);
 this.greeti='welcome to event binding';
}
logMessage(value: any){
 console.log(value);
}
}