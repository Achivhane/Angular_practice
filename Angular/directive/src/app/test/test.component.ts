import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template : `<h2>ngSwitch Directive</h2>
  <h3>For Red Color</h3>
    <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You Picked Up Red Color</div>
    <div *ngSwitchCase="'green'">You Picked Up Green Color</div>
    <div *ngSwitchCase="'yellow'">You Picked Up Yellow Color</div>
    </div>

    <h3>For Green Color</h3>
    <div [ngSwitch]="color1">
    <div *ngSwitchCase="'red'">You Picked Up Red Color</div>
    <div *ngSwitchCase="'green'">You Picked Up Green Color</div>
    <div *ngSwitchCase="'yellow'">You Picked Up Yellow Color</div>
    </div>
  
    <h3>For yellow Color</h3>
    <div [ngSwitch]="color2">
    <div *ngSwitchCase="'red'">You Picked Up Red Color</div>
    <div *ngSwitchCase="'green'">You Picked Up Green Color</div>
    <div *ngSwitchCase="'yellow'">You Picked Up Yellow Color</div>
    </div>
    
    <h3>Default ---->Pick Again</h3>
    <div [ngSwitch]="color3">
    <div *ngSwitchCase="'red'">You Picked Up Red Color</div>
    <div *ngSwitchCase="'green'">You Picked Up Green Color</div>
    <div *ngSwitchCase="'yellow'">You Picked Up Yellow Color</div>
    <div *ngSwitchDefault="'orange'">Pick Again Color Is Not Available</div>
    </div>
    <br><br><br>
    <h2>ngFor Directives</h2>
    <h3>to display all element in array of colors</h3>
    <div *ngFor="let color of colors">
    <h2>{{color}}</h2>
    </div>
    <br>
    <h3>to display first element in array of colors</h3>
    <div *ngFor="let color of colors; first as f">
    <h2>{{f}} {{color}}</h2>
    </div>
    <br>
    <h3>to display index to all element in array of colors</h3>
    <div *ngFor="let color of colors; index as i">
    <h2>{{i}} {{color}}</h2>
    </div>
    <br>
    <h3>to display last element in array of colors</h3>
    <div *ngFor="let color of colors; last as l">
    <h2>{{l}} {{color}}</h2>
    </div>
    <br>
    <h3>to display odd element in array of colors</h3>
    <div *ngFor="let color of colors; odd as o">
    <h2>{{o}} {{color}}</h2>
    </div>
    <br>
    <h3>to display even element in array of colors</h3>
    <div *ngFor="let color of colors; even as e">
    <h2>{{e}} {{color}}</h2>
    </div>
  <br><br>
  <h2>Assigning True and false value</h2>
  <h2 *ngIf="false">If false then Hi Asmi! will not visible on output screen</h2>
  <h2 *ngIf="true">If true then Hi Asmi! will be visible on output screen</h2>
  <h2>Assigning property value</h2>
  <h2 *ngIf="displayName">Asmita</h2>
  <h2 *ngIf="DisplayName">Divya</h2>
  <h2>If Else block</h2>
  <h3>it will execute if part</h3>
  <h2 *ngIf="displayName; else elseBlock">
  Asmita</h2>
  
  <ng-template #elseBlock>
  <h2 *ngIf="displayName">
  Name is hidden</h2>
  </ng-template>

  <h3>it will execute else part</h3>
  <h2 *ngIf="DisplayName; else elseBlock">
  Asmita</h2>
  
  <ng-template #elseBlock>
  <h2 *ngIf="displayName">
  Name is hidden</h2>
  </ng-template>

  <h2>Alternate syntax of if else</h2>
  <h3>it will execute then part</h3>
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
  <h2>
  Pinki</h2>
  </ng-template>

  <ng-template #elseBlock>
  <h2>
  Name is hidden</h2>
  </ng-template>

  <h2>Alternate syntax of if else</h2>
  <h3>it will execute else part</h3>
  <div *ngIf="DisplayName; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
  <h2>
  Asmita</h2>
  </ng-template>

  <ng-template #elseBlock>
  <h2>
  Name is hidden</h2>
  </ng-template>
  <br><br>
  <h2>Component Interaction</h2>
  <h3>sending data from parent to child</h3>
  <h2>{{"Hello " +parentData}}</h2>
  <h3>sending data from child to parent</h3>
  <button (onClick)="FireEvent">Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public color= "red";
  public color1= "green";
  public color2= "yellow";
  public color3= "blue";

public colors=["red","blue","green","orange","pink","black","white"];

@Input() public parentData;
@Output() public childEvent = new EventEmitter;

  displayName=true;
  DisplayName=false;
  constructor() { }

  ngOnInit(): void {
  }
 FireEvent(){
   this.childEvent.emit('hello Asmita Chivhane');
 }
}
