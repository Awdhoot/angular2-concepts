import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  testProp = "hello";

  constructor(){

  }
  handleMe(value: any) {
    this.title = value;
  }

}
