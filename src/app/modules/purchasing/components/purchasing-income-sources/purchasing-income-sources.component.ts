import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  AdditionalIncome,
  AdditionalIncomeStatus
} from "../../models/purchasing.model";
import { WorkCategoriesService } from "src/app/shared/services/work-categories.service";
import { BanksService } from "src/app/shared/services/banks.service";
import { PurchasingDataService } from "../../services/purchasing-data.service";

@Component({
  selector: "app-purchasing-income-sources",
  templateUrl: "./purchasing-income-sources.component.html",
  styleUrls: ["./purchasing-income-sources.component.scss"]
})
export class PurchasingIncomeSourcesComponent implements OnInit {
  data: AdditionalIncomeStatus = new AdditionalIncomeStatus();
  constructor(
    private router: Router,
    public workCategoriesService: WorkCategoriesService,
    public banksService: BanksService,
    private purchasingDataService: PurchasingDataService
  ) {}

  ngOnInit(): void {
    this.data = this.purchasingDataService.getAdditionalIncomeStatus();
    this.workCategoriesService.findAll();
    this.banksService.findAll();
  }
  delete(index: number) {
    this.data.additional_incomes.splice(index, 1);
  }
  add() {
    this.data.additional_incomes.push(new AdditionalIncome());
  }
  changeIncomeStatus() {
    this.data.additional_incomes = [];
    if (this.data.have_additional_incomes) {
      this.data.additional_incomes.push(new AdditionalIncome());
    }
  }
  goToNext() {
    this.purchasingDataService.setAdditionalIncomeStatus(this.data);
    this.router.navigate(["/purchasing/solidarity"]);
  }
}
