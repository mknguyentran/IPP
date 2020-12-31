import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentReply: number;
  displayReply: boolean = false;
  displayedReply: boolean = false;
  displayingReplyTimeout: number = 1200;
  displayedReplyTimeout: number = 500;
  constructor() {}

  ngOnInit(): void {}

  chooseReply(replyNumber: number): void {
    this.currentReply = replyNumber;
    setTimeout(() => {
      this.displayReply = true;
      setTimeout(() => {
        this.displayedReply = true;
      }, this.displayedReplyTimeout);
    }, this.displayingReplyTimeout);
  }
}
