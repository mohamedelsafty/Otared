import { Component, OnInit } from "@angular/core";
import { CalcDataService } from "../../services/calc-data.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { LoginDialogComponent } from "src/app/modules/home/components/login-dialog/login-dialog.component";
import { MatDialog } from "@angular/material";
import { Instance } from "src/app/shared/modules/projects/models/instance.model";
import { ProjectsService } from "src/app/shared/services/projects.service";
import { SearchInstancesService } from "src/app/shared/services/search-instances.service";
import { PurchasingDataService } from "src/app/modules/purchasing/services/purchasing-data.service";

@Component({
  selector: "app-calc-available-offers",
  templateUrl: "./calc-available-offers.component.html",
  styleUrls: ["./calc-available-offers.component.scss"]
})
export class CalcAvailableOffersComponent implements OnInit {
  banksData;
  isLoading: boolean = true;
  offers: any = {};
  isForsave: boolean = false;
  instance: Instance;
  cardNumbers: number = 3;
  instanceIdSelected: number = null;
  constructor(
    private calcDataService: CalcDataService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private projectsService: ProjectsService,
    private searchInstancesService: SearchInstancesService,
    private purchasingDataService: PurchasingDataService
  ) {}
  ngOnInit() {
    let paramNum = this.route.snapshot.queryParams;
    if (paramNum.instatnceId) {
      this.getInstance(paramNum.instatnceId);
    }
    if (paramNum.save) this.isForsave = true;
    this.calcDataService.getResults();
    this.calcDataService.isLoading.subscribe(value => {
      this.isLoading = value;
    });
    this.calcDataService.offersDetails.subscribe(res => {
      this.offers = res;
      if (this.instance && this.instance.price > this.offers.max_value) {
        this.purchasingDataService.instanceIdSelected.subscribe(res => {
          this.instanceIdSelected = res;
        });
        this.searchForInstances();
      }
    });
  }
  more() {
    this.cardNumbers = 6;
    this.searchForInstances();
  }
  searchForInstances() {
    this.searchInstancesService.itemsPerPage = this.cardNumbers;
    this.searchInstancesService.maxPrice = this.offers.max_value;
    this.searchInstancesService.maxPrice = this.offers.max_value;
    this.searchInstancesService.propertyTypeId = this.instance.property_type_id;
    this.searchInstancesService.search();
  }
  getInstance(instatnceId: number) {
    this.isLoading = true;
    this.projectsService.getInstanceById(instatnceId);
    this.projectsService.instance.subscribe(res => {
      this.instance = res;
      if (this.instance && this.instance.price)
        this.instance.price = this.instance.price.replace(/,/g, "");
    });
  }
  save() {
    this.calcDataService.save();
  }
  next() {
    if (
      this.authService.isLoggedIn() &&
      this.authService.getUser().type === "Client"
    ) {
      this.calcDataService.save();
    } else if (!this.authService.isLoggedIn()) {
      let params: any = { next: "/calc/available-offers" };
      if (this.instance) {
        params.instatnceId = this.instance.id;
      }

      const dialogRef = this.dialog.open(LoginDialogComponent, {
        width: "410px",
        data: {
          message: "يجب الدخول أولاً إلى الموقع للتمكن من استكمال بيانات الطلب",
          params: params
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) this.calcDataService.save();
      });
    }
  }
}
