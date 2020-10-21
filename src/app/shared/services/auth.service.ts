import { Router } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { Injectable } from "@angular/core";
import { CustomerService } from "./customer.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  token: string;
  user: any = {};
  constructor(
    private http: HttpService,
    private router: Router,
    private customerService: CustomerService
  ) {}

  isLoading = false;

  getUser() {
    if (this.isLoggedIn()) {
      return JSON.parse(localStorage.getItem("currentUser"));
    }
  }
  saveSession(session, withoutRoute?) {
    localStorage.setItem("token", session["Bearer"]);
    this.user = session.data.profile;
    this.user.type = session.User.user_profile_type;
    localStorage.setItem("currentUser", JSON.stringify(this.user));
    if (this.user.type === "Client") {
      this.user.logo = session.data.profile_image_url;
      this.autoLogin();
      localStorage.setItem("currentUser", JSON.stringify(this.user));
    }

    if (!withoutRoute) this.redirectToCorrectRoute();
  }
  redirectToCorrectRoute() {
    let currentUser = this.getUser();
    if (
      this.isLoggedIn() &&
      currentUser.type === "RealEstateDeveloper" &&
      !currentUser.is_pass_complete_profile
    ) {
      this.router.navigate(["/developer/profile"]);
    } else if (
      this.isLoggedIn() &&
      currentUser.type === "RealEstateDeveloper"
    ) {
      this.router.navigate(["/developer/dashboard"]);
    } else if (this.isLoggedIn() && currentUser.type === "Client") {
      this.router.navigate(["/customer/finance/request"]);
    }
  }
  autoLogin() {
    if (this.isLoggedIn()) {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      if (this.user.type === "Client") {
        this.customerService.init();
      }
    } else {
      return;
    }
  }
  isLoggedIn() {
    if (localStorage.getItem("token") && localStorage.getItem("currentUser")) {
      return true;
    } else {
      return false;
    }
  }
  clearData() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("calcData");
    this.customerService.browsingStatus.next(0);
    this.customerService.draft.next({});
    this.router.navigate(["/"]);
  }
  logOut() {
    let logoutApi: string;

    if (this.getUser().type === "RealEstateDeveloper") {
      logoutApi = "developer-logout";
    } else if (this.getUser().type === "Client") {
      logoutApi = "client/logout";
    }

    this.http.create({}, logoutApi).subscribe(
      res => {
        if (res) {
          this.clearData();
        }
      },
      error => {
        this.clearData();
      }
    );
  }
}
