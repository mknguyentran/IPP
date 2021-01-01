import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {

} from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ipp-frontend';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('vi_VN');
  }
}
