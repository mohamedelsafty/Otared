import { CalcAvailableOffersComponent } from "./components/calc-available-offers/calc-available-offers.component";
import { CalcSupportInformationComponent } from "./components/calc-support-information/calc-support-information.component";
import { CalcBaseComponent } from "./components/calc-base/calc-base.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalcPersonalInformationComponent } from "./components/calc-personal-information/calc-personal-information.component";
import { CalcGuardService } from "./services/calc-guard.service";
import { CalcBrowsingGuardService } from "./services/calc-browsing-guard.service";

const routes: Routes = [
  {
    path: "",
    component: CalcBaseComponent,
    children: [
      {
        path: "personal-information",
        component: CalcPersonalInformationComponent,
        canActivate: [CalcGuardService]
      },
      {
        path: "support-information",
        component: CalcSupportInformationComponent,
        canActivate: [CalcGuardService]
      },
      {
        path: "available-offers",
        component: CalcAvailableOffersComponent,
        canActivate: [CalcGuardService]
      },
      {
        path: "",
        redirectTo: "/calc/personal-information",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcRoutingModule {}
