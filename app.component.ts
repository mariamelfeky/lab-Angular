import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show :number = 1 ;
  showStudent(){
    this.show = 1;
  }
  showDept(){
    this.show = 2;
  }
}
