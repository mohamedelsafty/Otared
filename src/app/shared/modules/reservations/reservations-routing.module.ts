import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsDetailsComponent } from './components/reservations-details/reservations-details.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';


const routes: Routes = [
{path: "", component:ReservationsListComponent, data : {target : 'reservationsRequests'}},
{path: "show/:id", component: ReservationsDetailsComponent, data : {target : 'reservationsRequests'}},
{path: "accepted", component:ReservationsListComponent, data : {target : 'reservations'}},
{path: "accepted/show/:id", component: ReservationsDetailsComponent, data : {target : 'reservations'}},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
