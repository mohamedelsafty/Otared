import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route
} from "@angular/router";
import { CalcFlowService } from "./calc-flow.service";
import { Observable } from "rxjs";
import { CalcDataService } from "./calc-data.service";
import { map } from "rxjs/operators";
import { CustomerService } from "src/app/shared/services/customer.service";
@Injectable({
  providedIn: "root"
})
export class CalcBrowsingGuardService implements CanActivate {
  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.customerService.browsingStatus.pipe(
      map(res => {
        if (res < 3) {
          return true;
        } else {
          this.customerService.browsingRoute();
        }
      })
    );
  }
}
