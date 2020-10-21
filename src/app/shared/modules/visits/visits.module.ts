import { SharedModule } from "./../shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VisitsRoutingModule } from "./visits-routing.module";
import { VisitRequestsListComponent } from "./components/visit-requests-list/visit-requests-list.component";
import { VisitDetailsComponent } from "./components/visit-details/visit-details.component";
import { MatTableModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule, MatTooltipModule } from "@angular/material";
import { VisitsService } from './services/visits.service';

@NgModule({
  declarations: [VisitRequestsListComponent, VisitDetailsComponent],
  imports: [
    MatButtonModule,
    MatTableModule,
    CommonModule,
    VisitsRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,

  ],
  providers: [VisitsService]
})
export class VisitsModule {}
