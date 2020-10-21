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
import { SupportChangeStateDialogComponent } from "../support-change-state-dialog/support-change-state-dialog.component";
import { SupportUniteDetailsDialogComponent } from "../support-unite-details-dialog/support-unite-details-dialog.component";
const ELEMENT_DATA = [
  {
    position: 8,
    name: "محجوزة",
    weight: "فيصل محمد الغامدي",
    symbol: "16/03/2020",
    action: "",
  },
  {
    position: 7,
    name: "متاحة",
    weight: "-",
    symbol: "-",
    action: "",
  },
  {
    position: 455,
    name: "متاحة",
    weight: "-",
    symbol: "-",
    action: "",
  },
  {
    position: 455,
    name: "متاحة",
    weight: "-",
    symbol: "-",
    action: "",
  },
];

@Component({
  selector: "app-support-new-developers-details",
  templateUrl: "./support-new-developers-details.component.html",
  styleUrls: ["./support-new-developers-details.component.scss"],
})
export class SupportNewDevelopersDetailsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  public show: boolean = true;
  ngOnInit() {}

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
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  changeStateDialog(): void {
    const dialogRef = this.dialog.open(SupportChangeStateDialogComponent, {
      width: "410px",
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  allUnitesDialog(): void {
    const dialogRef = this.dialog.open(SupportUniteDetailsDialogComponent, {
      width: "800px",
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
