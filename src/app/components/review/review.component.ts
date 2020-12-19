import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import smoothscroll from 'smoothscroll-polyfill';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ReviewService } from '@apis';
import { ReviewResponse } from '@models';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  private readonly destroy$ = new Subject();

  chevronLeft = faChevronLeft;
  chevronRight = faChevronRight;
  reviewList: ReviewResponse[] = new Array();
  readonly scrollStep: number = 350 + 75;

  constructor(
    private translate: TranslateService,
    private reviewService: ReviewService,
    private fb: FacebookService
  ) {
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
      .subscribe((review) => {
        this.reviewList = review;
        this.initFacebook();
      });
  }
}
