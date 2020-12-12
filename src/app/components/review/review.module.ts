import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReviewRoutingModule } from "./review-routing.module";
import { ReviewComponent } from "./review.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
  declarations: [ReviewComponent],
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
  ],
})
export class ReviewModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/review/", ".json");
}
