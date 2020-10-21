import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material";
import { CalcDataService } from "../../services/calc-data.service";
import { FundSupport } from "../../models/calc-form.model";

@Component({
  selector: "app-calc-support-information",
  templateUrl: "./calc-support-information.component.html",
  styleUrls: ["./calc-support-information.component.scss"]
})
export class CalcSupportInformationComponent implements OnInit {
  radioChecked: any = "";
  fundSupportData: FundSupport = new FundSupport();

  constructor(
    public calcDataService: CalcDataService,
    public router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fundSupportData = this.calcDataService.getFundSupportInfo();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.calcDataService.setFundSupportInfo(this.fundSupportData);
    return true;
  }

  setValue() {
    if (this.fundSupportData.family_numbers < 0) {
      this.fundSupportData.family_numbers = 0;
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(["../available-offers"], {
        relativeTo: this.route,
        queryParamsHandling: "preserve"
      });
    }
    //  console.log(this.fundSupportData);
  }

  convetToNumber(value) {
    var t = this.fromArabicNumber(value);
    return t.replace(/\D/g, "");
  }

  fromArabicNumber(n) {
    if (!n) return n;
    n = "" + n;
    n = n
      .replace(/٠/g, 0)
      .replace(/١/g, 1)
      .replace(/٢/g, 2)
      .replace(/٣/g, 3)
      .replace(/٤/g, 4)
      .replace(/٥/g, 5)
      .replace(/٦/g, 6)
      .replace(/٧/g, 7)
      .replace(/٨/g, 8)
      .replace(/٩/g, 9);

    return "" + n;
  }

  // openPrecedentConfirmDialog(url): void {
  //     const dialogReft = this.dialog.open(PrecedentConfirmDialogComponent, {

  //         data: url
  //     });
  // }
}
