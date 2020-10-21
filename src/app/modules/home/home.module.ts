import { SharedModule } from "src/app/shared/modules/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { LandPageComponent } from "./components/land-page/land-page.component";
import { AboutPageComponent } from "./components/about-page/about-page.component";
import { HomeBaseComponent } from "./components/home-base/home-base.component";
import { TermsComponent } from "./components/terms/terms.component";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatProgressSpinnerModule } from "@angular/material";
import { SubscriptionModalComponent } from "./components/subscription-modal/subscription-modal.component";
import { PublicInstancesPageComponent } from "./components/public-instances-page/public-instances-page.component";
import { LoginDialogComponent } from "./components/login-dialog/login-dialog.component";
import { VisitRequestDialogComponent } from "./components/visit-request-dialog/visit-request-dialog.component";
import { FilterInstancesComponent } from "./components/filter-instances/filter-instances.component";
import { PublicDeveloperPageComponent } from "./components/public-developer-page/public-developer-page.component";
import { PublicInstanceComponent } from "./components/public-instance/public-instance.component";
import {
  SwiperConfigInterface,
  SwiperModule,
  SWIPER_CONFIG
} from "ngx-swiper-wrapper";
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: "auto"
};
import { Ng5SliderModule } from "ng5-slider";

@NgModule({
  declarations: [
    LandPageComponent,
    AboutPageComponent,
    HomeBaseComponent,
    TermsComponent,
    SubscriptionModalComponent,
    PublicInstancesPageComponent,
    LoginDialogComponent,
    VisitRequestDialogComponent,
    FilterInstancesComponent,
    PublicDeveloperPageComponent,
    PublicInstanceComponent
  ],
  providers: [
    DecimalPipe,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  imports: [
    SwiperModule,
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatButtonModule,
    SharedModule,
    MatProgressSpinnerModule,
    Ng5SliderModule
  ]
})
export class HomeModule {}
