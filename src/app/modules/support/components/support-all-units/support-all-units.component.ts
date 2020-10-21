import { Component, OnInit } from "@angular/core";

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
  selector: "app-support-all-units",
  templateUrl: "./support-all-units.component.html",
  styleUrls: ["./support-all-units.component.scss"],
})
export class SupportAllUnitsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
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
