import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FinanceInformation } from "../../models/purchasing.model";
import { PurchasingDataService } from "../../services/purchasing-data.service";

@Component({
  selector: "app-purchasing-personal-information",
  templateUrl: "./purchasing-personal-information.component.html",
  styleUrls: ["./purchasing-personal-information.component.scss"]
})
export class PurchasingPersonalInformationComponent implements OnInit {
  data: FinanceInformation = new FinanceInformation();
  constructor(
    private router: Router,
    private purchasingDataService: PurchasingDataService
  ) {}

  ngOnInit(): void {
    this.data = this.purchasingDataService.getFinanceInformation();
  }
  goBack() {
    this.router.navigate(["/purchasing/first-batch"]);
  }
  goToNext() {
    this.purchasingDataService.setFinanceInformation(this.data);
    this.router.navigate(["/purchasing/monthly-fees"]);
  }
}
