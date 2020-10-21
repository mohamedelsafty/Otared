import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Bank } from "../models/bank.model";
import { WorkCategory } from "../models/work-category.model";
import { Instance } from "../modules/projects/models/instance.model";
import { BehaviorSubject } from "rxjs";
import { DataResponse } from "../models/data-response.model";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class SearchInstancesService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  instances: BehaviorSubject<Instance[]> = new BehaviorSubject([]);
  itemsPerPage: number = 3;
  page: number = 1;
  query: string = "";
  minPrice: number = null;
  maxPrice: number = null;
  projectId: number = null;
  propertyTypeId: number = null;
  neighborhoodId: number = null;
  total: number = 1;
  cityId: number = null;
  real_estate_developer_id: number = null;
  min_number_of_rooms: number = null;
  max_number_of_rooms: number = null;
  min_area: number = null;
  max_area: number = null;
  instance_type: string = null;
  constructor(private httpService: HttpService, private auth:AuthService) {}
  public search() {
    let url = this.getUrl();
    this.isLoading.next(true);
    this.httpService.getAll(url).subscribe((res: any) => {
      this.instances.next(res.data);
      this.isLoading.next(false);
      this.setPagination(res);
    });
  }
  private getUrl(): string {
    let url =
      "Utility/Instance?page=" +
      this.page +
      "&itemsPerPage=" +
      this.itemsPerPage +
      "&q=" +
      this.query;
    this.minPrice ? (url += "&price=" + this.minPrice) : "";
    this.maxPrice ? (url += "&max_price=" + this.maxPrice) : "";
    this.projectId ? (url += "&project_id=" + this.projectId) : "";
    this.propertyTypeId
      ? (url += "&property_type_id=" + this.propertyTypeId)
      : "";
    this.cityId ? (url += "&city_id=" + this.cityId) : "";
    this.neighborhoodId
      ? (url += "&neighborhood_id=" + this.neighborhoodId)
      : "";
    this.real_estate_developer_id
      ? (url += "&real_estate_developer_id=" + this.real_estate_developer_id)
      : "";
      this.min_number_of_rooms
      ? (url += "&min_number_of_rooms=" + this.min_number_of_rooms)
      : "";
      this.max_number_of_rooms
      ? (url += "&max_number_of_rooms=" + this.max_number_of_rooms)
      : "";
      this.min_area
      ? (url += "&min_area=" + this.min_area)
      : "";
      this.max_area
      ? (url += "&max_area=" + this.max_area)
      : "";
      this.instance_type
      ? (url += "&instance_type=" + this.instance_type)
      : "";

    (this.auth.isLoggedIn() && this.auth.getUser().type === "Client")?
    (url += "&client_id=" + this.auth.getUser().id )
    : "";
    return url;
  }
  public reset() {
    this.itemsPerPage = 3;
    this.page = 1;
    this.query = "";
    this.minPrice = null;
    this.maxPrice = null;
    this.propertyTypeId = null;
    this.neighborhoodId = null;
    this.cityId = null;
    this.min_number_of_rooms = null;
    this.max_number_of_rooms = null;
    this.min_area = null;
    this.max_area = null;
    this.instance_type = null;
  }

  private setPagination(res: DataResponse) {
    this.page = res.meta.current_page;
    this.total = res.meta.total;
    this.itemsPerPage = res.meta.per_page;
  }
}
