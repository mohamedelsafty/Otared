import { SharedModule } from "./../../shared/modules/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CalcRoutingModule } from "./calc-routing.module";
import { CalcBaseComponent } from "./components/calc-base/calc-base.component";
import {
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalcSupportInformationComponent } from "./components/calc-support-information/calc-support-information.component";
import { CalcAvailableOffersComponent } from "./components/calc-available-offers/calc-available-offers.component";
import { CalcPersonalInformationComponent } from "./components/calc-personal-information/calc-personal-information.component";

@NgModule({
  declarations: [
    CalcBaseComponent,
    CalcPersonalInformationComponent,
    CalcSupportInformationComponent,
    CalcAvailableOffersComponent
  ],
  imports: [
    CommonModule,
    CalcRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: []
})
export class CalcModule {}
