import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Obligation, MonthlyObligation } from "../../models/purchasing.model";
import { PurchasingDataService } from "../../services/purchasing-data.service";
import { BanksService } from "src/app/shared/services/banks.service";

@Component({
  selector: "app-purchasing-monthly-fees",
  templateUrl: "./purchasing-monthly-fees.component.html",
  styleUrls: ["./purchasing-monthly-fees.component.scss"]
})
export class PurchasingMonthlyFeesComponent implements OnInit {
  data: Obligation = new Obligation();
  constructor(
    private router: Router,
    private purchasingDataService: PurchasingDataService,
    public banksService: BanksService
  ) {
    this.banksService.findAll();
  }
  changeObligationsStatus() {
    this.data.monthly_obligations = [];
    if (this.data.have_monthly_obligations) {
      this.data.monthly_obligations.push(new MonthlyObligation());
    }
  }
  deleteObligation(index: number) {
    this.data.monthly_obligations.splice(index, 1);
  }
  addNewObligation() {
    this.data.monthly_obligations.push(new MonthlyObligation());
  }

  ngOnInit(): void {
    this.data = this.purchasingDataService.getObligations();
  }

  goToNext() {
    this.purchasingDataService.setObligations(this.data);
    this.router.navigate(["/purchasing/financial-default"]);
  }
}
