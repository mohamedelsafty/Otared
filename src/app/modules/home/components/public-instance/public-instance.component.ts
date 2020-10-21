import { Component, OnInit, ViewChild } from "@angular/core";
import { Instance } from "src/app/shared/modules/projects/models/instance.model";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
  SwiperComponent,
  SwiperDirective,
} from "ngx-swiper-wrapper";
import { InstanceAdvantagesService } from "src/app/shared/services/instance-advantages.service";
import { Property } from "src/app/shared/models/property.model";
import { SearchInstancesService } from "src/app/shared/services/search-instances.service";

@Component({
  selector: "app-public-instance",
  templateUrl: "./public-instance.component.html",
  styleUrls: ["./public-instance.component.scss"],
})
export class PublicInstanceComponent implements OnInit {
  isLoading: boolean = true;
  instance: Instance;
  isShared: number = 0;
  instanceId: number = null;
  properties: Property[] = [];
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private searchInstancesService: SearchInstancesService
  ) {
    this.getAllProperty();
    this.instanceId = this.route.snapshot.params["id"];
    this.route.data.subscribe((data) => {
      if (data.shared) this.isShared = 1;
    });
  }
  private pagination: SwiperPaginationInterface = {
    el: ".swiper-pagination",
    clickable: true,
    hideOnClick: false,
  };
  public config: SwiperConfigInterface = {
    direction: "horizontal",
    slidesPerView: 1,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: this.pagination,
    grabCursor: true,
  };
  public slides = [
    "/assets/image/villa-slider.png",
    "/assets/image/villa-slider.png",
    "/assets/image/villa-slider.png",
  ];
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  ngOnInit(): void {
    this.getInstance();
  }
  getAllProperty() {
    this.httpService.getAll("get-all-property-type").subscribe((res: any) => {
      this.properties = res.success;
    });
  }
  getPropertyName(id: number): string {
    let property = this.properties.find((p: Property) => p.id === id);
    if (property) return property.name;
    else return "";
  }
  getInstance() {
    this.isLoading = true;
    if (this.instanceId) {
      this.httpService
        .getAll(
          "Utility/Instance/" + this.instanceId + "?counter=" + this.isShared
        )
        .subscribe((res: any) => {
          if (res) {
            this.instance = res.data;
            this.isLoading = false;
            this.searchInstancesService.real_estate_developer_id = this.instance.developer_id;
          }
        });
    }
  }
}
