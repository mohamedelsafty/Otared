import { SharedModule } from "./../../shared/modules/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PurchasingRoutingModule } from "./purchasing-routing.module";
import { PurchasingBaseComponent } from "./components/purchasing-base/purchasing-base.component";
import { PurchasingIsRealEstateComponent } from "./components/purchasing-is-real-estate/purchasing-is-real-estate.component";
import { FormsModule } from "@angular/forms";
import { PurchasingRealEstateTypeComponent } from "./components/purchasing-real-estate-type/purchasing-real-estate-type.component";
import { PurchasingFirstBatchComponent } from "./components/purchasing-first-batch/purchasing-first-batch.component";
import { PurchasingPersonalInformationComponent } from "./components/purchasing-personal-information/purchasing-personal-information.component";
import { PurchasingMonthlyFeesComponent } from "./components/purchasing-monthly-fees/purchasing-monthly-fees.component";
import { PurchasingFinancialDefaultComponent } from "./components/purchasing-financial-default/purchasing-financial-default.component";
import { PurchasingIncomeSourcesComponent } from "./components/purchasing-income-sources/purchasing-income-sources.component";
import { PurchasingSolidarityComponent } from "./components/purchasing-solidarity/purchasing-solidarity.component";
import { Ng5SliderModule } from "ng5-slider";
import { PurchasingOffersComponent } from "./components/purchasing-offers/purchasing-offers.component";
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from "@angular/material";

@NgModule({
  declarations: [
    PurchasingBaseComponent,
    PurchasingIsRealEstateComponent,
    PurchasingRealEstateTypeComponent,
    PurchasingFirstBatchComponent,
    PurchasingPersonalInformationComponent,
    PurchasingMonthlyFeesComponent,
    PurchasingFinancialDefaultComponent,
    PurchasingIncomeSourcesComponent,
    PurchasingSolidarityComponent,
    PurchasingOffersComponent
  ],
  imports: [
    CommonModule,
    PurchasingRoutingModule,
    SharedModule,
    FormsModule,
    Ng5SliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class PurchasingModule {}
