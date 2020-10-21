import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  PersonalInfo,
  CalcData,
  FundSupport,
  InitialCalculator
} from "../models/calc-form.model";
import { CalcFlowService } from "./calc-flow.service";
import { BehaviorSubject, Observable, observable } from "rxjs";
import { HttpService } from "src/app/shared/services/http.service";
import { Router } from "@angular/router";
import { PurchasingDataService } from "../../purchasing/services/purchasing-data.service";
import { CustomerService } from "src/app/shared/services/customer.service";

@Injectable({
  providedIn: "root"
})
export class CalcDataService {
  private calcData: CalcData;
  public offersDetails: BehaviorSubject<any> = new BehaviorSubject({});
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isUpdated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private clacFlowService: CalcFlowService,
    private HttpService: HttpService,
    private router: Router,
    private purchasingDataService: PurchasingDataService,
    private customerServiceu: CustomerService
  ) {}

  init(): Observable<boolean> {
    if (!this.calcData) {
      if (this.getFromLocalStorge()) {
        this.calcData = new CalcData(this.getFromLocalStorge());
        if (this.calcData.personalInfo.getValid())
          this.clacFlowService.validateStep("personal-information");
        if (this.calcData.FundSupport.getValid())
          this.clacFlowService.validateStep("support-information");
      } else this.calcData = new CalcData();
    }

    this.isUpdated.next(true);
    return this.isUpdated;
  }
  getPersonalInfo(): PersonalInfo {
    const personalData: PersonalInfo = this.calcData.personalInfo;
    return personalData;
  }

  setPersonalInfo(data: PersonalInfo) {
    this.calcData.personalInfo = new PersonalInfo(data);
    this.saveToLocalStorge();
    this.clacFlowService.validateStep("personal-information");
  }

  getFundSupportInfo(): FundSupport {
    const FundSupportData: FundSupport = this.calcData.FundSupport;
    return FundSupportData;
  }

  setFundSupportInfo(data: FundSupport) {
    this.calcData.FundSupport = new FundSupport(data);
    this.saveToLocalStorge();
    this.clacFlowService.validateStep("support-information");
  }
  private saveToLocalStorge() {
    localStorage.setItem(
      "calcData",
      JSON.stringify(this.calcData.getData(true))
    );
  }
  private getFromLocalStorge(): CalcData {
    return JSON.parse(localStorage.getItem("calcData"));
  }
  getResults() {
    this.isLoading.next(true);
    this.HttpService.create(
      this.calcData.getData(),
      "General/initial-calculator"
    ).subscribe(res => {
      this.isLoading.next(false);
      this.offersDetails.next(res);
    });
  }
  save(params?: string) {
    this.isLoading.next(true);
    this.offersDetails.subscribe(offersDetailsRes => {
      if (offersDetailsRes) {
        this.HttpService.update(
          {
            ...this.calcData.getData(),
            ...new InitialCalculator(offersDetailsRes)
          },
          "client/Demand/draft-personal-data"
        ).subscribe(res => {
          if (res) {
            this.customerServiceu.init();
            this.goNext();
          }
        });
      }
    });
  }
  goNext() {
    let purchasingData = this.purchasingDataService.data;
    if (purchasingData.propertyInfo.instance_unit_id) {
      this.router.navigate(["/purchasing/is-real-estate"], {
        queryParams: { unitId: purchasingData.propertyInfo.instance_unit_id }
      });
    } else {
      this.router.navigate(["/purchasing/is-real-estate"], {
        queryParamsHandling: "preserve"
      });
    }
  }
}
