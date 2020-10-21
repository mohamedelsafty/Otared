import { DevProfileDialogComponent } from "./components/dev-profile-dialog/dev-profile-dialog.component";

import { SharedModule } from "./../../shared/modules/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DeveloperRoutingModule } from "./developer-routing.module";
import { DeveloperBaseComponent } from "./components/developer-base/developer-base.component";
import { DeveloperDashboardComponent } from "./components/developer-dashboard/developer-dashboard.component";

import { MatDatepickerModule } from "@angular/material/datepicker";

import {
  MatSidenavModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule,
} from "@angular/material";
import { DevProfileComponent } from "./components/dev-profile/dev-profile.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DeveloperSettingsComponent } from './components/developer-settings/developer-settings.component';
import { DevMarketingComponent } from './components/dev-marketing/dev-marketing.component';

@NgModule({
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    RouterModule,
    FormsModule,
    MatTooltipModule
  ],
  declarations: [
    DeveloperBaseComponent,
    DeveloperDashboardComponent,
    DevProfileComponent,
    DevProfileDialogComponent,
    DeveloperSettingsComponent,
    DevMarketingComponent,
  ],
  entryComponents: [DevProfileDialogComponent],
})
export class DeveloperModule {}
