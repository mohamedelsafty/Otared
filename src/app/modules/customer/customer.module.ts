import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerProfileComponent } from "./components/customer-profile/customer-profile.component";
import { CustomerBaseComponent } from "./components/customer-base/customer-base.component";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { CustomerFinanceRequestComponent } from "./components/customer-finance-request/customer-finance-request.component";
import { CustomerFinanceDetailsComponent } from "./components/customer-finance-details/customer-finance-details.component";

import {
  MatTableModule,
  MatButtonModule,
  MatExpansionModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { CustomerFavouriteComponent } from "./components/customer-favourite/customer-favourite.component";
import { CustomerSettingsComponent } from "./components/customer-settings/customer-settings.component";
import { FormsModule } from "@angular/forms";
import { CustomerChangePasswordComponent } from "./components/customer-change-password/customer-change-password.component";
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    FormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    CustomerProfileComponent,
    CustomerBaseComponent,
    CustomerFinanceRequestComponent,
    CustomerFinanceDetailsComponent,
    CustomerFavouriteComponent,
    CustomerSettingsComponent,
    CustomerChangePasswordComponent,
    EmptyComponent,
  ],
})
export class CustomerModule {}
