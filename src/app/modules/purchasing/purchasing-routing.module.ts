import { PurchasingBaseComponent } from "./components/purchasing-base/purchasing-base.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PurchasingIsRealEstateComponent } from "./components/purchasing-is-real-estate/purchasing-is-real-estate.component";
import { PurchasingRealEstateTypeComponent } from "./components/purchasing-real-estate-type/purchasing-real-estate-type.component";
import { PurchasingFirstBatchComponent } from "./components/purchasing-first-batch/purchasing-first-batch.component";
import { PurchasingPersonalInformationComponent } from "./components/purchasing-personal-information/purchasing-personal-information.component";
import { PurchasingMonthlyFeesComponent } from "./components/purchasing-monthly-fees/purchasing-monthly-fees.component";
import { PurchasingFinancialDefaultComponent } from "./components/purchasing-financial-default/purchasing-financial-default.component";
import { PurchasingIncomeSourcesComponent } from "./components/purchasing-income-sources/purchasing-income-sources.component";
import { PurchasingSolidarityComponent } from "./components/purchasing-solidarity/purchasing-solidarity.component";
import { PurchasingOffersComponent } from "./components/purchasing-offers/purchasing-offers.component";
import { PurchasingGuardService } from "./services/purchasing-guard.service";

const routes: Routes = [
  {
    path: "",
    component: PurchasingBaseComponent,
    children: [
      {
        path: "is-real-estate",
        component: PurchasingIsRealEstateComponent,
        canActivate: [PurchasingGuardService]
      },
      {
        path: "first-batch",
        component: PurchasingFirstBatchComponent,
        canActivate: [PurchasingGuardService]
      },
      // {
      //   path: "real-estate-type",
      //   component: PurchasingRealEstateTypeComponent,
      //   canActivate: [PurchasingGuardService]
      // },
      {
        path: "functional-info",
        component: PurchasingPersonalInformationComponent,
        canActivate: [PurchasingGuardService]
      },
      {
        path: "monthly-fees",
        component: PurchasingMonthlyFeesComponent,
        canActivate: [PurchasingGuardService]
      },
      {
        path: "financial-default",
        component: PurchasingFinancialDefaultComponent,
        canActivate: [PurchasingGuardService]
      },
      {
        path: "income-sources",
        component: PurchasingIncomeSourcesComponent,
        canActivate: [PurchasingGuardService]
      },
      {
        path: "solidarity",
        component: PurchasingSolidarityComponent,
        canActivate: [PurchasingGuardService]
      },
      {
        path: "offers",
        component: PurchasingOffersComponent,
        canActivate: [PurchasingGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule {}
