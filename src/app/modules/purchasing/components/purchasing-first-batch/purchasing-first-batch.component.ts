import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PaymentStatus } from "../../models/purchasing.model";
import { PurchasingDataService } from "../../services/purchasing-data.service";

@Component({
  selector: "app-purchasing-first-batch",
  templateUrl: "./purchasing-first-batch.component.html",
  styleUrls: ["./purchasing-first-batch.component.scss"]
})
export class PurchasingFirstBatchComponent implements OnInit {
  data: PaymentStatus = new PaymentStatus();
  constructor(
    private router: Router,
    private purchasingDataService: PurchasingDataService
  ) {}

  ngOnInit(): void {
    this.data = this.purchasingDataService.getPaymentStatus();
  }
  goBack() {
    this.router.navigate(["/purchasing/is-real-estate"]);
  }
  goToNext() {
    this.purchasingDataService.setPaymentStatus(this.data);
    this.router.navigate(["/purchasing/functional-info"]);
  }
}
