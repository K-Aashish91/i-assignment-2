import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible : boolean = false;
  password ="ajgj123";
  count: number =0;
  log : string ="";
  counter : number [] = [];
  showhidepassword()
  {
    this.isVisible=!this.isVisible;
    
    this.counter.push(this.count+1);
    this.count = this.count+1;
    // this.log=this.log + "  " + this.count + "," ;
  }
}
