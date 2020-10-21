import { SharedModule } from "src/app/shared/modules/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SupportRoutingModule } from "./support-routing.module";
import { SupportBaseComponent } from "./components/support-base/support-base.component";
import { SupportDashboardComponent } from "./components/support-dashboard/support-dashboard.component";
import { SupportManageRequestsComponent } from "./components/support-manage-requests/support-manage-requests.component";
import { SupportClientComponent } from "./components/support-client/support-client.component";
import {
  MatSidenavModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatDialogModule,
} from "@angular/material";
import { SupportClientDeleteComponent } from "./components/support-client-delete/support-client-delete.component";
import { SupportClientBlockComponent } from "./components/support-client-block/support-client-block.component";
import { SupportClientDetailsComponent } from "./components/support-client-details/support-client-details.component";
import { SupportNewAccountsComponent } from "./components/support-new-accounts/support-new-accounts.component";
import { SupportNewAccountsAcceptanceComponent } from "./components/support-new-accounts-acceptance/support-new-accounts-acceptance.component";
import { SupportNewAccountsRefuseComponent } from "./components/support-new-accounts-refuse/support-new-accounts-refuse.component";
import { SupportDeleteProjectsComponent } from "./components/support-delete-projects/support-delete-projects.component";
import { SupportDetailsProjectsComponent } from "./components/support-details-projects/support-details-projects.component";
import { SupportRequestAcceptanceComponent } from "./components/support-request-acceptance/support-request-acceptance.component";
import { SupportRequestRefuseComponent } from "./components/support-request-refuse/support-request-refuse.component";
import { SupportRequestsTypeComponent } from "./components/support-requests-type/support-requests-type.component";
import { SupportRequestsDetailsComponent } from "./components/support-requests-details/support-requests-details.component";
import { SupportRequestsDetailsStatusComponent } from "./components/support-requests-details-status/support-requests-details-status.component";
import { SupportRequestsDetailsRefuseComponent } from "./components/support-requests-details-refuse/support-requests-details-refuse.component";
import { SupportReportsComponent } from "./components/support-reports/support-reports.component";
import { SupportReportsDetailsComponent } from "./components/support-reports-details/support-reports-details.component";
import { SupportProfileComponent } from "./components/support-profile/support-profile.component";
import { SupportChangePasswordComponent } from "./components/support-change-password/support-change-password.component";
import { SupportLogoffComponent } from "./components/support-logoff/support-logoff.component";
import { SupportNewDevelopersComponent } from "./components/support-new-developers/support-new-developers.component";
import { SupportPropertyComponent } from "./components/support-property/support-property.component";
import { SupportNewDevelopersDetailsComponent } from "./components/support-new-developers-details/support-new-developers-details.component";
import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { SupportChangeStateDialogComponent } from "./components/support-change-state-dialog/support-change-state-dialog.component";
import { SupportUniteDetailsDialogComponent } from "./components/support-unite-details-dialog/support-unite-details-dialog.component";
import { SupportAllUnitsComponent } from './components/support-all-units/support-all-units.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: "auto",
};

@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    SwiperModule,
  ],

  declarations: [
    SupportBaseComponent,
    SupportDashboardComponent,
    SupportManageRequestsComponent,
    SupportClientComponent,
    SupportClientDeleteComponent,
    SupportClientBlockComponent,
    SupportNewAccountsComponent,
    SupportNewAccountsAcceptanceComponent,
    SupportNewAccountsRefuseComponent,
    SupportClientDetailsComponent,
    SupportDeleteProjectsComponent,
    SupportDetailsProjectsComponent,
    SupportRequestAcceptanceComponent,
    SupportRequestRefuseComponent,
    SupportRequestsTypeComponent,
    SupportRequestsDetailsComponent,
    SupportRequestsDetailsStatusComponent,
    SupportRequestsDetailsRefuseComponent,
    SupportReportsComponent,
    SupportReportsDetailsComponent,
    SupportProfileComponent,
    SupportChangePasswordComponent,
    SupportLogoffComponent,
    SupportNewDevelopersComponent,
    SupportPropertyComponent,
    SupportNewDevelopersDetailsComponent,
    SupportChangeStateDialogComponent,
    SupportUniteDetailsDialogComponent,
    SupportAllUnitsComponent,
  ],
  entryComponents: [
    SupportNewAccountsAcceptanceComponent,
    SupportNewAccountsRefuseComponent,
    SupportRequestsDetailsStatusComponent,
    SupportRequestsDetailsRefuseComponent,
    SupportChangeStateDialogComponent,
    SupportUniteDetailsDialogComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class SupportModule {}
