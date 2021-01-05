import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToSocialPage(socialPage: number): void {
    let socialPageUrl: string = '';
    if (socialPage === 1) {
      socialPageUrl = 'https://www.facebook.com/ippielts.hcmc';
    } else if (socialPage === 2) {
      socialPageUrl =
        'https://www.youtube.com/channel/UCFVXEgU2ecd05af3h0Cb4Dw';
    } else if (socialPage === 3) {
      socialPageUrl = 'https://www.instagram.com/ipp_dailyielts/';
    }
    window.open(socialPageUrl);
  }
}
