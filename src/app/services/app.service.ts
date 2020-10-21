import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private router: Router) {}
  init() {}
  getUser() {
    if (this.isLoggedIn()) {
      return JSON.parse(localStorage.getItem("currentUser"));
    }
  }
  isLoggedIn() {
    if (localStorage.getItem("token") && localStorage.getItem("currentUser")) {
      return true;
    } else {
      return false;
    }
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
}
