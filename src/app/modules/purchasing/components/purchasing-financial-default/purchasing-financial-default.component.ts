import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FinancialStatus,
  FinancialTrouble
} from "../../models/purchasing.model";
import { PurchasingDataService } from "../../services/purchasing-data.service";
import { BanksService } from "src/app/shared/services/banks.service";

@Component({
  selector: "app-purchasing-financial-default",
  templateUrl: "./purchasing-financial-default.component.html",
  styleUrls: ["./purchasing-financial-default.component.scss"]
})
export class PurchasingFinancialDefaultComponent implements OnInit {
  data: FinancialStatus = new FinancialStatus();
  constructor(
    private router: Router,
    private purchasingDataService: PurchasingDataService,
    public banksService: BanksService
  ) {
    this.banksService.findAll();
  }

  ngOnInit(): void {
    this.data = this.purchasingDataService.getFinancialStatus();
  }
  changeFinancialStatus() {
    this.data.financial_troubles = [];
    if (this.data.have_financial_troubles) {
      this.data.financial_troubles.push(new FinancialTrouble());
    }
  }
  goToNext() {
    this.purchasingDataService.setFinancialStatus(this.data);
    this.router.navigate(["/purchasing/income-sources"]);
  }
}
