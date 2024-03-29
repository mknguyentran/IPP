import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FacebookModule } from 'ngx-facebook';
import { AchievementDetailComponent } from './achievement-detail/achievement-detail.component';

@NgModule({
  declarations: [ReviewComponent, AchievementDetailComponent],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
    FacebookModule.forRoot(),
    FontAwesomeModule,
    DynamicDialogModule,
  ],
  entryComponents: [AchievementDetailComponent],
})
export class ReviewModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/review/', '.json');
}
