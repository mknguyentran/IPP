import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
  slider = document.getElementById("slider");
  readonly reviewBoxWidth: number = 350;

  constructor(private translate: TranslateService) {
    smoothscroll.polyfill();
    translate.currentLang = "";
    translate.use("vi_VN");
  }

  ngOnInit(): void {}

  scrollLeft(): void {
    this.slider.scrollBy({
      top: 0,
      left: this.reviewBoxWidth,
      behavior: "smooth",
    });
  }

  scrollRight(): void {
    this.slider.scrollBy({
      top: 0,
      left: -this.reviewBoxWidth,
      behavior: "smooth",
    });
  }
}
