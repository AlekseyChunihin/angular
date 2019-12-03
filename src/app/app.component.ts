import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLab2';
  events: string[] = [];

  updateGameState(data){
    
    if ( data % 2 === 0) {
      this.events.push(`${data}. even`);
    } else {
      this.events.push(`${data}. odd`);
    }
  }
}
