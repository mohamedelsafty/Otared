import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Months } from "src/app/shared/enums/hijri-months.model";
import { JointStatus } from "../../models/purchasing.model";
import { PurchasingDataService } from "../../services/purchasing-data.service";
import { BanksService } from "src/app/shared/services/banks.service";
import { WorkCategoriesService } from "src/app/shared/services/work-categories.service";
import { WorkCategory } from "src/app/shared/models/work-category.model";

@Component({
  selector: "app-purchasing-solidarity",
  templateUrl: "./purchasing-solidarity.component.html",
  styleUrls: ["./purchasing-solidarity.component.scss"]
})
export class PurchasingSolidarityComponent implements OnInit {
  years = [];
  months: string[] = Months;
  data: JointStatus = new JointStatus();
  jointEmployees: [] = [];
  constructor(
    private router: Router,
    private purchasingDataService: PurchasingDataService,
    public banksService: BanksService,
    public workCategoriesService: WorkCategoriesService
  ) {}

  ngOnInit(): void {
    this.banksService.findAll();
    this.workCategoriesService.findAll();
    this.data = this.purchasingDataService.getJointStatus();
    for (let i = 1423; i >= 1350; i--) {
      this.years.push(i);
    }
  }
  workCategoryChange() {
    let category: WorkCategory = this.workCategoriesService.findRecord(
      this.data.joint.work_category_id
    );
    if (category && category.employers && category.employers.length)
      this.jointEmployees = category.employers;
    else this.jointEmployees = [];
  }

  goToNext() {
    this.purchasingDataService.setJointStatus(this.data);
    this.router.navigate(["/purchasing/offers"]);
  }
}
