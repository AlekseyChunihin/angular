import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() onNewTurn:EventEmitter<number> = new EventEmitter<number>();
  timer: number;
  num: number = 0;

  constructor() { }

  ngOnInit() {
  }
   onGameStart() {
    this.timer = window.setInterval(() => {
      this.onNewTurn.emit(++this.num);
    }, 1000);
  }

  onGamePause() {
    window.clearInterval(this.timer);
  }

}
