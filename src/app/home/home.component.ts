import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() name: string = "angular";
  temp: string;
  constructor() {
    console.log('in constructor', this.name);
  }

  ngOnInit() {
    console.log('ngOnInit of Home');
  }

  ngDoCheck(){
    console.log('in do check HOME');
  }

  ngOnChanges(){
    console.log('ngOnChanges of HOME', this.name);
  }

  ngAfterViewInit(){
    console.log('after view init of HOME');
  }

  ngAfterContentInit(){
    console.log('content init of HOME');
  }

  ngAfterViewChecked(){
    console.log('view checked of HOME');
  }
  ngAfterContentChecked(){
    console.log('content checked of HOME',this.name);
  }

}
