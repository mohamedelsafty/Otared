import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { AppService } from "src/app/services/app.service";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(
    private http: HttpService,
    private router: Router,
    private app: AppService
  ) {}
  browsingStatus: BehaviorSubject<number> = new BehaviorSubject(0);
  draft: BehaviorSubject<any> = new BehaviorSubject({});
  init() {
    this.http
      .getAll("client/property-browsing-status")
      .subscribe((res: any) => {
        if (res) {
          this.browsingStatus.next(res.data.browsing_status);
          this.draft.next(res.data.draft);
        }
      });
  }
  browsingRoute() {
    this.browsingStatus.subscribe(res => {
      if (res < 3) {
        this.router.navigate(["/calc/available-offers"]);
      }
      if (res == 3) {
        this.router.navigate(["/purchasing/is-real-estate"]);
      }
      if (res == 4) {
        this.router.navigate(["/purchasing/offers"]);
      }
      if (res == 5) {
        this.app.redirectToCorrectRoute();
      }
    });
  }
}
