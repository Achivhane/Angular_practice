import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userModel=new user('Miss','Asmita','TV','Assignment number to about advertisement');
  title = 'AdvertisementForm';
  titles=['Miss', 'Mrs', 'Mr'];
  Category=['TV', 'Fridge'];
}
