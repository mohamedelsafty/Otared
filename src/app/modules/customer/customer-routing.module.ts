import { CustomerSettingsComponent } from "./components/customer-settings/customer-settings.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerProfileComponent } from "./components/customer-profile/customer-profile.component";
import { CustomerBaseComponent } from "./components/customer-base/customer-base.component";
import { CustomerFinanceRequestComponent } from "./components/customer-finance-request/customer-finance-request.component";
import { CustomerFinanceDetailsComponent } from "./components/customer-finance-details/customer-finance-details.component";
import { CustomerFavouriteComponent } from "./components/customer-favourite/customer-favourite.component";
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [
  {
    path: "",
    component: CustomerBaseComponent,
    children: [
      {
        path: "profile",
        component: CustomerProfileComponent,
        pathMatch: "full",
      },
      {
        path: "suggestions",
        loadChildren: () =>
          import("../../shared/modules/suggestions/suggestions.module").then(
            (m) => m.SuggestionsModule
          ),
      },
      {
        path: "finance/request",
        component: CustomerFinanceRequestComponent,
        pathMatch: "full",
      },
      {
        path: "finance/calc",
        component: EmptyComponent,
        pathMatch: "full",
      },
      {
        path: "finance/details",
        component: CustomerFinanceDetailsComponent,
        pathMatch: "full",
      },
      { path: "favourite", component: CustomerFavouriteComponent },
      { path: "settings", component: CustomerSettingsComponent },
      {
        path: "visits",
        loadChildren: () =>
          import("../../shared/modules/visits/visits.module").then(
            (m) => m.VisitsModule
          ),
      },
      {
        path: "notifications",
        component: EmptyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
