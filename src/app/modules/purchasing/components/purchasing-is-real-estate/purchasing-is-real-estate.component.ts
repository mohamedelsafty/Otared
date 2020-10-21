import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PropertyInfo } from "../../models/purchasing.model";
import { PurchasingDataService } from "../../services/purchasing-data.service";
import { ProjectsService } from "src/app/shared/services/projects.service";
import { CalcDataService } from "src/app/modules/calc/services/calc-data.service";
import { CustomerService } from "src/app/shared/services/customer.service";
import { Instance } from "src/app/shared/modules/projects/models/instance.model";
import { PropertyTypeService } from "src/app/shared/services/property-type.service";
import { SearchInstancesService } from "src/app/shared/services/search-instances.service";

@Component({
  selector: "app-purchasing-is-real-estate",
  templateUrl: "./purchasing-is-real-estate.component.html",
  styleUrls: ["./purchasing-is-real-estate.component.scss"]
})
export class PurchasingIsRealEstateComponent implements OnInit {
  data: PropertyInfo = new PropertyInfo();
  projects: [] = [];
  projectSearch: string = "";
  projectLoading: boolean = false;
  instances: [] = [];
  units: [] = [];
  displayFn;
  selectedInstance: Instance;
  property_type_id: number = null;
  numberOfcards: number = 3;
  draft: any = {};
  instatnceId: any = null;
  isLoading: boolean = false;
  constructor(
    private router: Router,
    private purchasingDataService: PurchasingDataService,
    public projectsService: ProjectsService,
    private customerService: CustomerService,
    public propertyTypeService: PropertyTypeService,
    private searchInstancesService: SearchInstancesService,
    private route: ActivatedRoute
  ) {}
  searchForPrjects(event) {
    this.projectsService.search(event.target.value);
  }
  ngOnInit(): void {
    let unitId = this.route.snapshot.queryParams.unitId;
    this.instatnceId = this.route.snapshot.queryParams.instatnceId;
    if (this.instatnceId) {
      this.isLoading = true;
      this.projectsService.getInstanceById(this.instatnceId);
      this.projectsService.getUnitsbyInstanceId(this.instatnceId);
      this.projectsService.isLoading.subscribe(value => {
        this.isLoading = value;
      });
      this.projectsService.instance.subscribe(res => {
        if (res) {
          this.selectedInstance = res;
        }
      });
    }
    if (unitId) {
      this.data.instance_unit_id = unitId;
      this.goToNext();
    }
    this.propertyTypeService.findAll();
    this.displayFn = project => this.setProject(project);
    this.projectsService.projects.subscribe(res => {
      this.projects = res;
    });
    this.projectsService.instances.subscribe(res => {
      this.instances = res;
    });
    this.projectsService.isLoading.subscribe(value => {
      this.projectLoading = value;
    });
    this.projectsService.units.subscribe(value => {
      this.units = value;
    });
    this.data = this.purchasingDataService.getProperytInfo();
    this.customerService.draft.subscribe(res => {
      if (res) {
        this.draft = res;
      }
    });
  }

  setProject(project: any): string {
    if (project) {
      this.projectsService.getInstancesbyPorjectId(project.id);
      this.data.project_id = project.id;
      return project.text;
    }
  }
  propertyTypeChange() {
    if (!this.data.isHaveProperty) {
      this.searchForInstactes();
    }
  }
  instanceChange(event) {
    this.selectedInstance = this.instances.find(
      (instance: Instance) => instance.id == this.data.instance_id
    );
    if (this.selectedInstance)
      this.selectedInstance.price = this.selectedInstance.price.replace(
        /,/g,
        ""
      );
    if (this.selectedInstance.price > this.draft.max_value) {
      this.property_type_id = this.selectedInstance.property_type_id;
      this.searchForInstactes();
      return;
    }
    this.projectsService.getUnitsbyInstanceId(this.data.instance_id);
  }
  searchForInstactes() {
    this.searchInstancesService.maxPrice = this.draft.max_value;
    this.searchInstancesService.propertyTypeId = this.property_type_id;
    this.searchInstancesService.search();
  }
  goToNext() {
    this.purchasingDataService.setProperytInfo(this.data);
    this.router.navigate(["/purchasing/first-batch"]);
  }
}
