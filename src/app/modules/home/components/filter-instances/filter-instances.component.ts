import { Component, OnInit, Input } from "@angular/core";
import { Options, LabelType } from "ng5-slider";
import { CitiesService } from "src/app/shared/services/city.service";
import { NeighborhoodsService } from "src/app/shared/services/neighborhood.service";
import { DecimalPipe } from "@angular/common";
import { PropertyTypeService } from "src/app/shared/services/property-type.service";
import { SearchInstancesService } from "src/app/shared/services/search-instances.service";

@Component({
  selector: "app-filter-instances",
  templateUrl: "./filter-instances.component.html",
  styleUrls: ["./filter-instances.component.scss"]
})
export class FilterInstancesComponent implements OnInit {
  @Input() devId: number;
  @Input() projectId: number;
  @Input() developerName: string;
  @Input() projectName: string;
  value: number = 100;
  minPrice: number = 300000;
  maxPrice: number = 10000000;
  cityId: number = -1;
  query: string = "";
  min_number_of_rooms: number = 1;
  max_number_of_rooms: number = 30;
  min_area: number = 90;
  max_area: number = 5000;
  neighborhoodId: number = -1;
  propertyId: number = -1;
  SaleOnmap: boolean = false;
  ReadyUnits: boolean = false;
  options: Options = {
    floor: 0,
    ceil: 250
  };
  priceOptions: Options = {
    floor: 1000,
    ceil: 10000000,
    rightToLeft: true,
    translate: (value: number, label: LabelType): string => {
      return this.priceTranslate(value);
    }
  };

  constructor(
    private searchInstancesService: SearchInstancesService,
    public propertyTypeService: PropertyTypeService,
    public citiesService: CitiesService,
    public neighborhoodsService: NeighborhoodsService,
    public decimalPipe: DecimalPipe
  ) {}

  ngOnInit(): void {
    if (!this.devId && !this.projectId) {
      this.citiesService.findAll();
    }
    this.propertyTypeService.findAll();
  }
  cityChange() {
    if (!this.devId && !this.projectId) {
      if (this.cityId > 0)
        this.neighborhoodsService.findAllByCityId(this.cityId);
    } else {
      let city = this.citiesService.findRecord(this.cityId);
      if (city && city.neighborhood_list) {
        this.neighborhoodsService.neighborhoods = city.neighborhood_list;
      }
    }
  }
  priceTranslate(value: number): string {
    return this.decimalPipe.transform(value);
  }
  doReset() {
    this.minPrice = 1000;
    this.maxPrice = 10000000;
    this.cityId = -1;
    this.query = "";
    this.min_number_of_rooms = 1;
    this.max_number_of_rooms = 30;
    this.min_area = 50;
    this.max_area = 5000;
    this.neighborhoodId = -1;
    this.propertyId = -1;
    this.SaleOnmap = false;
    this.ReadyUnits = false;
    this.searchInstancesService.reset();
    this.searchInstancesService.itemsPerPage = 9;
    this.searchInstancesService.search();
  }
  doFilter() {
    this.searchInstancesService.reset();
    this.searchInstancesService.itemsPerPage = 9;
    if (this.devId)
      this.searchInstancesService.real_estate_developer_id = this.devId;
    if (this.projectId) this.searchInstancesService.projectId = this.projectId;
    if (this.query) this.searchInstancesService.query = this.query;
    if (this.minPrice !== 1000)
      this.searchInstancesService.minPrice = this.minPrice;
    if (this.maxPrice !== 10000000)
      this.searchInstancesService.maxPrice = this.maxPrice;
    if (this.cityId > 0) this.searchInstancesService.cityId = this.cityId;
    if (this.neighborhoodId > 0)
      this.searchInstancesService.neighborhoodId = this.neighborhoodId;
    if (this.propertyId > 0)
      this.searchInstancesService.propertyTypeId = this.propertyId;
    if (this.min_number_of_rooms !== 1)
      this.searchInstancesService.min_number_of_rooms = this.min_number_of_rooms;
    if (this.max_number_of_rooms !== 30)
      this.searchInstancesService.max_number_of_rooms = this.max_number_of_rooms;
    if (this.min_area !== 50)
      this.searchInstancesService.min_area = this.min_area;
    if (this.max_area !== 5000)
      this.searchInstancesService.max_area = this.max_area;
    if (this.SaleOnmap && !this.ReadyUnits)
      this.searchInstancesService.instance_type = "SaleOnmap";
    if (!this.SaleOnmap && this.ReadyUnits)
      this.searchInstancesService.instance_type = "ReadyUnits";
    this.searchInstancesService.search();
  }
}
