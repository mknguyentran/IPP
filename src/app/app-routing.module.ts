import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./components/home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: "review",
    loadChildren: () =>
      import("./components/review/review.module").then((m) => m.ReviewModule),
  },
  {
    path: "",
    redirectTo: "/review",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "/review",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
