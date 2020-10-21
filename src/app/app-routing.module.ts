import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./shared/services/auth-guard.service";
import { LoginGuard } from "./shared/services/login-guard.service";
const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
    canActivate: [LoginGuard],
  },
  {
    path: "",
    loadChildren: () =>
    import("./modules/home/home.module").then(
      (m) => m.HomeModule
    ),
  },
  {
    path: "developer",
    loadChildren: () =>
      import("./modules/developer/developer.module").then(
        (m) => m.DeveloperModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "customer",
    loadChildren: () =>
      import("./modules/customer/customer.module").then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: "calc",
    loadChildren: () =>
      import("./modules/calc/calc.module").then((m) => m.CalcModule),
  },
  {
    path: "purchasing",
    loadChildren: () =>
      import("./modules/purchasing/purchasing.module").then(
        (m) => m.PurchasingModule
      ),
  },
  {
    path: "support",
    loadChildren: () =>
      import("./modules/support/support.module").then((m) => m.SupportModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
