import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { SearchInstancesService } from "src/app/shared/services/search-instances.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { Instance } from "../../modules/projects/models/instance.model";
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: "search-instances",
  templateUrl: "./search-instances.component.html",
  styleUrls: ["./search-instances.component.scss"]
})
export class SearchInstancesComponent implements OnInit, OnDestroy {
  constructor(
    public searchInstancesService: SearchInstancesService,
    public authService: AuthService,
    private customerService: CustomerService
  ) {}
  instances: Instance[];
  isLoading: boolean = true;
  searchKey: string = "";
  @Input() itemsPerPage: number;
  @Input() searchShow: boolean;
  @Input() pagination: boolean;
  @Input() filterDesign: boolean;
  @Input() perRow: number = 3;
  @Input() withSelectOption: boolean;
  @Input() selectOptionTarget: string;
  ngOnInit(): void {
    this.instances = [];
    this.searchInstancesService.instances.subscribe(res => {
      this.instances = res;
    });
    this.searchInstancesService.isLoading.subscribe(res => {
      this.isLoading = res;
    });
    if (
      !this.selectOptionTarget &&
      this.selectOptionTarget !== "selectInstance"
    ) {
      this.searchInstancesService.reset();
      this.searchInstancesService.itemsPerPage = this.itemsPerPage;
      this.searchInstancesService.search();
    }
  }

  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.searchInstancesService.query = event.target.value;
      this.searchInstancesService.search();
    }
  }
  setPage(page) {
    this.searchInstancesService.page = page;
    this.searchInstancesService.search();
  }
  ngOnDestroy() {
    this.searchInstancesService.projectId = null;
    this.searchInstancesService.real_estate_developer_id = null;
  }
}
