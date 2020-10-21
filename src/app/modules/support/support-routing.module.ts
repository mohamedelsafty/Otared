import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SupportBaseComponent } from "./components/support-base/support-base.component";
import { SupportDashboardComponent } from "./components/support-dashboard/support-dashboard.component";
import { SupportClientComponent } from "./components/support-client/support-client.component";
import { SupportManageRequestsComponent } from "./components/support-manage-requests/support-manage-requests.component";
import { SupportClientDetailsComponent } from "./components/support-client-details/support-client-details.component";
import { SupportNewAccountsComponent } from "./components/support-new-accounts/support-new-accounts.component";
import { SupportDeleteProjectsComponent } from "./components/support-delete-projects/support-delete-projects.component";
import { SupportDetailsProjectsComponent } from "./components/support-details-projects/support-details-projects.component";
import { SupportRequestsTypeComponent } from "./components/support-requests-type/support-requests-type.component";
import { SupportRequestsDetailsComponent } from "./components/support-requests-details/support-requests-details.component";
import { SupportReportsComponent } from "./components/support-reports/support-reports.component";
import { SupportReportsDetailsComponent } from "./components/support-reports-details/support-reports-details.component";
import { SupportProfileComponent } from "./components/support-profile/support-profile.component";
import { SupportNewDevelopersComponent } from "./components/support-new-developers/support-new-developers.component";
import { SupportPropertyComponent } from "./components/support-property/support-property.component";
import { SupportNewDevelopersDetailsComponent } from "./components/support-new-developers-details/support-new-developers-details.component";
import { SupportAllUnitsComponent } from "./components/support-all-units/support-all-units.component";

const routes: Routes = [
  {
    path: "",
    component: SupportBaseComponent,
    children: [
      {
        path: "suggestions",
        loadChildren: () =>
          import("../../shared/modules/suggestions/suggestions.module").then(
            (m) => m.SuggestionsModule
          ),
      },
      {
        path: "dashboard",
        component: SupportDashboardComponent,
        pathMatch: "full",
      },
      { path: "support-client", component: SupportClientComponent },
      {
        path: "support-manage-requests",
        component: SupportManageRequestsComponent,
      },
      {
        path: "support-client-details",
        component: SupportClientDetailsComponent,
      },
      {
        path: "support-new-accounts",
        component: SupportNewAccountsComponent,
      },
      {
        path: "support-delete-projects",
        component: SupportDeleteProjectsComponent,
      },
      {
        path: "support-details-projects",
        component: SupportDetailsProjectsComponent,
      },
      {
        path: "support-reports",
        component: SupportReportsComponent,
      },
      {
        path: "support-reports-details",
        component: SupportReportsDetailsComponent,
      },
      {
        path: "support-profile",
        component: SupportProfileComponent,
      },
      {
        path: "support-new-developer",
        component: SupportNewDevelopersComponent,
      },
      {
        path: "support-new-developer/:id",
        component: SupportNewDevelopersDetailsComponent,
      },
      {
        path: "support-property",
        component: SupportPropertyComponent,
      },
      {
        path: "support-manage-requests/support-requests-type",
        component: SupportRequestsTypeComponent,
      },
      {
        path: "support-all-units",
        component: SupportAllUnitsComponent,
      },
      {
        path: "support-manage-requests/support-requests-type/:id",
        component: SupportRequestsDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
