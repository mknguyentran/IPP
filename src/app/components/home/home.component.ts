import { Component, OnInit } from '@angular/core';
import { ReviewService } from '@apis';
import { AchievementResponse } from '@models';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../base.component';
import smoothscroll from 'smoothscroll-polyfill';
import { AchievementDetailComponent } from '../review/achievement-detail/achievement-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DialogService],
})
export class HomeComponent extends BaseComponent implements OnInit {
  currentReply: number;
  displayReply: boolean = false;
  displayedReply: boolean = false;
  achievementList: AchievementResponse[] = new Array();
  displayingReplyTimeout: number = 1200;
  readonly scrollStep: number = 350 + 75;
  readonly contentWidth: string = '1200px';
  displayedReplyTimeout: number = 500;
  constructor(
    private translate: TranslateService,
    private reviewService: ReviewService,
    public dialogService: DialogService
  ) {
    super();
    smoothscroll.polyfill();
    translate.currentLang = '';
    translate.use('vi_VN');
  }

  ngOnInit(): void {
    this.getAchievement();
  }

  chooseReply(replyNumber: number): void {
    if (!this.currentReply) {
      this.currentReply = replyNumber;
    }
  }

  discardChoice(): void {
    delete this.currentReply;
  }

  scrollRight(el: HTMLElement): void {
    el.scrollBy({
      top: 0,
      left: this.scrollStep,
      behavior: 'smooth',
    });
  }

  scrollLeft(el: HTMLElement): void {
    el.scrollBy({
      top: 0,
      left: -this.scrollStep,
      behavior: 'smooth',
    });
  }

  getAchievement(): void {
    this.reviewService
      .getAchievemnt()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        response.forEach(async (achievement, i) => {
          if (achievement.ThumbnailImageUrl) {
            await this.checkImage(achievement.ThumbnailImageUrl, (isExist) => {
              if (!isExist) {
                delete achievement.ThumbnailImageUrl;
              }
            });
          }
          if (achievement.DetailImage) {
            achievement.DetailImage.forEach(async (url, index) => {
              await this.checkImage(url, (isExist) => {
                if (!isExist) {
                  delete achievement.DetailImage[index];
                }
              });
            });
          }
        });
        this.achievementList = response;
      });
  }

  openAchievementDetail(achievement: AchievementResponse): void {
    const ref = this.dialogService.open(AchievementDetailComponent, {
      data: achievement,
      width: this.contentWidth,
      showHeader: false,
      dismissableMask: true,
      contentStyle: {
        'border-radius': '10px',
        'background-color': 'rgba(255,255,255,0.9)',
        '-webkit-backdrop-filter': 'saturate(180%) blur(20px)',
        'backdrop-filter': 'saturate(180%) blur(20px)',
        padding: '0',
        height: '80vh',
        'overflow-y': 'hidden',
      },
    });
  }
}
