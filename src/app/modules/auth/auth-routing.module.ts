import { DevRegisterFormComponent } from "./components/dev-register-form/dev-register-form.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthBaseComponent } from "./components/auth-base/auth-base.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { CustomerRegisterFormComponent } from "./components/customer-register-form/customer-register-form.component";
import { VerifyTokenComponent } from './components/verify-token/verify-token.component';

const routes: Routes = [
  {
    path: "",
    component: AuthBaseComponent,
    children: [
      { path: "login", component: LoginComponent, pathMatch: "full" },
      {
        path: "dev-register",
        component: DevRegisterFormComponent,
        pathMatch: "full",
      },
      {
        path: "customer-register",
        component: CustomerRegisterFormComponent,
        pathMatch: "full",
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
        pathMatch: "full",
      },
      {
        path: "verify",
        component: VerifyTokenComponent,
        pathMatch: "full",
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent,
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
