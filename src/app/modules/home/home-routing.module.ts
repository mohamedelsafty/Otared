import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandPageComponent } from "./components/land-page/land-page.component";
import { AboutPageComponent } from "./components/about-page/about-page.component";
import { HomeBaseComponent } from "./components/home-base/home-base.component";
import { TermsComponent } from "./components/terms/terms.component";
import { PublicInstancesPageComponent } from './components/public-instances-page/public-instances-page.component';
import { PublicDeveloperPageComponent } from './components/public-developer-page/public-developer-page.component';
import { PublicInstanceComponent } from './components/public-instance/public-instance.component';

const routes: Routes = [
  {
    path: "",
    component: HomeBaseComponent,
    children: [
      {
        path: "",
        component: LandPageComponent,
        pathMatch: "full",
      },
      {
        path: "constructors",
        component: AboutPageComponent,
        pathMatch: "full",
      },
      {
        path: "terms",
        component: TermsComponent,
        pathMatch: "full",
      },
      {
        path: "instances",
        component: PublicInstancesPageComponent,
        pathMatch: "full",
      },
      {
        path: "shared-developer/:id",
        data:{sharedTarget:'developer'},
        component: PublicDeveloperPageComponent,
        pathMatch: "full",
      },
      {
        path: "shared-project/:id",
        data:{sharedTarget:'project'},
        component: PublicDeveloperPageComponent,
        pathMatch: "full",
      },
      {
        path: "shared-instance/:id",
        data:{shared:true},
        component: PublicInstanceComponent,
        pathMatch: "full",
      },
      {
        path: "instance/:id",
        data:{shared:false},
        component: PublicInstanceComponent,
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
