import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitRequestsListComponent } from './components/visit-requests-list/visit-requests-list.component';
import { VisitDetailsComponent } from './components/visit-details/visit-details.component';


const routes: Routes = [
  {path: "", component:VisitRequestsListComponent},
  {path: "show/:id", component: VisitDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
