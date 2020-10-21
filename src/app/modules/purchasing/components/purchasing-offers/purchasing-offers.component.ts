import { Component, OnInit } from "@angular/core";
import { PurchasingDataService } from "../../services/purchasing-data.service";

@Component({
  selector: "app-purchasing-offers",
  templateUrl: "./purchasing-offers.component.html",
  styleUrls: ["./purchasing-offers.component.scss"]
})
export class PurchasingOffersComponent implements OnInit {
  activeFilter = false;
  isFilter = "";
  banksData = [];
  newBanksData = [];
  offersFillter: any = "";
  isLoading: boolean = true;
  demands;
  currentBank;
  link = "";
  sendData;
  paramID: any;
  math: any;
  fundYearsRange = 20;
  installmentRange = 4000;

  installmentChip = false;
  minInstallmentRangeValue: number;
  maxInstallmentRangeHighValue: number;
  installmentRangeValue: number = this.minInstallmentRangeValue;
  installmentRangeHighValue: number = this.maxInstallmentRangeHighValue;

  fundedChip = false;
  minFundedRangeValue: number;
  maxFundedRangeHighValue: number;
  fundedRangeValue: number = this.minFundedRangeValue;
  fundedRangeHighValue: number = this.maxFundedRangeHighValue;

  constructor(private purchasingDataService: PurchasingDataService) {}

  ngOnInit(): void {
    this.purchasingDataService.getOffers();
    this.purchasingDataService.offerList.subscribe(res => {
      this.banksData = res;
      this.newBanksData = res;
      const funding_years = [];
      this.newBanksData.forEach(arr => {
        funding_years.push(arr.funding_years_before);
      });
      this.minFundedRangeValue = Math.min(...funding_years);
      this.maxFundedRangeHighValue = Math.max(...funding_years);
      this.fundedRangeValue = Math.min(...funding_years);
      this.fundedRangeHighValue = Math.max(...funding_years);
      const installments = [];
      this.newBanksData.forEach(arr => {
        installments.push(arr.installment);
      });
      this.minInstallmentRangeValue = Math.min(...installments);
      this.maxInstallmentRangeHighValue = Math.max(...installments);
      this.installmentRangeValue = Math.min(...installments);
      this.installmentRangeHighValue = Math.max(...installments);
    });
    this.purchasingDataService.offerListLoading.subscribe(res => {
      this.isLoading = res;
    });
  }

  filter() {
    this.activeFilter = !this.activeFilter;
  }

  installmentValueChange(range): void {
    if (
      range.value > this.minInstallmentRangeValue ||
      range.highValue < this.maxInstallmentRangeHighValue
    ) {
      this.installmentChip = true;
      // console.log(this.installmentChip);
    } else {
      this.installmentChip = false;
    }
  }
  offersFillterChange(event) {
    var sortedArray = this.banksData.sort(function(a, b) {
      if (event.target.value == "max_min") {
        return b.total_financing_amount > a.total_financing_amount
          ? 1
          : b.total_financing_amount < a.total_financing_amount
          ? -1
          : 0;
      } else if (event.target.value == "min_max") {
        return a.total_financing_amount > b.total_financing_amount
          ? 1
          : a.total_financing_amount < b.total_financing_amount
          ? -1
          : 0;
      } else if (event.target.value == "min_max_ratio") {
        return a.ratio > b.ratio ? 1 : a.ratio < b.ratio ? -1 : 0;
      } else if (event.target.value == "max_min_ratio") {
        return b.ratio > a.ratio ? 1 : b.ratio < a.ratio ? -1 : 0;
      } else if (event.target.value == "min_max_installment") {
        return a.installment > b.installment
          ? 1
          : a.installment < b.installment
          ? -1
          : 0;
      } else if (event.target.value == "min_max_funding_years_before") {
        return a.funding_years_before > b.funding_years_before
          ? 1
          : a.funding_years_before < b.funding_years_before
          ? -1
          : 0;
      }
    });
    this.banksData = sortedArray;
    // console.log(sortedArray)
  }

  fundedValueChange(range): void {
    if (
      range.value > this.minFundedRangeValue ||
      range.highValue < this.maxFundedRangeHighValue
    ) {
      this.fundedChip = true;
    } else {
      this.fundedChip = false;
    }
  }

  setInstallmentRange() {
    this.installmentRangeValue = this.minInstallmentRangeValue;
    this.installmentRangeHighValue = this.maxInstallmentRangeHighValue;
    this.installmentChip = false;
  }
  chooseOffer(bank) {
    let data = {
      bank_code: bank.bank_code,
      is_salary_transferred: bank.is_salary_transferred === "yes" ? 1 : 0
    };
    this.purchasingDataService.selectOffer(data);
  }
  setFundedtRange() {
    this.fundedRangeValue = this.minFundedRangeValue;
    this.fundedRangeHighValue = this.maxFundedRangeHighValue;
    this.fundedChip = false;
  }
}
