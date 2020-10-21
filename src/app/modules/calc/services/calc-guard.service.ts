import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route
} from '@angular/router';
import { CalcFlowService } from './calc-flow.service';
import { Observable } from 'rxjs';
import { CalcDataService } from './calc-data.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalcGuardService implements CanActivate {
  constructor(private router: Router, private calcFlowService: CalcFlowService, private calcDataServic:CalcDataService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.calcDataServic.init().pipe(
      map(res=>{
        let path: string = route.routeConfig.path;
        return this.verifySteps(path);
      })
      )
   
  }

  verifySteps(path): boolean {
    // If any of the previous steps is invalid, go back to the first invalid step
    let firstPath = this.calcFlowService.getFirstInvalidStep(path);
    if (firstPath.length > 0) {
      let url = `/calc/${firstPath}`;
      this.router.navigate([url]);
      return false;
    }

    return true;
  }
}
