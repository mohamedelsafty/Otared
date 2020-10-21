import { ActivatedRoute } from "@angular/router";
import { HttpService } from "./../../../../services/http.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from "ngx-swiper-wrapper";
import Swiper from "swiper";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material";
import { InstanceChangeStateDialogComponent } from "../instance-change-state-dialog/instance-change-state-dialog.component";
import { Property } from 'src/app/shared/models/property.model';
import { ShareWithClinetDialogComponent } from '../share-with-clinet-dialog/share-with-clinet-dialog.component';
import { InstanceAdvantagesService } from 'src/app/shared/services/instance-advantages.service';

@Component({
  selector: "app-project-instance-details",
  templateUrl: "./project-instance-details.component.html",
  styleUrls: ["./project-instance-details.component.scss"],
})
export class ProjectInstanceDetailsComponent implements OnInit {
  instance;
  units = [];
  instanceId = {
    instance_id: undefined,
  };
  isLoading = true;
  properties: Property[] = [];
  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private route: ActivatedRoute,
    public instanceAdvantagesService: InstanceAdvantagesService
  ) {}
  public show: boolean = true;
  ngOnInit() {
    this.instanceAdvantagesService.findAll();
    this.instanceId.instance_id = this.route.snapshot.params["id"];
    this.getInstance();
    this.getAllProperty();
  }

  public slides = [
    "/assets/image/villa-slider.png",
    "/assets/image/villa-slider.png",
    "/assets/image/villa-slider.png",
  ];

  public type: string = "component";

  public disabled: boolean = false;

  private pagination: SwiperPaginationInterface = {
    el: ".swiper-pagination",
    clickable: true,
    hideOnClick: false,
  };

  getAllProperty(){
    this.httpService.getAll('get-all-property-type').subscribe((res: any)=>{
     this.properties = res.success;
    })
  }
  getPropertyName(id:number): string{
    let property = this.properties.find((p:Property)=>p.id===id);
    if(property) return property.name;
    else return '';
  }
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

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  public onIndexChange(index: number) {
    // console.log("Swiper index: ", index);
  }

  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "action",
  ];
  dataSource = new MatTableDataSource();

  changeStateDialog(unit): void {
    const dialogRef = this.dialog.open(InstanceChangeStateDialogComponent, {
      width: "410px",
      data: { unit: unit },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  allUnitesDialog(): void {
    // const dialogRef = this.dialog.open(SupportUniteDetailsDialogComponent, {
    //   width: "800px",
    // });
    // dialogRef.afterClosed().subscribe((result) => {});
  }

  getInstance() {
    this.httpService
      .create(this.instanceId, "real-estate-developer/project/get-instance")
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.instance = res["success"].instance;
          console.log(this.instance);
          this.getUnits();
        }
      });
  }
  shareWithClient(unit){
    let data = {
      instances_id: unit.instances_id,
      instances_unit_id: unit.id
    }
    const dialogRef = this.dialog.open(ShareWithClinetDialogComponent, {
      width: "410px",
      data:data,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  getUnits() {
    this.httpService
      .getAll(
        `real-estate-developer/instances-units-show?instance_id=${this.instanceId.instance_id}`
      )
      .subscribe((res) => {
        if (res) {
          this.units = res["data"];
          console.log(this.units);
        }
      });
  }
}
