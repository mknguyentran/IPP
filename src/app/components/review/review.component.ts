import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
})
export class ReviewComponent implements OnInit {
  @ViewChild("slider") slider: ElementRef;
  constructor(private translate: TranslateService) {
    translate.currentLang = "";
    translate.use("vi_VN");
  }

  ngOnInit(): void {}

  scrollRight(): void {
    console.log("a");

    this.slider.nativeElement.scrollRight = 100;
    console.log(this.slider.nativeElement.scrollRight);
  }
}
