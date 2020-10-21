import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeveloperBaseComponent } from "./components/developer-base/developer-base.component";
import { DeveloperDashboardComponent } from "./components/developer-dashboard/developer-dashboard.component";
import { DevProfileComponent } from "./components/dev-profile/dev-profile.component";
import { DeveloperSettingsComponent } from "./components/developer-settings/developer-settings.component";
import { DeveloperGuard } from './services/developer-guard.service';
import { DevMarketingComponent } from './components/dev-marketing/dev-marketing.component';

const routes: Routes = [
  {
    path: "",
    component: DeveloperBaseComponent,
    children: [
      {
        path: "dashboard",
        component: DeveloperDashboardComponent,
        pathMatch: "full",
      },
      { path: "profile", component: DevProfileComponent, pathMatch: "full" },
      {
        path: "suggestions",
        loadChildren: () =>
          import("../../shared/modules/suggestions/suggestions.module").then(
            (m) => m.SuggestionsModule
          ),
      },
      {
        path: "marketing",
        pathMatch: "full",
        component: DevMarketingComponent
      },
      {
        path: "notifications",
        loadChildren: () =>
          import(
            "../../shared/modules/notifications/notifications.module"
          ).then((m) => m.NotificationsModule),
          canActivate: [DeveloperGuard]
      },

      {
        path: "reservations",
        loadChildren: () =>
        import("../../shared/modules/reservations/reservations.module").then(
          (m) => m.ReservationsModule
        ),
        canActivate: [DeveloperGuard]
      },
      {
        path: "settings",
        component: DeveloperSettingsComponent,
        canActivate: [DeveloperGuard]
      },
      {
        path: "visits",
        loadChildren: () =>
          import("../../shared/modules/visits/visits.module").then(
            (m) => m.VisitsModule
          ),
          canActivate: [DeveloperGuard]
      },

      {
        path: "projects",
        loadChildren: () =>
          import("../../shared/modules/projects/projects.module").then(
            (m) => m.ProjectsModule
          ),
          canActivate: [DeveloperGuard]
      },
      {
        path: "",
        redirectTo: "/developer/dashboard",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
