import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor() { }
  
  isChecked : boolean = true; 
  ngOnInit(): void {
    
  }
  switchOption(){
    if(document.getElementById('account')?.hasAttribute('checked')) {
      this.isChecked=true;
  }
  else
  this.isChecked=false;
  
}
}
