import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import smoothscroll from "smoothscroll-polyfill";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
})
export class ReviewComponent implements OnInit {
  chevronLeft = faChevronLeft;
  chevronRight = faChevronRight;
  readonly scrollStep: number = 350 + 75;

  constructor(private translate: TranslateService) {
    smoothscroll.polyfill();
    translate.currentLang = "";
    translate.use("vi_VN");
  }

  ngOnInit(): void {}

  scrollRight(el: HTMLElement): void {
    el.scrollBy({
      top: 0,
      left: this.scrollStep,
      behavior: "smooth",
    });
  }

  scrollLeft(el: HTMLElement): void {
    el.scrollBy({
      top: 0,
      left: -this.scrollStep,
      behavior: "smooth",
    });
  }
}
