import { HttpClient } from "@angular/common/http";
import {
  PropertyInfo,
  PurchasingData,
  PaymentStatus,
  FinanceInformation,
  Obligation,
  FinancialStatus,
  AdditionalIncomeStatus,
  JointStatus
} from "./../models/purchasing.model";
import { Injectable } from "@angular/core";
import { PurchasingflowService } from "./purchasing-flow.service";
import { HttpService } from "src/app/shared/services/http.service";
import { BehaviorSubject, Observable } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { AuthService } from "src/app/shared/services/auth.service";
import { CustomerService } from "src/app/shared/services/customer.service";
@Injectable({
  providedIn: "root"
})
export class PurchasingDataService {
  instanceIdSelected: BehaviorSubject<number> = new BehaviorSubject(null);
  constructor(
    private purchasingflowService: PurchasingflowService,
    public httpService: HttpService,
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private customerService: CustomerService
  ) {}
  public RealEstateInfoFormValid = false;
  public data: PurchasingData = new PurchasingData();
  public offerList: BehaviorSubject<any[]> = new BehaviorSubject([]);
  offerListLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  draft: BehaviorSubject<any> = new BehaviorSubject(null);
  isUpated: boolean = false;

  init(): Observable<boolean> {
    if (!this.isUpated) {
      this.customerService.draft.subscribe(res => {
        this.data = new PurchasingData(res);
        if (this.data.propertyInfo.getValid())
          this.purchasingflowService.validateStep("is-real-estate");
        if (this.data.paymentStatus.getValid())
          this.purchasingflowService.validateStep("first-batch");
        if (this.data.financeInformation.getValid())
          this.purchasingflowService.validateStep("functional-info");
        if (this.data.obligations.getValid())
          this.purchasingflowService.validateStep("monthly-fees");
        if (this.data.financialStatus.getValid())
          this.purchasingflowService.validateStep("financial-default");
        if (this.data.additionalIncomeStatus.getValid())
          this.purchasingflowService.validateStep("income-sources");
        if (this.data.jointStatus.getValid())
          this.purchasingflowService.validateStep("solidarity");
        this.isUpated = true;
        this.draft.next(res);
      });
    }

    return this.draft;
  }

  getProperytInfo(): PropertyInfo {
    const propertyInfo: PropertyInfo = this.data.propertyInfo;
    return propertyInfo;
  }
  setProperytInfo(data: PropertyInfo, isSave: boolean = true) {
    this.data.propertyInfo = new PropertyInfo(data);
    this.purchasingflowService.validateStep("is-real-estate");
    if (isSave) this.saveToStore(this.data.propertyInfo.getData());
  }
  setUnit(unitId, instanceId, projectId) {
    this.data.propertyInfo.instance_id = instanceId;
    this.data.propertyInfo.instance_unit_id = unitId;
    this.data.propertyInfo.project_id = projectId;
    this.instanceIdSelected.next(instanceId);
  }
  clearUnit() {
    this.data.propertyInfo.instance_id = null;
    this.data.propertyInfo.instance_unit_id = null;
    this.data.propertyInfo.project_id = null;
    this.instanceIdSelected.next(null);
  }
  getPaymentStatus() {
    const paymentStatus: PaymentStatus = this.data.paymentStatus;
    return paymentStatus;
  }
  setPaymentStatus(data: PaymentStatus) {
    this.data.paymentStatus = new PaymentStatus(data);
    this.purchasingflowService.validateStep("first-batch");
    this.saveToStore(this.data.paymentStatus.getData());
  }
  getFinanceInformation() {
    const financeInformation: FinanceInformation = this.data.financeInformation;
    return financeInformation;
  }
  setFinanceInformation(data: FinanceInformation) {
    this.data.financeInformation = new FinanceInformation(data);
    this.purchasingflowService.validateStep("functional-info");
    this.saveToStore(this.data.financeInformation.getData());
  }
  getObligations() {
    const obligations: Obligation = this.data.obligations;
    return obligations;
  }
  setObligations(data: Obligation) {
    this.data.obligations = new Obligation(data);
    this.purchasingflowService.validateStep("monthly-fees");
    this.saveToStore(this.data.obligations.getData());
  }
  getFinancialStatus() {
    const financialStatus: FinancialStatus = this.data.financialStatus;
    return financialStatus;
  }
  setFinancialStatus(data: FinancialStatus) {
    this.data.financialStatus = new FinancialStatus(data);
    this.purchasingflowService.validateStep("financial-default");
    this.saveToStore(this.data.financialStatus.getData());
  }
  getAdditionalIncomeStatus() {
    const additionalIncomeStatus: AdditionalIncomeStatus = this.data
      .additionalIncomeStatus;
    return additionalIncomeStatus;
  }
  setAdditionalIncomeStatus(data: AdditionalIncomeStatus) {
    this.data.additionalIncomeStatus = new AdditionalIncomeStatus(data);
    this.purchasingflowService.validateStep("income-sources");
    this.saveToStore(this.data.additionalIncomeStatus.getData());
  }
  getJointStatus() {
    const jointStatus: JointStatus = this.data.jointStatus;
    return jointStatus;
  }
  setJointStatus(data: JointStatus) {
    this.data.jointStatus = new JointStatus(data);
    this.purchasingflowService.validateStep("solidarity");
    this.saveToStore(this.data.jointStatus.getData(), true);
  }
  saveToStore(data, isSave?: boolean) {
    this.httpService
      .update(data, "client/Demand/save-draft")
      .subscribe(res => {});
  }
  getOffers() {
    this.offerListLoading.next(true);
    this.httpService
      .getAll("client/Demand/draft-offers-list")
      .subscribe((res: any) => {
        this.offerList.next(res.data.offers_list);
        this.offerListLoading.next(false);
      });
  }
  selectOffer(data) {
    this.httpService
      .update(data, "client/Demand/set-draft-offer")
      .subscribe((res: any) => {
        this.snackBar.open("شكرا, تم رفع طلب التمويل", "إغلاق ", {
          duration: 4000
        });
        this.customerService.init();
        this.auth.redirectToCorrectRoute();
      });
  }
}
