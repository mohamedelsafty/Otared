import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { ReservationsDetailsComponent } from './components/reservations-details/reservations-details.component';
import { MatTableModule, MatProgressSpinnerModule, MatSnackBarModule, MatTooltipModule, MatButtonModule } from '@angular/material';
import { SharedModule } from '../shared.module';
import { ReservationsService } from './services/reservations.service';


@NgModule({
  declarations: [ReservationsListComponent, ReservationsDetailsComponent],
  imports: [
    MatButtonModule,
    MatTableModule,
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
    ReservationsRoutingModule
  ],
  providers: [ReservationsService]
})
export class ReservationsModule { }
