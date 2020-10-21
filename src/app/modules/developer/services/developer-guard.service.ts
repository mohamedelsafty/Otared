
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: "root",
})
export class DeveloperGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.getUser().account_status === 'accepted') {
      return true;
    } else {
      this.router.navigate(["/developer/dashboard"]);
      return false;
    }
  }
}