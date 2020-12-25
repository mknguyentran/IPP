import { Component, HostListener, OnInit } from '@angular/core';
import { AchievementResponse } from '@models';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-achievement-detail',
  templateUrl: './achievement-detail.component.html',
  styleUrls: ['./achievement-detail.component.scss'],
})
export class AchievementDetailComponent implements OnInit {
  achievement: AchievementResponse;
  contentIsUnderHeader: boolean = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.config.data) {
      this.achievement = this.config.data;
    }
  }

  onScroll(event: any): void{
    if (event.srcElement.scrollTop && event.srcElement.scrollTop > 10) {
      this.contentIsUnderHeader = true;
    } else {
      this.contentIsUnderHeader = false;
    }
  }

  closeDialog(): void {
    this.ref.close();
  }

  showReview(): void{
    if (this.achievement.ReviewUrl) {
      window.open(this.achievement.ReviewUrl);
    }
  }
}
