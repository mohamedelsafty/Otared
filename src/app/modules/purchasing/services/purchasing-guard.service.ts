import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { PurchasingflowService } from "./purchasing-flow.service";
import { PurchasingDataService } from "./purchasing-data.service";
@Injectable({
  providedIn: "root"
})
export class PurchasingGuardService implements CanActivate {
  constructor(
    private router: Router,
    private purchasingflowService: PurchasingflowService,
    private purchasingDataService: PurchasingDataService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.purchasingDataService.init().pipe(
      map(res => {
        console.log(res);
        let path: string = route.routeConfig.path;
        return this.verifySteps(path);
      })
    );
  }

  verifySteps(path): boolean {
    // If any of the previous steps is invalid, go back to the first invalid step
    console.log(path);
    let firstPath = this.purchasingflowService.getFirstInvalidStep(path);
    if (firstPath.length > 0) {
      let url = `/purchasing/${firstPath}`;
      this.router.navigate([url]);
      return false;
    }

    return true;
  }
}
