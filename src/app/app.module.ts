import { HttpService } from "./shared/services/http.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatRadioModule } from "@angular/material/radio";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthService } from "./shared/services/auth.service";
import { AuthGuard } from "./shared/services/auth-guard.service";
import { MatSnackBarModule } from "@angular/material";
import { LoginGuard } from "./shared/services/login-guard.service";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    RouterModule,
    HttpClientModule,
    MatSnackBarModule,
    LoadingBarRouterModule
  ],
  providers: [HttpService, AuthService, AuthGuard, LoginGuard],

  bootstrap: [AppComponent]
})
export class AppModule {}
