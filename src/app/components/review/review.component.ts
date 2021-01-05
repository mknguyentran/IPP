import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import smoothscroll from 'smoothscroll-polyfill';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ReviewService } from '@apis';
import { AchievementResponse, ReviewResponse } from '@models';
import { takeUntil } from 'rxjs/operators';
import { FacebookService, InitParams } from 'ngx-facebook';
import { BaseComponent } from '../base.component';
import { DialogService } from 'primeng/dynamicdialog';
import { AchievementDetailComponent } from './achievement-detail/achievement-detail.component';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  providers: [DialogService],
})
export class ReviewComponent extends BaseComponent implements OnInit {
  chevronLeft = faChevronLeft;
  chevronRight = faChevronRight;
  reviewList: ReviewResponse[] = new Array();
  achievementList: AchievementResponse[] = new Array();
  readonly scrollStep: number = 350 + 75;
  readonly contentWidth: string = '1200px';

  constructor(
    private translate: TranslateService,
    private reviewService: ReviewService,
    private fb: FacebookService,
    public dialogService: DialogService
  ) {
    super();
    smoothscroll.polyfill();
    translate.currentLang = '';
    translate.use('vi_VN');
  }

  initFacebook(): void {
    const initParams: InitParams = {
      appId: '1286728125017779',
      xfbml: true,
      version: 'v2.9',
    };
    this.fb.init(initParams);
  }

  ngOnInit(): void {
    this.getReview();
    this.getAchievement();
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

  getReview(): void {
    this.reviewService
      .getReview()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        // not yet
        // this.reviewList = reviews.sort((a, b) => {
        //   return a.InputtedAt - b.InputtedAt;
        // });
        this.reviewList = response;
        this.initFacebook();
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

  goToReview(url: string): void {
    window.open(url);
  }
}
