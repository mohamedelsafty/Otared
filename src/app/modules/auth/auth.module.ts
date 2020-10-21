import { SharedModule } from "./../../shared/modules/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { DevRegisterFormComponent } from "./components/dev-register-form/dev-register-form.component";
import { DevRegisterDialogComponent } from "./components/dev-register-dialog/dev-register-dialog.component";
import { AuthBaseComponent } from "./components/auth-base/auth-base.component";
import { LoginComponent } from "./components/login/login.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { VerifyTokenComponent } from "./components/verify-token/verify-token.component";
import { CustomerRegisterFormComponent } from "./components/customer-register-form/customer-register-form.component";
import { CustomerRegisterDialogComponent } from "./components/customer-register-dialog/customer-register-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    DevRegisterFormComponent,
    DevRegisterDialogComponent,
    AuthBaseComponent,
    LoginComponent,
    LoginFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyTokenComponent,
    CustomerRegisterFormComponent,
    CustomerRegisterDialogComponent,
  ],
  providers: [],
  entryComponents: [
    DevRegisterDialogComponent,
    CustomerRegisterDialogComponent,
  ],
})
export class AuthModule {}
