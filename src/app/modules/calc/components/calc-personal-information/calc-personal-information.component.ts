import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Months } from "src/app/shared/enums/hijri-months.model";
import { BanksService } from "src/app/shared/services/banks.service";
import { WorkCategoriesService } from "src/app/shared/services/work-categories.service";
import { WorkCategory } from "src/app/shared/models/work-category.model";
import { UtilityService } from "src/app/shared/services/utility.service";
import { CalcDataService } from "../../services/calc-data.service";
import { PersonalInfo } from "../../models/calc-form.model";
import { AuthorizedWorkCategories } from "src/app/shared/services/authorized-work-categories.service";

@Component({
  selector: "calc-financial-information",
  templateUrl: "./calc-personal-information.component.html",
  styleUrls: ["./calc-personal-information.component.scss"]
})
export class CalcPersonalInformationComponent implements OnInit {
  years = [];
  birthDate = [];
  jointEmployees = [];
  data: PersonalInfo = new PersonalInfo();
  months: string[] = Months;
  toppings = new FormControl();
  constructor(
    public calcDataService: CalcDataService,
    private router: Router,
    public banksService: BanksService,
    public workCategoriesService: WorkCategoriesService,
    public utility: UtilityService,
    private route: ActivatedRoute,
    public authorizedWorkCategories: AuthorizedWorkCategories
  ) {}
  ngOnInit(): void {
    this.banksService.findAll();
    this.workCategoriesService.findAll();
    this.authorizedWorkCategories.findAll();
    this.data = this.calcDataService.getPersonalInfo();
    this.workCategoriesService.isUpdated.subscribe(value => {
      if (value) this.workCategoryChange();
    });
    for (let i = 1441; i >= 1370; i--) {
      this.years.push(i);
    }
    for (let i = 1423; i >= 1350; i--) {
      this.birthDate.push(i);
    }
  }
  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.calcDataService.setPersonalInfo(this.data);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(["../support-information"], {
        relativeTo: this.route,
        queryParamsHandling: "preserve"
      });
    }
  }

  workCategoryChange() {
    let category: WorkCategory = this.workCategoriesService.findRecordByCode(
      this.data.work_category_code
    );
    if (category && category.employers && category.employers.length)
      this.jointEmployees = category.employers;
    else this.jointEmployees = [];
  }
}
