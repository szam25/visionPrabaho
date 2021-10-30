import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened: boolean = false;
  showSidePanel(){
    this.opened=true;
    console.log("opened called");
  }
  closeSidePanel(){
    this.opened=false;
  }
}
